import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { trial } from "../chapters/02-trial/trial";
import { NARRATIONS as N02 } from "../chapters/02-trial/narrations";
import { style } from "../chapters/03-style/style";
import { NARRATIONS as N03 } from "../chapters/03-style/narrations";
import { hair } from "../chapters/04-hair/hair";
import { NARRATIONS as N04 } from "../chapters/04-hair/narrations";
import { day } from "../chapters/05-day/day";
import { NARRATIONS as N05 } from "../chapters/05-day/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "新娘化妝髮型指南", narrations: N01, Component: Coldopen },
  { id: "02-trial", title: "02 trial", narrations: N02, Component: trial },
  { id: "03-style", title: "03 style", narrations: N03, Component: style },
  { id: "04-hair", title: "04 hair", narrations: N04, Component: hair },
  { id: "05-day", title: "05 day", narrations: N05, Component: day },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];