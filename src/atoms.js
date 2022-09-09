import { atom } from "recoil";

// Default will only hold the id of one question

export const hasToken = atom({
key: "hasToken",
default: false,
})

export const activeNow = atom({
  key: "activeNow",
  default: 0,
});

export const movieSelected = atom({
  key: "movieSelected",
  default: false,
});

export const emailEntered = atom({
  key: "emailEntered",
  default: "",
});
