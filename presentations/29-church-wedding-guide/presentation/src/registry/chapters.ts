import type { Chapter } from "./types";
import { Coldopen } from "../chapters/01-coldopen/Coldopen";
import { Venues } from "../chapters/02-venues/Venues";
import { Booking } from "../chapters/03-booking/Booking";
import { Ceremony } from "../chapters/04-ceremony/Ceremony";
import { Dress } from "../chapters/05-dress/Dress";
import { CTA } from "../chapters/06-cta/CTA";
import { NARRATIONS as N01 } from "../chapters/01-coldopen/narrations";
import { NARRATIONS as N02 } from "../chapters/02-venues/narrations";
import { NARRATIONS as N03 } from "../chapters/03-booking/narrations";
import { NARRATIONS as N04 } from "../chapters/04-ceremony/narrations";
import { NARRATIONS as N05 } from "../chapters/05-dress/narrations";
import { NARRATIONS as N06 } from "../chapters/06-cta/narrations";

export const CHAPTERS: Chapter[] = [
  { id: "01-coldopen", title: "教堂婚禮指南", narrations: N01, Component: Coldopen },
  { id: "02-venues", title: "教堂場地", narrations: N02, Component: Venues },
  { id: "03-booking", title: "預約流程", narrations: N03, Component: Booking },
  { id: "04-ceremony", title: "儀式流程", narrations: N04, Component: Ceremony },
  { id: "05-dress", title: "著裝注意", narrations: N05, Component: Dress },
  { id: "06-cta", title: "總結", narrations: N06, Component: CTA },
];
