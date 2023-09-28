import {describe, it, expect} from "vitest";

import {getStorageData} from "../../src/helpers/getStorageData";

describe("Tests in getStorageData", () => {
  const key = "randomKey";
  const correctCounter = 5;
  const incorrectCounter = 8;

  it("should return 0 if key is not valid", () => {
    const result = getStorageData(key, "inc");

    expect(result).toBe(0);
  });

  it("should return correctCounter if key is valid and 'inc'", () => {
    localStorage.setItem(key, JSON.stringify({correctCounter, incorrectCounter}));
    const result = getStorageData(key, "inc");

    expect(result).toBe(5);
  });

  it("should return incorrectCounter if key is valid and 'dec'", () => {
    localStorage.setItem(key, JSON.stringify({correctCounter, incorrectCounter}));
    const result = getStorageData(key, "dec");

    expect(result).toBe(8);
  });
});
