import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { leather } from "../chapters/02-leather/leather";
import { NARRATIONS as N02 } from "../chapters/02-leather/narrations";
import { linen } from "../chapters/03-linen/linen";
import { NARRATIONS as N03 } from "../chapters/03-linen/narrations";
import { velvet } from "../chapters/04-velvet/velvet";
import { NARRATIONS as N04 } from "../chapters/04-velvet/narrations";
import { custom } from "../chapters/05-custom/custom";
import { NARRATIONS as N05 } from "../chapters/05-custom/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚證書套比較", narrations: N01, Component: Coldopen },
  { id: "02-leather", title: "02 leather", narrations: N02, Component: leather },
  { id: "03-linen", title: "03 linen", narrations: N03, Component: linen },
  { id: "04-velvet", title: "04 velvet", narrations: N04, Component: velvet },
  { id: "05-custom", title: "05 custom", narrations: N05, Component: custom },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];