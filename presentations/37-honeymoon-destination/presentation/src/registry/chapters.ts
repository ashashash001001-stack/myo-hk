import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { japan } from "../chapters/02-japan/japan";
import { NARRATIONS as N02 } from "../chapters/02-japan/narrations";
import { thailand } from "../chapters/03-thailand/thailand";
import { NARRATIONS as N03 } from "../chapters/03-thailand/narrations";
import { europe } from "../chapters/04-europe/europe";
import { NARRATIONS as N04 } from "../chapters/04-europe/narrations";
import { taiwan } from "../chapters/05-taiwan/taiwan";
import { NARRATIONS as N05 } from "../chapters/05-taiwan/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "蜜月目的地推薦", narrations: N01, Component: Coldopen },
  { id: "02-japan", title: "02 japan", narrations: N02, Component: japan },
  { id: "03-thailand", title: "03 thailand", narrations: N03, Component: thailand },
  { id: "04-europe", title: "04 europe", narrations: N04, Component: europe },
  { id: "05-taiwan", title: "05 taiwan", narrations: N05, Component: taiwan },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];