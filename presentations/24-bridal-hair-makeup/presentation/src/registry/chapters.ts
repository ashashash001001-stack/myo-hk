import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Trial } from "../chapters/02-trial/Trial";
import { Style } from "../chapters/03-style/Style";
import { Hair } from "../chapters/04-hair/Hair";
import { Day } from "../chapters/05-day/Day";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-trial/narrations";
import { NARRATIONS as N03 } from "../chapters/03-style/narrations";
import { NARRATIONS as N04 } from "../chapters/04-hair/narrations";
import { NARRATIONS as N05 } from "../chapters/05-day/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "新娘妝髮", narrations: N01, Component: Coldopen },
  { id: "02-trial", title: "試妝時間", narrations: N02, Component: Trial },
  { id: "03-style", title: "風格選擇", narrations: N03, Component: Style },
  { id: "04-hair", title: "髮型設計", narrations: N04, Component: Hair },
  { id: "05-day", title: "婚禮日準備", narrations: N05, Component: Day },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
