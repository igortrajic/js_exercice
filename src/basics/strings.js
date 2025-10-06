/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof haystack !== "string") {
    throw new Error("Unsupported type")
  }
  if (typeof needle !== "string") {
    throw new Error("Unsupported type")
  }
  if (typeof newWord !== "string") {
    throw new Error("Unsupported type")
  }
  const regex = new RegExp(needle, "gi"); 

  return haystack.replace(regex, (match) => {
    const reducedNewWord = newWord.slice(0, match.length);

    let result = "";
    for (let i = 0; i < reducedNewWord.length; i++) {
      const originalChar = match[i];
      const newChar = reducedNewWord[i];

      if (originalChar === originalChar.toUpperCase()) {
        result += newChar.toUpperCase();
      } else {
        result += newChar.toLowerCase();
      }
    }

    return result;
  });
}