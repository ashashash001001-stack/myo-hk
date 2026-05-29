import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { daily } from "../chapters/02-daily/daily";
import { NARRATIONS as N02 } from "../chapters/02-daily/narrations";
import { cleaning } from "../chapters/03-cleaning/cleaning";
import { NARRATIONS as N03 } from "../chapters/03-cleaning/narrations";
import { storage } from "../chapters/04-storage/storage";
import { NARRATIONS as N04 } from "../chapters/04-storage/narrations";
import { professional } from "../chapters/05-professional/professional";
import { NARRATIONS as N05 } from "../chapters/05-professional/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "戒指保養指南", narrations: N01, Component: Coldopen },
  { id: "02-daily", title: "02 daily", narrations: N02, Component: daily },
  { id: "03-cleaning", title: "03 cleaning", narrations: N03, Component: cleaning },
  { id: "04-storage", title: "04 storage", narrations: N04, Component: storage },
  { id: "05-professional", title: "05 professional", narrations: N05, Component: professional },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];