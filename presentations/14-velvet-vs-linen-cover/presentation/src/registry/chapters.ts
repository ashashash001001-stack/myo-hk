import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Velvet } from "../chapters/02-velvet/Velvet";
import { Linen } from "../chapters/03-linen/Linen";
import { Comparison } from "../chapters/04-comparison/Comparison";
import { Recommend } from "../chapters/05-recommend/Recommend";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-velvet/narrations";
import { NARRATIONS as N03 } from "../chapters/03-linen/narrations";
import { NARRATIONS as N04 } from "../chapters/04-comparison/narrations";
import { NARRATIONS as N05 } from "../chapters/05-recommend/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "絨布定亞麻", narrations: N01, Component: Coldopen },
  { id: "02-velvet", title: "絨布特點", narrations: N02, Component: Velvet },
  { id: "03-linen", title: "亞麻布特點", narrations: N03, Component: Linen },
  { id: "04-comparison", title: "兩者比較", narrations: N04, Component: Comparison },
  { id: "05-recommend", title: "My O! 建議", narrations: N05, Component: Recommend },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
