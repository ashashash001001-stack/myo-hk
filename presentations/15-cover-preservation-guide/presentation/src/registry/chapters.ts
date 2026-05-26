import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Cleaning } from "../chapters/02-cleaning/Cleaning";
import { Storage } from "../chapters/03-storage/Storage";
import { Handling } from "../chapters/04-handling/Handling";
import { Materials } from "../chapters/05-materials/Materials";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-cleaning/narrations";
import { NARRATIONS as N03 } from "../chapters/03-storage/narrations";
import { NARRATIONS as N04 } from "../chapters/04-handling/narrations";
import { NARRATIONS as N05 } from "../chapters/05-materials/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "證書套保存", narrations: N01, Component: Coldopen },
  { id: "02-cleaning", title: "清潔方法", narrations: N02, Component: Cleaning },
  { id: "03-storage", title: "存放方式", narrations: N03, Component: Storage },
  { id: "04-handling", title: "使用注意", narrations: N04, Component: Handling },
  { id: "05-materials", title: "材質保養", narrations: N05, Component: Materials },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
