import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { velvet } from "../chapters/02-velvet/velvet";
import { NARRATIONS as N02 } from "../chapters/02-velvet/narrations";
import { linen } from "../chapters/03-linen/linen";
import { NARRATIONS as N03 } from "../chapters/03-linen/narrations";
import { comparison } from "../chapters/04-comparison/comparison";
import { NARRATIONS as N04 } from "../chapters/04-comparison/narrations";
import { recommend } from "../chapters/05-recommend/recommend";
import { NARRATIONS as N05 } from "../chapters/05-recommend/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "天鵝絨 vs 亞麻證書套", narrations: N01, Component: Coldopen },
  { id: "02-velvet", title: "02 velvet", narrations: N02, Component: velvet },
  { id: "03-linen", title: "03 linen", narrations: N03, Component: linen },
  { id: "04-comparison", title: "04 comparison", narrations: N04, Component: comparison },
  { id: "05-recommend", title: "05 recommend", narrations: N05, Component: recommend },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];