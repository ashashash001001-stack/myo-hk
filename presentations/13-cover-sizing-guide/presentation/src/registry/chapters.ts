import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Standard } from "../chapters/02-standard/Standard";
import { Measure } from "../chapters/03-measure/Measure";
import { Fitting } from "../chapters/04-fitting/Fitting";
import { Tips } from "../chapters/05-tips/Tips";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-standard/narrations";
import { NARRATIONS as N03 } from "../chapters/03-measure/narrations";
import { NARRATIONS as N04 } from "../chapters/04-fitting/narrations";
import { NARRATIONS as N05 } from "../chapters/05-tips/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "證書套尺寸", narrations: N01, Component: Coldopen },
  { id: "02-standard", title: "標準尺寸", narrations: N02, Component: Standard },
  { id: "03-measure", title: "點樣量度", narrations: N03, Component: Measure },
  { id: "04-fitting", title: "試用測試", narrations: N04, Component: Fitting },
  { id: "05-tips", title: "選購貼士", narrations: N05, Component: Tips },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
