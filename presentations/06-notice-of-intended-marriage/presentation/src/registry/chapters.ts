import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { eligibility } from "../chapters/02-eligibility/eligibility";
import { NARRATIONS as N02 } from "../chapters/02-eligibility/narrations";
import { methods } from "../chapters/03-methods/methods";
import { NARRATIONS as N03 } from "../chapters/03-methods/narrations";
import { fee } from "../chapters/04-fee/fee";
import { NARRATIONS as N04 } from "../chapters/04-fee/narrations";
import { display } from "../chapters/05-display/display";
import { NARRATIONS as N05 } from "../chapters/05-display/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "擬結婚通知書", narrations: N01, Component: Coldopen },
  { id: "02-eligibility", title: "02 eligibility", narrations: N02, Component: eligibility },
  { id: "03-methods", title: "03 methods", narrations: N03, Component: methods },
  { id: "04-fee", title: "04 fee", narrations: N04, Component: fee },
  { id: "05-display", title: "05 display", narrations: N05, Component: display },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];