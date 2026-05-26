import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Joint } from "../chapters/02-joint/Joint";
import { Budget } from "../chapters/03-budget/Budget";
import { Debt } from "../chapters/04-debt/Debt";
import { Savings } from "../chapters/05-savings/Savings";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-joint/narrations";
import { NARRATIONS as N03 } from "../chapters/03-budget/narrations";
import { NARRATIONS as N04 } from "../chapters/04-debt/narrations";
import { NARRATIONS as N05 } from "../chapters/05-savings/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚後理財", narrations: N01, Component: Coldopen },
  { id: "02-joint", title: "聯名戶口", narrations: N02, Component: Joint },
  { id: "03-budget", title: "家庭預算", narrations: N03, Component: Budget },
  { id: "04-debt", title: "債務管理", narrations: N04, Component: Debt },
  { id: "05-savings", title: "儲蓄計劃", narrations: N05, Component: Savings },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
