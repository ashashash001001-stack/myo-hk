import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Gifts } from "../chapters/02-gifts/Gifts";
import { Process } from "../chapters/03-process/Process";
import { Modern } from "../chapters/04-modern/Modern";
import { Advice } from "../chapters/05-advice/Advice";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-gifts/narrations";
import { NARRATIONS as N03 } from "../chapters/03-process/narrations";
import { NARRATIONS as N04 } from "../chapters/04-modern/narrations";
import { NARRATIONS as N05 } from "../chapters/05-advice/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "過大禮指南", narrations: N01, Component: Coldopen },
  { id: "02-gifts", title: "禮品清單", narrations: N02, Component: Gifts },
  { id: "03-process", title: "過程習俗", narrations: N03, Component: Process },
  { id: "04-modern", title: "現代做法", narrations: N04, Component: Modern },
  { id: "05-advice", title: "過大禮貼士", narrations: N05, Component: Advice },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
