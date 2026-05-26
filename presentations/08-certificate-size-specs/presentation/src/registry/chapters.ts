import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Size } from "../chapters/02-size/Size";
import { Content } from "../chapters/03-content/Content";
import { Care } from "../chapters/04-care/Care";
import { Myo } from "../chapters/05-myo/Myo";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-size/narrations";
import { NARRATIONS as N03 } from "../chapters/03-content/narrations";
import { NARRATIONS as N04 } from "../chapters/04-care/narrations";
import { NARRATIONS as N05 } from "../chapters/05-myo/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "證書尺寸", narrations: N01, Component: Coldopen },
  { id: "02-size", title: "標準尺寸", narrations: N02, Component: Size },
  { id: "03-content", title: "證書內容", narrations: N03, Component: Content },
  { id: "04-care", title: "保護方法", narrations: N04, Component: Care },
  { id: "05-myo", title: "My O! 證書套", narrations: N05, Component: Myo },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
