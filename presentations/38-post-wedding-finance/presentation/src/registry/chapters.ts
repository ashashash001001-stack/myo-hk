import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { joint } from "../chapters/02-joint/joint";
import { NARRATIONS as N02 } from "../chapters/02-joint/narrations";
import { budget } from "../chapters/03-budget/budget";
import { NARRATIONS as N03 } from "../chapters/03-budget/narrations";
import { debt } from "../chapters/04-debt/debt";
import { NARRATIONS as N04 } from "../chapters/04-debt/narrations";
import { savings } from "../chapters/05-savings/savings";
import { NARRATIONS as N05 } from "../chapters/05-savings/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚後理財指南", narrations: N01, Component: Coldopen },
  { id: "02-joint", title: "02 joint", narrations: N02, Component: joint },
  { id: "03-budget", title: "03 budget", narrations: N03, Component: budget },
  { id: "04-debt", title: "04 debt", narrations: N04, Component: debt },
  { id: "05-savings", title: "05 savings", narrations: N05, Component: savings },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];