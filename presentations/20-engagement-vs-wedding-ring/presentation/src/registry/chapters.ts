import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Engagement } from "../chapters/02-engagement/Engagement";
import { Wedding } from "../chapters/03-wedding/Wedding";
import { Differences } from "../chapters/04-differences/Differences";
import { Wear } from "../chapters/05-wear/Wear";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-engagement/narrations";
import { NARRATIONS as N03 } from "../chapters/03-wedding/narrations";
import { NARRATIONS as N04 } from "../chapters/04-differences/narrations";
import { NARRATIONS as N05 } from "../chapters/05-wear/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "求婚戒定結婚戒", narrations: N01, Component: Coldopen },
  { id: "02-engagement", title: "求婚戒", narrations: N02, Component: Engagement },
  { id: "03-wedding", title: "結婚戒指", narrations: N03, Component: Wedding },
  { id: "04-differences", title: "兩者分別", narrations: N04, Component: Differences },
  { id: "05-wear", title: "佩戴方式", narrations: N05, Component: Wear },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
