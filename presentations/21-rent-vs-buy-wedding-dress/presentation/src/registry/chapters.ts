import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Rent } from "../chapters/02-rent/Rent";
import { Buy } from "../chapters/03-buy/Buy";
import { Consider } from "../chapters/04-consider/Consider";
import { Hybrid } from "../chapters/05-hybrid/Hybrid";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-rent/narrations";
import { NARRATIONS as N03 } from "../chapters/03-buy/narrations";
import { NARRATIONS as N04 } from "../chapters/04-consider/narrations";
import { NARRATIONS as N05 } from "../chapters/05-hybrid/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "租定買婚紗", narrations: N01, Component: Coldopen },
  { id: "02-rent", title: "租用婚紗", narrations: N02, Component: Rent },
  { id: "03-buy", title: "購買婚紗", narrations: N03, Component: Buy },
  { id: "04-consider", title: "考慮因素", narrations: N04, Component: Consider },
  { id: "05-hybrid", title: "混合方案", narrations: N05, Component: Hybrid },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
