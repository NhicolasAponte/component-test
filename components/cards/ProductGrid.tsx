import CardWithImage from "@/components/cards/CardWithImage";
// import annealedGlass from '@/public/images/annealed-glass.jpg';
// import temperedGlass from '@/public/images/tempered-glass.jpg';
// import laminatedGlass from '@/public/images/laminated-glass.jpg';
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

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {glassTypes.map((glass, index) => (
        <CardWithImage
          key={index}
          title={glass.title}
          description={glass.description}
          imageSrc={glass.imageSrc}
          alt={glass.alt}
        />
      ))}
    </div>
  );
}
