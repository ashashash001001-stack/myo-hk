import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { meaning } from "../chapters/02-meaning/meaning";
import { NARRATIONS as N02 } from "../chapters/02-meaning/narrations";
import { time } from "../chapters/03-time/time";
import { NARRATIONS as N03 } from "../chapters/03-time/narrations";
import { items } from "../chapters/04-items/items";
import { NARRATIONS as N04 } from "../chapters/04-items/narrations";
import { steps } from "../chapters/05-steps/steps";
import { NARRATIONS as N05 } from "../chapters/05-steps/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "上頭儀式指南", narrations: N01, Component: Coldopen },
  { id: "02-meaning", title: "02 meaning", narrations: N02, Component: meaning },
  { id: "03-time", title: "03 time", narrations: N03, Component: time },
  { id: "04-items", title: "04 items", narrations: N04, Component: items },
  { id: "05-steps", title: "05 steps", narrations: N05, Component: steps },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];