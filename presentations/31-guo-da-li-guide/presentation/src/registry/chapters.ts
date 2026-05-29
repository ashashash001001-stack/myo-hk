import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { gifts } from "../chapters/02-gifts/gifts";
import { NARRATIONS as N02 } from "../chapters/02-gifts/narrations";
import { process } from "../chapters/03-process/process";
import { NARRATIONS as N03 } from "../chapters/03-process/narrations";
import { modern } from "../chapters/04-modern/modern";
import { NARRATIONS as N04 } from "../chapters/04-modern/narrations";
import { advice } from "../chapters/05-advice/advice";
import { NARRATIONS as N05 } from "../chapters/05-advice/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "過大禮完整指南", narrations: N01, Component: Coldopen },
  { id: "02-gifts", title: "02 gifts", narrations: N02, Component: gifts },
  { id: "03-process", title: "03 process", narrations: N03, Component: process },
  { id: "04-modern", title: "04 modern", narrations: N04, Component: modern },
  { id: "05-advice", title: "05 advice", narrations: N05, Component: advice },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];