import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Technology } from "../chapters/02-technology/Technology";
import { Durability } from "../chapters/03-durability/Durability";
import { Colors } from "../chapters/04-colors/Colors";
import { Custom } from "../chapters/05-custom/Custom";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-technology/narrations";
import { NARRATIONS as N03 } from "../chapters/03-durability/narrations";
import { NARRATIONS as N04 } from "../chapters/04-colors/narrations";
import { NARRATIONS as N05 } from "../chapters/05-custom/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "熱轉印技術", narrations: N01, Component: Coldopen },
  { id: "02-technology", title: "熱轉印原理", narrations: N02, Component: Technology },
  { id: "03-durability", title: "耐久性", narrations: N03, Component: Durability },
  { id: "04-colors", title: "色彩表現", narrations: N04, Component: Colors },
  { id: "05-custom", title: "My O! 應用", narrations: N05, Component: Custom },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
