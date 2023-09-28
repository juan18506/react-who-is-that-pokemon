import {StorageData} from "../types";

export const getStorageData = (key: string, action: "inc" | "dec"): number => {
  const storageValue = localStorage.getItem(key);

  if (storageValue === null) {
    return 0;
  }

  if (action === "inc") {
    return (JSON.parse(storageValue) as StorageData).correctCounter;
  }

  return (JSON.parse(storageValue) as StorageData).incorrectCounter;
};
