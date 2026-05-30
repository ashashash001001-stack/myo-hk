import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { proposal } from "../chapters/02-proposal/proposal";
import { NARRATIONS as N02 } from "../chapters/02-proposal/narrations";
import { guoda } from "../chapters/03-guoda/guoda";
import { NARRATIONS as N03 } from "../chapters/03-guoda/narrations";
import { wedding } from "../chapters/04-wedding/wedding";
import { NARRATIONS as N04 } from "../chapters/04-wedding/narrations";
import { honeymoon } from "../chapters/05-honeymoon/honeymoon";
import { NARRATIONS as N05 } from "../chapters/05-honeymoon/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "中式婚禮完整流程", narrations: N01, Component: Coldopen },
  { id: "02-proposal", title: "早上流程", narrations: N02, Component: proposal },
  { id: "03-guoda", title: "婚禮儀式", narrations: N03, Component: guoda },
  { id: "04-wedding", title: "婚宴安排", narrations: N04, Component: wedding },
  { id: "05-honeymoon", title: "蜜月計劃", narrations: N05, Component: honeymoon },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];