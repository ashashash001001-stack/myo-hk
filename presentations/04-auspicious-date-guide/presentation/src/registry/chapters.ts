import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Why } from "../chapters/02-why/Why";
import { Methods } from "../chapters/03-methods/Methods";
import { Calendar } from "../chapters/04-calendar/Calendar";
import { Tips } from "../chapters/05-tips/Tips";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-why/narrations";
import { NARRATIONS as N03 } from "../chapters/03-methods/narrations";
import { NARRATIONS as N04 } from "../chapters/04-calendar/narrations";
import { NARRATIONS as N05 } from "../chapters/05-tips/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "擇日結婚", narrations: N01, Component: Coldopen },
  { id: "02-why", title: "點解要擇日", narrations: N02, Component: Why },
  { id: "03-methods", title: "擇日方法", narrations: N03, Component: Methods },
  { id: "04-calendar", title: "2025結婚好日", narrations: N04, Component: Calendar },
  { id: "05-tips", title: "擇日貼士", narrations: N05, Component: Tips },
  { id: "06-cta", title: "了解更多", narrations: N06, Component: CTA },
];