import { describe, it, expect } from 'vitest';
import { isFuzzyMatch } from '../fuzzyMatch';

describe('Fuzzy Answer Matching', () => {
  it('matches exact strings ignoring case', () => {
    const res = isFuzzyMatch('lionel messi', 'Lionel Messi');
    expect(res.isMatch).toBe(true);
  });

  it('matches accepted aliases', () => {
    const res = isFuzzyMatch('CR7', 'Cristiano Ronaldo', ['Ronaldo', 'CR7']);
    expect(res.isMatch).toBe(true);
  });

  it('matches player surname or partial word', () => {
    const res = isFuzzyMatch('Messi', 'Lionel Messi', ['Leo Messi']);
    expect(res.isMatch).toBe(true);
  });

  it('matches Arabic names with diacritics and hamza differences', () => {
    const res = isFuzzyMatch('محمد صلاح', 'مُحَمَّد صَلَاح', ['صلاح', 'مو صلاح']);
    expect(res.isMatch).toBe(true);
  });

  it('matches Arabic aliases', () => {
    const res = isFuzzyMatch('الدون', 'كريستيانو رونالدو', ['رونالدو', 'الدون']);
    expect(res.isMatch).toBe(true);
  });

  it('tolerates small typos with Fuse.js', () => {
    // "Lewandowsk" instead of "Lewandowski"
    const res = isFuzzyMatch('Lewandowsk', 'Robert Lewandowski', ['Lewandowski', 'Lewy']);
    expect(res.isMatch).toBe(true);
  });

  it('rejects clearly wrong answers', () => {
    const res = isFuzzyMatch('Kylian Mbappe', 'Lionel Messi', ['Messi']);
    expect(res.isMatch).toBe(false);
  });
});

