import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { 6months } from "../chapters/02-6months/6months";
import { 3months } from "../chapters/03-3months/3months";
import { 1month } from "../chapters/04-1month/1month";
import { 1week } from "../chapters/05-1week/1week";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-6months/narrations";
import { NARRATIONS as N03 } from "../chapters/03-3months/narrations";
import { NARRATIONS as N04 } from "../chapters/04-1month/narrations";
import { NARRATIONS as N05 } from "../chapters/05-1week/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "新娘護膚時間表", narrations: N01, Component: Coldopen },
  { id: "02-6months", title: "6 個月前", narrations: N02, Component: 6months },
  { id: "03-3months", title: "3 個月前", narrations: N03, Component: 3months },
  { id: "04-1month", title: "1 個月前", narrations: N04, Component: 1month },
  { id: "05-1week", title: "1 個禮拜前", narrations: N05, Component: 1week },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
