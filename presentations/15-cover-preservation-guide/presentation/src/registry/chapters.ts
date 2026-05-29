import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { cleaning } from "../chapters/02-cleaning/cleaning";
import { NARRATIONS as N02 } from "../chapters/02-cleaning/narrations";
import { storage } from "../chapters/03-storage/storage";
import { NARRATIONS as N03 } from "../chapters/03-storage/narrations";
import { handling } from "../chapters/04-handling/handling";
import { NARRATIONS as N04 } from "../chapters/04-handling/narrations";
import { materials } from "../chapters/05-materials/materials";
import { NARRATIONS as N05 } from "../chapters/05-materials/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "證書套保存指南", narrations: N01, Component: Coldopen },
  { id: "02-cleaning", title: "02 cleaning", narrations: N02, Component: cleaning },
  { id: "03-storage", title: "03 storage", narrations: N03, Component: storage },
  { id: "04-handling", title: "04 handling", narrations: N04, Component: handling },
  { id: "05-materials", title: "05 materials", narrations: N05, Component: materials },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];