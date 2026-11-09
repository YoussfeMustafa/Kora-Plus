import { describe, it, expect } from 'vitest';
import { normalizeArabic, normalizeLatin, normalizeAnswer } from '../normalizeArabic';

describe('Arabic Text Normalization', () => {
  it('removes Tashkeel (harakat / diacritics) and unifies letters', () => {
    const raw = 'كُرَةُ القَدَمِ';
    const normalized = normalizeArabic(raw);
    // Notice ة is unified to ه and tashkeel removed
    expect(normalized).toBe('كره القدم');
  });

  it('unifies alef forms (أ, إ, آ -> ا)', () => {
    expect(normalizeArabic('أحمد')).toBe('احمد');
    expect(normalizeArabic('إبراهيم')).toBe('ابراهيم');
    expect(normalizeArabic('آلان شيرار')).toBe('الان شيرار');
  });

  it('unifies alef maqsura to ya (ى -> ي)', () => {
    expect(normalizeArabic('موسي')).toBe('موسي');
    expect(normalizeArabic('موسى')).toBe('موسي');
  });

  it('unifies ta marbuta to ha (ة -> ه)', () => {
    expect(normalizeArabic('برشلونة')).toBe('برشلونه');
    expect(normalizeArabic('برشلونه')).toBe('برشلونه');
  });

  it('removes Tatweel (kashida)', () => {
    expect(normalizeArabic('كــــورة')).toBe('كوره');
  });
});

describe('Latin Text Normalization', () => {
  it('removes accents and diacritics', () => {
    expect(normalizeLatin('Pelé')).toBe('pele');
    expect(normalizeLatin('Müller')).toBe('muller');
    expect(normalizeLatin('Modrić')).toBe('modric');
  });

  it('trims and normalizes whitespace', () => {
    expect(normalizeLatin('  Lionel   Messi  ')).toBe('lionel messi');
  });
});

describe('Bilingual normalizeAnswer', () => {
  it('correctly normalizes Arabic input', () => {
    expect(normalizeAnswer('مِيسِي')).toBe('ميسي');
  });

  it('correctly normalizes Latin input', () => {
    expect(normalizeAnswer('Cristiano Ronaldo')).toBe('cristiano ronaldo');
  });
});
