const closeBrackets: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export const getBracketsCloseCorrectly = (str: string) => {
  const length = str.length;

  if (length % 2 === 1) return false;

  const regex = /^[\[\]\(\)\{\}]*$/g;

  if (!regex.test(str)) return false;

  for (let i = 0; i < length / 2; i++) {
    if (closeBrackets[str[i]] !== str[length - (i + 1)]) {
      return false;
    }
  }

  return true;
};
