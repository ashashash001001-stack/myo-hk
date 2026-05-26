import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Daily } from "../chapters/02-daily/Daily";
import { Cleaning } from "../chapters/03-cleaning/Cleaning";
import { Storage } from "../chapters/04-storage/Storage";
import { Professional } from "../chapters/05-professional/Professional";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-daily/narrations";
import { NARRATIONS as N03 } from "../chapters/03-cleaning/narrations";
import { NARRATIONS as N04 } from "../chapters/04-storage/narrations";
import { NARRATIONS as N05 } from "../chapters/05-professional/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚戒保養", narrations: N01, Component: Coldopen },
  { id: "02-daily", title: "日常護理", narrations: N02, Component: Daily },
  { id: "03-cleaning", title: "清潔方法", narrations: N03, Component: Cleaning },
  { id: "04-storage", title: "存放注意", narrations: N04, Component: Storage },
  { id: "05-professional", title: "專業保養", narrations: N05, Component: Professional },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
