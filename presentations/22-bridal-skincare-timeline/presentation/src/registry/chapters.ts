import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { sixMonths } from "../chapters/02-sixMonths/sixMonths";
import { threeMonths } from "../chapters/03-threeMonths/threeMonths";
import { oneMonth } from "../chapters/04-oneMonth/oneMonth";
import { oneWeek } from "../chapters/05-oneWeek/oneWeek";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-sixMonths/narrations";
import { NARRATIONS as N03 } from "../chapters/03-threeMonths/narrations";
import { NARRATIONS as N04 } from "../chapters/04-oneMonth/narrations";
import { NARRATIONS as N05 } from "../chapters/05-oneWeek/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "新娘護膚時間表", narrations: N01, Component: Coldopen },
  { id: "02-sixMonths", title: "6 個月前", narrations: N02, Component: sixMonths },
  { id: "03-threeMonths", title: "3 個月前", narrations: N03, Component: threeMonths },
  { id: "04-oneMonth", title: "1 個月前", narrations: N04, Component: oneMonth },
  { id: "05-oneWeek", title: "1 個禮拜前", narrations: N05, Component: oneWeek },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
