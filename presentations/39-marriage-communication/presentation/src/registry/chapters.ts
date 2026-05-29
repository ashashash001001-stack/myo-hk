import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { listen } from "../chapters/02-listen/listen";
import { NARRATIONS as N02 } from "../chapters/02-listen/narrations";
import { express } from "../chapters/03-express/express";
import { NARRATIONS as N03 } from "../chapters/03-express/narrations";
import { weekly } from "../chapters/04-weekly/weekly";
import { NARRATIONS as N04 } from "../chapters/04-weekly/narrations";
import { conflict } from "../chapters/05-conflict/conflict";
import { NARRATIONS as N05 } from "../chapters/05-conflict/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "婚姻溝通技巧", narrations: N01, Component: Coldopen },
  { id: "02-listen", title: "02 listen", narrations: N02, Component: listen },
  { id: "03-express", title: "03 express", narrations: N03, Component: express },
  { id: "04-weekly", title: "04 weekly", narrations: N04, Component: weekly },
  { id: "05-conflict", title: "05 conflict", narrations: N05, Component: conflict },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];