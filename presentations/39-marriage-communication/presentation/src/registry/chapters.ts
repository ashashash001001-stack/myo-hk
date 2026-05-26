import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Listen } from "../chapters/02-listen/Listen";
import { Express } from "../chapters/03-express/Express";
import { Weekly } from "../chapters/04-weekly/Weekly";
import { Conflict } from "../chapters/05-conflict/Conflict";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-listen/narrations";
import { NARRATIONS as N03 } from "../chapters/03-express/narrations";
import { NARRATIONS as N04 } from "../chapters/04-weekly/narrations";
import { NARRATIONS as N05 } from "../chapters/05-conflict/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "婚姻溝通技巧", narrations: N01, Component: Coldopen },
  { id: "02-listen", title: "聆聽技巧", narrations: N02, Component: Listen },
  { id: "03-express", title: "表達感受", narrations: N03, Component: Express },
  { id: "04-weekly", title: "每週傾偈", narrations: N04, Component: Weekly },
  { id: "05-conflict", title: "處理衝突", narrations: N05, Component: Conflict },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
