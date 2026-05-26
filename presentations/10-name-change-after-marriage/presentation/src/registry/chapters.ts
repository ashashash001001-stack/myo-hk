import type { ChapterDef } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Reasons } from "../chapters/02-reasons/Reasons";
import { Process } from "../chapters/03-process/Process";
import { Documents } from "../chapters/04-documents/Documents";
import { Timeline } from "../chapters/05-timeline/Timeline";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-reasons/narrations";
import { NARRATIONS as N03 } from "../chapters/03-process/narrations";
import { NARRATIONS as N04 } from "../chapters/04-documents/narrations";
import { NARRATIONS as N05 } from "../chapters/05-timeline/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: ChapterDef[] = [
  { id: "01-coldopen", title: "結婚改名", narrations: N01, Component: Coldopen },
  { id: "02-reasons", title: "改名原因", narrations: N02, Component: Reasons },
  { id: "03-process", title: "改名流程", narrations: N03, Component: Process },
  { id: "04-documents", title: "所需文件", narrations: N04, Component: Documents },
  { id: "05-timeline", title: "所需時間", narrations: N05, Component: Timeline },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
