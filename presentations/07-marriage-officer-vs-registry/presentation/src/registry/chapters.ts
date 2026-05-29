import type { ChapterDef } from "./types";

import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { registry } from "../chapters/02-registry/registry";
import { NARRATIONS as N02 } from "../chapters/02-registry/narrations";
import { celebrant } from "../chapters/03-celebrant/celebrant";
import { NARRATIONS as N03 } from "../chapters/03-celebrant/narrations";
import { church } from "../chapters/04-church/church";
import { NARRATIONS as N04 } from "../chapters/04-church/narrations";
import { comparison } from "../chapters/05-comparison/comparison";
import { NARRATIONS as N05 } from "../chapters/05-comparison/narrations";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "監禮人 vs 登記處", narrations: N01, Component: Coldopen },
  { id: "02-registry", title: "02 registry", narrations: N02, Component: registry },
  { id: "03-celebrant", title: "03 celebrant", narrations: N03, Component: celebrant },
  { id: "04-church", title: "04 church", narrations: N04, Component: church },
  { id: "05-comparison", title: "05 comparison", narrations: N05, Component: comparison },
  { id: "06-cta", title: "總結與下一步", narrations: N06, Component: CTA },];