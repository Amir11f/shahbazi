import KnowAboutHikVision from "@/components/KnowAboutHikVision";
import MostSellingItems from "@/components/MostSellingItems";
import ProductBlackBox from "@/components/ProductBlackBox";
import ProductComponet from "@/components/ProductComponet";
import ProductForm from "@/components/ProductForm";
import ProductUserOpinion from "@/components/ProductUserOpinion";

export default async function Page({ params }: { params: { slug: number } }) {
  const { slug } = await params;

  return (
    <div>
      <ProductComponet slug={slug} />
      <KnowAboutHikVision />
      <ProductBlackBox />
      <MostSellingItems />
      <ProductForm />
      <ProductUserOpinion />
    </div>
  );
}
