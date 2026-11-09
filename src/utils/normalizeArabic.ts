/**
 * Normalizes Arabic strings by removing diacritics, tatweel, and unifying letter variants.
 * Crucial for fuzzy matching football player names, clubs, and answers.
 */
export function normalizeArabic(text: string): string {
  if (!text) return '';

  return (
    text
      // Trim and lowercase (for latin mixed text)
      .trim()
      .toLowerCase()
      // Remove Arabic Tashkeel (diacritics: Fatha, Damma, Kasra, Tanween, Sukun, Shadda, etc.)
      .replace(/[\u064B-\u065F\u0670]/g, '')
      // Remove Tatweel (kashida)
      .replace(/\u0640/g, '')
      // Normalize Alif forms (أ, إ, آ, ٱ -> ا)
      .replace(/[أإآٱ]/g, 'ا')
      // Normalize Alif Maqsura to Ya (ى -> ي)
      .replace(/ى/g, 'ي')
      // Normalize Ta Marbuta to Ha or standard (ة -> ه)
      .replace(/ة/g, 'ه')
      // Normalize Persian/Urdu Yeh/Kaf if entered
      .replace(/ك/g, 'ك')
      .replace(/[\u06CC]/g, 'ي')
      .replace(/[\u06A9]/g, 'ك')
      // Remove common prefix "ال" if desired in specific matchers, or keep standard
      // Normalize punctuation and extra whitespace
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/**
 * Normalizes Latin / English strings (lower case, remove diacritics / accents, punctuation).
 */
export function normalizeLatin(text: string): string {
  if (!text) return '';

  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accent marks (e.g. Pelé -> Pele, Müller -> Muller)
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * General football answer normalizer that handles both Arabic and Latin text.
 */
export function normalizeAnswer(text: string): string {
  if (!text) return '';
  const cleaned = text.trim();
  // If text contains Arabic characters
  if (/[\u0600-\u06FF]/.test(cleaned)) {
    return normalizeArabic(cleaned);
  }
  return normalizeLatin(cleaned);
}

