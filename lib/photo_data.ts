/* eslint-disable sort-keys */
import BostonLeaves from "../public/photography/boston_leaves.jpg";
import BostonStars from "../public/photography/boston_stars.jpg";
import BuddingTree from "../public/photography/budding_tree.jpg";
import CascadillaWater from "../public/photography/cascadilla_water.jpg";
import ClockTower from "../public/photography/clock_tower.jpg";
import GavinInvert from "../public/photography/gavin_invert.jpg";
import KillingtonFog from "../public/photography/killington_fog.jpg";
import KirkLakeSunset from "../public/photography/kirk_lake_sunset.jpg";
import Neowise from "../public/photography/neowise.jpg";
import type { StaticImageData } from "next/image";

export interface ImageShape {
  alt: string;
  src: StaticImageData;
  title: string;
}

const PHOTO_DATA: Record<string, ImageShape> = {
  BostonLeaves: {
    alt: "Yellow leaves along the Charles River Esplanade in Boston forming a 'ceiling' that almost covers the blue sky",
    src: BostonLeaves,
    title: "Boston Fall Leaves"
  },
  CascadillaWater: {
    alt: "Time lapse of water flowing down Cascadilla Gorge, causing the water to appear as a blur",
    src: CascadillaWater,
    title: "Cascadilla Gorge Time Lapse"
  },
  GavinInvert: {
    alt: "Gavin Tobey doing a flip off a ski jump at Waterville Valley, he is depicted upside-down here",
    src: GavinInvert,
    title: "Freestyle Invert"
  },
  ClockTower: {
    alt: "McGraw Clock Tower at Cornell University framed by fall trees in the foreground and a setting sun in the background",
    src: ClockTower,
    title: "McGraw Clock Tower"
  },
  BostonStars: {
    alt: "A vast array of stars interspersed with yellow-y clouds against a nighttime sky",
    src: BostonStars,
    title: "Boston Starry Sky"
  },
  KillingtonFog: {
    alt: "Fog passing in front of a tree as the sun shines behind it, exaggerating the shadow of the tree, its trunk, and its branches",
    src: KillingtonFog,
    title: "Killington Foggy Sun"
  },
  KirkLakeSunset: {
    alt: "Clouds reflecting the unseen sunset form a background against tall, dark trees with no sunlight on them",
    src: KirkLakeSunset,
    title: "Kirk Lake Sunset"
  },
  BuddingTree: {
    alt: "The leaves of a tree are beginning to bud, forming pink flowers on their tips against a sunny blue sky in the background",
    src: BuddingTree,
    title: "Budding Tree"
  },
  Neowise: {
    alt: "The Neowise comet from 2020, coasting through the night sky above several clouds",
    src: Neowise,
    title: "Neowise"
  }
};

export default PHOTO_DATA;
