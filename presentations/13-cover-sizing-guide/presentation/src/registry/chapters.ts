import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { standard } from "../chapters/02-standard/standard";
import { NARRATIONS as N02 } from "../chapters/02-standard/narrations";
import { measure } from "../chapters/03-measure/measure";
import { NARRATIONS as N03 } from "../chapters/03-measure/narrations";
import { fitting } from "../chapters/04-fitting/fitting";
import { NARRATIONS as N04 } from "../chapters/04-fitting/narrations";
import { tips } from "../chapters/05-tips/tips";
import { NARRATIONS as N05 } from "../chapters/05-tips/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "證書套尺寸指南", narrations: N01, Component: Coldopen },
  { id: "02-standard", title: "02 standard", narrations: N02, Component: standard },
  { id: "03-measure", title: "03 measure", narrations: N03, Component: measure },
  { id: "04-fitting", title: "04 fitting", narrations: N04, Component: fitting },
  { id: "05-tips", title: "05 tips", narrations: N05, Component: tips },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];