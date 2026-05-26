import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Registry } from "../chapters/02-registry/Registry";
import { Celebrant } from "../chapters/03-celebrant/Celebrant";
import { Church } from "../chapters/04-church/Church";
import { Comparison } from "../chapters/05-comparison/Comparison";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-registry/narrations";
import { NARRATIONS as N03 } from "../chapters/03-celebrant/narrations";
import { NARRATIONS as N04 } from "../chapters/04-church/narrations";
import { NARRATIONS as N05 } from "../chapters/05-comparison/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "登記處定監禮人？", narrations: N01, Component: Coldopen },
  { id: "02-registry", title: "婚姻登記處", narrations: N02, Component: Registry },
  { id: "03-celebrant", title: "婚姻監禮人", narrations: N03, Component: Celebrant },
  { id: "04-church", title: "教堂行禮", narrations: N04, Component: Church },
  { id: "05-comparison", title: "三者比較", narrations: N05, Component: Comparison },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
