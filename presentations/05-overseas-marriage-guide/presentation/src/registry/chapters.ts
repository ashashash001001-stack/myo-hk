import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Requirements } from "../chapters/02-requirements/Requirements";
import { Documents } from "../chapters/03-documents/Documents";
import { Process } from "../chapters/04-process/Process";
import { Legalization } from "../chapters/05-legalization/Legalization";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-requirements/narrations";
import { NARRATIONS as N03 } from "../chapters/03-documents/narrations";
import { NARRATIONS as N04 } from "../chapters/04-process/narrations";
import { NARRATIONS as N05 } from "../chapters/05-legalization/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "海外人士結婚", narrations: N01, Component: Coldopen },
  { id: "02-requirements", title: "資格要求", narrations: N02, Component: Requirements },
  { id: "03-documents", title: "所需文件", narrations: N03, Component: Documents },
  { id: "04-process", title: "登記流程", narrations: N04, Component: Process },
  { id: "05-legalization", title: "法律認受", narrations: N05, Component: Legalization },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
