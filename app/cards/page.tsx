import CardWithDropDown from "@/components/cards/CardWithDropDown";
import CardWithForm from "@/components/cards/CardWithForm";
import CardWIthImage from "@/components/cards/CardWithImage";
import ProductGrid from "@/components/cards/ProductGrid";
import SelectableCard from "@/components/cards/SelectableCard";
import SelectableItemGrid from "@/components/cards/SelectableItemGrid";
import SummaryCard from "@/components/cards/SummaryCard";

const CardPage = () => {
  const prodDescription =
    "Product Description really really long product description really really long product description really really long product description ";
  const prodTitle = "Product Name";
  const altDescription = "glass image";
  return (
    <div className="bg-gray-100 mx-5 h-screen flex flex-wrap items-center justify-between">
      <SelectableItemGrid />
    </div>
  );
};

export default CardPage;

{
  /* <CardWithDropDown/>
      <CardWithForm/>
      <SummaryCard/>
      <CardWIthImage imageSrc={glassImage} title={prodTitle} description={prodDescription} alt={altDescription}/> */
}
