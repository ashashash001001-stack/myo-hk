import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Leather } from "../chapters/02-leather/Leather";
import { Linen } from "../chapters/03-linen/Linen";
import { Velvet } from "../chapters/04-velvet/Velvet";
import { Custom } from "../chapters/05-custom/Custom";
import { CTA } from "../chapters/06-cta/CTA";
import { narrations as N01 } from "../chapters/01-coldopen/narrations";
import { narrations as N02 } from "../chapters/02-leather/narrations";
import { narrations as N03 } from "../chapters/03-linen/narrations";
import { narrations as N04 } from "../chapters/04-velvet/narrations";
import { narrations as N05 } from "../chapters/05-custom/narrations";
import { narrations as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "證書套比較", narrations: N01, Component: Coldopen },
  { id: "02-leather", title: "皮革證書套", narrations: N02, Component: Leather },
  { id: "03-linen", title: "亞麻布證書套", narrations: N03, Component: Linen },
  { id: "04-velvet", title: "絨布證書套", narrations: N04, Component: Velvet },
  { id: "05-custom", title: "客製化", narrations: N05, Component: Custom },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
