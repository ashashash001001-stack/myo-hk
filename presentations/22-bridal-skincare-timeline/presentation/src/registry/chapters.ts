import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { SixMonths } from "../chapters/02-sixMonths/sixMonths";
import { NARRATIONS as N02 } from "../chapters/02-sixMonths/narrations";
import { ThreeMonths } from "../chapters/03-threeMonths/threeMonths";
import { NARRATIONS as N03 } from "../chapters/03-threeMonths/narrations";
import { OneMonth } from "../chapters/04-oneMonth/oneMonth";
import { NARRATIONS as N04 } from "../chapters/04-oneMonth/narrations";
import { OneWeek } from "../chapters/05-oneWeek/oneWeek";
import { NARRATIONS as N05 } from "../chapters/05-oneWeek/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "新娘護膚時間表", narrations: N01, Component: Coldopen },
  { id: "02-sixMonths", title: "準備工作", narrations: N02, Component: SixMonths },
  { id: "03-threeMonths", title: "療程安排", narrations: N03, Component: ThreeMonths },
  { id: "04-oneMonth", title: "婚禮日", narrations: N04, Component: OneMonth },
  { id: "05-oneWeek", title: "最後一週", narrations: N05, Component: OneWeek },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];