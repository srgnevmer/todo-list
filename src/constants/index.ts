import { Link, Priority, Category } from "../types";

export const FIRST_HYPHEN_INDEX: number = 4;

export const SECOND_HYPHEN_INDEX: number = 9;

export const MAX_LENGTH_UNIQUE_ID: number = 14;

export const MIN_WINDOW_WIDTH: number = 1024;

export const ESCAPE: string = "Escape";

export const REPOSITORY_LINK: string = "https://github.com/srgnevmer/todo-list";

const NUMBERS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const LETTERS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const CHARACTERS: (number[] | string[])[] = [NUMBERS, LETTERS];

export const LINKS: Link[] = [
  { to: "/", name: "all", iconName: "home" },
  { to: "/active", name: "active", iconName: "bookmark" },
  { to: "/completed", name: "completed", iconName: "bookmark-slash" },
];

export const PRIORITIES: Priority[] = ["low", "medium", "high"];

export const CATEGORIES: Category[] = [
  "chore",
  "learning",
  "mind care",
  "body care",
];
