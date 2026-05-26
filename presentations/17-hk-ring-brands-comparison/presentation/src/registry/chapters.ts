import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Highend } from "../chapters/02-highend/Highend";
import { Midrange } from "../chapters/03-midrange/Midrange";
import { Local } from "../chapters/04-local/Local";
import { Online } from "../chapters/05-online/Online";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-highend/narrations";
import { NARRATIONS as N03 } from "../chapters/03-midrange/narrations";
import { NARRATIONS as N04 } from "../chapters/04-local/narrations";
import { NARRATIONS as N05 } from "../chapters/05-online/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "香港婚戒品牌", narrations: N01, Component: Coldopen },
  { id: "02-highend", title: "高端品牌", narrations: N02, Component: Highend },
  { id: "03-midrange", title: "中高價位", narrations: N03, Component: Midrange },
  { id: "04-local", title: "本地品牌", narrations: N04, Component: Local },
  { id: "05-online", title: "網上品牌", narrations: N05, Component: Online },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
