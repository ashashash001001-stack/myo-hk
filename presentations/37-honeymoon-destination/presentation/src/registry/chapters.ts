import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Japan } from "../chapters/02-japan/Japan";
import { Thailand } from "../chapters/03-thailand/Thailand";
import { Europe } from "../chapters/04-europe/Europe";
import { Taiwan } from "../chapters/05-taiwan/Taiwan";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-japan/narrations";
import { NARRATIONS as N03 } from "../chapters/03-thailand/narrations";
import { NARRATIONS as N04 } from "../chapters/04-europe/narrations";
import { NARRATIONS as N05 } from "../chapters/05-taiwan/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "蜜月目的地", narrations: N01, Component: Coldopen },
  { id: "02-japan", title: "日本", narrations: N02, Component: Japan },
  { id: "03-thailand", title: "泰國", narrations: N03, Component: Thailand },
  { id: "04-europe", title: "歐洲", narrations: N04, Component: Europe },
  { id: "05-taiwan", title: "台灣", narrations: N05, Component: Taiwan },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
