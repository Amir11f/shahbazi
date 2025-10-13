import ProductComponet from "@/components/ProductComponet";

export default async function Page({ params }: { params: { slug: number } }) {
  const { slug } = await params;

  return (
    <div>
      <ProductComponet slug={slug} />
    </div>
  );
}
