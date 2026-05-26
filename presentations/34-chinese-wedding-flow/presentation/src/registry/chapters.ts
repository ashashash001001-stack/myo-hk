import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Proposal } from "../chapters/02-proposal/Proposal";
import { Guoda } from "../chapters/03-guoda/Guoda";
import { Wedding } from "../chapters/04-wedding/Wedding";
import { Honeymoon } from "../chapters/05-honeymoon/Honeymoon";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-proposal/narrations";
import { NARRATIONS as N03 } from "../chapters/03-guoda/narrations";
import { NARRATIONS as N04 } from "../chapters/04-wedding/narrations";
import { NARRATIONS as N05 } from "../chapters/05-honeymoon/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "傳統婚禮流程", narrations: N01, Component: Coldopen },
  { id: "02-proposal", title: "提親", narrations: N02, Component: Proposal },
  { id: "03-guoda", title: "過大禮", narrations: N03, Component: Guoda },
  { id: "04-wedding", title: "婚禮日", narrations: N04, Component: Wedding },
  { id: "05-honeymoon", title: "蜜月", narrations: N05, Component: Honeymoon },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
