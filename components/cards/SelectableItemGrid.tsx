"use client";

import { useState } from "react";
// import CardWithImage from '@/components/CardWithImage';
// import annealedGlass from '@/public/images/annealed-glass.jpg';
// import temperedGlass from '@/public/images/tempered-glass.jpg';
// import laminatedGlass from '@/public/images/laminated-glass.jpg';
import SelectableCard from "@/components/cards/SelectableCard";
import glassImage from "@/public/images/glass-verre.jpg";

const glassTypes = [
  {
    title: "Annealed Glass",
    description: "Standard glass type used in various applications.",
    imageSrc: glassImage,
    alt: "Annealed Glass",
  },
  {
    title: "Tempered Glass",
    description: "Stronger and safer glass type, ideal for doors and windows.",
    imageSrc: glassImage,
    alt: "Tempered Glass",
  },
  {
    title: "Laminated Glass",
    description:
      "Glass with a plastic layer for extra security and soundproofing.",
    imageSrc: glassImage,
    alt: "Laminated Glass",
  },
  {
    title: "Annealed Glass",
    description: "Standard glass type used in various applications.",
    imageSrc: glassImage,
    alt: "Annealed Glass",
  },
  {
    title: "Tempered Glass",
    description: "Stronger and safer glass type, ideal for doors and windows.",
    imageSrc: glassImage,
    alt: "Tempered Glass",
  },
  {
    title: "Laminated Glass",
    description:
      "Glass with a plastic layer for extra security and soundproofing.",
    imageSrc: glassImage,
    alt: "Laminated Glass",
  },
  {
    title: "Annealed Glass",
    description: "Standard glass type used in various applications.",
    imageSrc: glassImage,
    alt: "Annealed Glass",
  },
  {
    title: "Tempered Glass",
    description: "Stronger and safer glass type, ideal for doors and windows.",
    imageSrc: glassImage,
    alt: "Tempered Glass",
  },
  {
    title: "Laminated Glass",
    description:
      "Glass with a plastic layer for extra security and soundproofing.",
    imageSrc: glassImage,
    alt: "Laminated Glass",
  },
  {
    title: "Annealed Glass",
    description: "Standard glass type used in various applications.",
    imageSrc: glassImage,
    alt: "Annealed Glass",
  },
  {
    title: "Tempered Glass",
    description: "Stronger and safer glass type, ideal for doors and windows.",
    imageSrc: glassImage,
    alt: "Tempered Glass",
  },
];

export default function GlassTypeSelection() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedTitle(title);
  };

  const handleContinue = () => {
    if (selectedTitle) {
      // Proceed to the next step with the selected title
      console.log("Selected Glass Type:", selectedTitle);
      // Add navigation to the next step here
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Choose Your Glass Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {glassTypes.map((glass, index) => (
          <SelectableCard
            key={index}
            title={glass.title}
            description={glass.description}
            imageSrc={glass.imageSrc}
            alt={glass.alt}
            isSelected={selectedTitle === glass.title}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <button
        onClick={handleContinue}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        disabled={!selectedTitle}
      >
        Continue
      </button>
    </div>
  );
}
