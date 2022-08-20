import { atom } from "recoil";

// Default will only hold the id of one question

export const activeNow = atom({
  key: "activeNow",
  default: 0,
});
