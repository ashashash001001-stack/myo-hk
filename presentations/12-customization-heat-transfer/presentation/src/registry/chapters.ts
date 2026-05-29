import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { technology } from "../chapters/02-technology/technology";
import { NARRATIONS as N02 } from "../chapters/02-technology/narrations";
import { durability } from "../chapters/03-durability/durability";
import { NARRATIONS as N03 } from "../chapters/03-durability/narrations";
import { colors } from "../chapters/04-colors/colors";
import { NARRATIONS as N04 } from "../chapters/04-colors/narrations";
import { custom } from "../chapters/05-custom/custom";
import { NARRATIONS as N05 } from "../chapters/05-custom/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "證書套熱轉印訂製", narrations: N01, Component: Coldopen },
  { id: "02-technology", title: "02 technology", narrations: N02, Component: technology },
  { id: "03-durability", title: "03 durability", narrations: N03, Component: durability },
  { id: "04-colors", title: "04 colors", narrations: N04, Component: colors },
  { id: "05-custom", title: "05 custom", narrations: N05, Component: custom },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];