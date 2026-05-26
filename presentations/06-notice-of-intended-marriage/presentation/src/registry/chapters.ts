import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Eligibility } from "../chapters/02-eligibility/Eligibility";
import { Methods } from "../chapters/03-methods/Methods";
import { Fee } from "../chapters/04-fee/Fee";
import { Display } from "../chapters/05-display/Display";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-eligibility/narrations";
import { NARRATIONS as N03 } from "../chapters/03-methods/narrations";
import { NARRATIONS as N04 } from "../chapters/04-fee/narrations";
import { NARRATIONS as N05 } from "../chapters/05-display/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "擬結婚通知書", narrations: N01, Component: Coldopen },
  { id: "02-eligibility", title: "資格要求", narrations: N02, Component: Eligibility },
  { id: "03-methods", title: "遞交方法", narrations: N03, Component: Methods },
  { id: "04-fee", title: "費用", narrations: N04, Component: Fee },
  { id: "05-display", title: "公開展示", narrations: N05, Component: Display },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
