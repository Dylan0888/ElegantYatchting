import type { Yacht } from "../types/types";
import ThatSinkingFeeling from "./imgs/YachtImages/ThatSinkingFeeling.jpg";
import OceanEmbrace from "./imgs/YachtImages/OceansEmbrace.jpg";
import AzureHorizon from "./imgs/YachtImages/AzureHorizon.jpg";
import CelestialWave from "./imgs/YachtImages/CelestialWave.jpg";
import GoldenOdyssey from "./imgs/YachtImages/GoldenOdyssey.jpg";
import VelvetTide from "./imgs/YachtImages/VelvetTide.jpg";
import SilverMirage from "./imgs/YachtImages/SilverMirage.jpg";

export const yachtList: Yacht[] = [
  {
    name: "That Sinking Feeling II",
    status: "NEW",
    description: "A luxurious yacht with modern amenities and stunning design.",
    image: ThatSinkingFeeling,
    numGuests: 10,
    numCrew: 5,
    length: 50,
    alt: "Image of Yacht 1",
  },

  {
    name: "Ocean's Embrace",
    status: "NEW",
    description:
      "A sleek super yacht featuring panoramic decks, luxury suites, and world-class entertainment spaces.",
    image: OceanEmbrace,
    numGuests: 12,
    numCrew: 7,
    length: 65,
    alt: "Luxury super yacht sailing across the ocean",
  },

  {
    name: "Azure Horizon",
    description:
      "Designed for elegant coastal cruising with expansive lounges and a sophisticated modern interior.",
    image: AzureHorizon,
    numGuests: 10,
    numCrew: 5,
    length: 52,
    alt: "Modern blue and white yacht at sea",
  },

  {
    name: "Celestial Wave",
    description:
      "A contemporary yacht blending cutting-edge technology with timeless maritime luxury.",
    image: CelestialWave,
    numGuests: 14,
    numCrew: 8,
    length: 72,
    alt: "Elegant luxury yacht cruising through tropical waters",
  },

  {
    name: "Golden Odyssey",
    status: "NEW",
    description:
      "An ultra-luxury vessel crafted for unforgettable voyages and premium onboard experiences.",
    image: GoldenOdyssey,
    numGuests: 16,
    numCrew: 9,
    length: 80,
    alt: "Golden-toned luxury yacht during sunset",
  },

  {
    name: "Velvet Tide",
    description:
      "A stylish yacht with elegant suites, private dining spaces, and exceptional ocean views.",
    image: VelvetTide,
    numGuests: 8,
    numCrew: 4,
    length: 45,
    alt: "Luxury yacht anchored near calm waters",
  },
  {
    name: "Silver Mirage",
    status: "NEW",
    description:
      "A refined performance yacht featuring minimalist interiors and state-of-the-art amenities.",
    image: SilverMirage,
    numGuests: 9,
    numCrew: 5,
    length: 48,
    alt: "Silver luxury yacht near a tropical coastline",
  },
];
