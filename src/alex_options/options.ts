export type ProfanitySureness = 0 | 1 | 2

export function isValidProfanitySureness(v: number): v is ProfanitySureness {
  return [0, 1, 2].includes(v);
}

const PROFANITY_SURENESS = "PROFANITY_SURENESS"

function setProfanitySureness(profanitySureness: ProfanitySureness) {
  chrome.storage.sync.set({
    [PROFANITY_SURENESS]: profanitySureness
  });
}

const getProfanitySureness = () => new Promise<ProfanitySureness>(
  resolve => {
    chrome.storage.sync.get(
      (o: object) => {
        const v = o[PROFANITY_SURENESS];

        if (isValidProfanitySureness(v)) {
          resolve(v);
        } else {
          resolve(0);
        }
      }
    );
  }
);

export const Options = {
  getProfanitySureness,
  setProfanitySureness
}