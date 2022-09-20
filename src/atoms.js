import { atom } from "recoil";

// Default will only hold the id of one question

export const hasToken = atom({
key: "hasToken",
default: false,
})

export const currentMov = atom({
  key: "currentMov",
  default: ""
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

export const title = atom({
key: "title", 
default: ""
})

export const overview = atom({
  key: "overview",
  default: ""
})

export const air_date = atom({
  key: "air_date",
  default: ""
})

export const genres = atom({
  key: "genres",
  default: ""
})

export const originalLanguage = atom({
  key: "originalLanguage",
  default: ""
})

export const vote_average = atom({
  key: "vote_average",
  default: ""
})

export const vote_count = atom({
  key: "vote_account",
  default: ""
})