import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { why } from "../chapters/02-why/why";
import { NARRATIONS as N02 } from "../chapters/02-why/narrations";
import { methods } from "../chapters/03-methods/methods";
import { NARRATIONS as N03 } from "../chapters/03-methods/narrations";
import { calendar } from "../chapters/04-calendar/calendar";
import { NARRATIONS as N04 } from "../chapters/04-calendar/narrations";
import { tips } from "../chapters/05-tips/tips";
import { NARRATIONS as N05 } from "../chapters/05-tips/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "吉日選擇指南", narrations: N01, Component: Coldopen },
  { id: "02-why", title: "02 why", narrations: N02, Component: why },
  { id: "03-methods", title: "03 methods", narrations: N03, Component: methods },
  { id: "04-calendar", title: "04 calendar", narrations: N04, Component: calendar },
  { id: "05-tips", title: "05 tips", narrations: N05, Component: tips },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];