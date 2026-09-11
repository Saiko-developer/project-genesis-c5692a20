# Unit 9 — Real Listening & Speaking content

Rebuild Unit 9D so it matches the textbook page you uploaded, and play the real Unit 9 recording instead of falling back to nothing.

## What changes for the learner

**Listening (9D · A)**
- The real "Unit 9 – Climate Change" recording plays in the lesson player. Today Unit 9 has no audio at all, so the player is empty.
- All 10 true/false statements about forests, exactly as printed, each with a Burmese translation and a hidden answer to check afterwards.

**Speaking (9D · B and C)**
- A reference panel of the opinion phrases, split into "Personal" and "General" columns, with Burmese notes on when to use each.
- The full car-and-parking dialogue between A and B with its eight numbered blanks, plus the eight lettered expressions to choose from. Each blank can be answered and revealed one at a time.
- A pair-practice prompt closing the section, with the completed dialogue available as a model.

## Technical notes

- Upload `Unit_9_-_Climate_Change.mp3` through the assets CLI to `src/data/lesson-audio/unit9.mp3.asset.json`; register it as key `9` in `UNIT_AUDIO` in `src/lib/localData.ts` (same `encodeURI(asset.url)` pattern as units 5–8).
- Rewrite the `9D` lesson entry in `src/data/textbookUnit9.json` so the listening statements, the opinion-phrase tables, the dialogue lines, the blank options, and the answer key are all stored as real structured data rather than one prose blob in `bonusQuestions`.
- Add to `src/data/unit9Supplement.ts`: `listening9D_translations` (Burmese for each of the 10 statements), `opinionPhrases9D` (personal/general lists with Burmese glosses), and `dialogue9D` (ordered speaker lines, blank numbers, options, answers).
- In `src/components/lesson/Unit9SkillView.tsx`, split `ListeningSpeakingView9` into a listening branch (audio player + `ExerciseGroup` of the T/F items) and a speaking branch (phrase panel + dialogue with per-blank `AnswerTryBox`/`ToggleReveal` + pair practice). No Unit 1–8 files are touched.
