import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Shop"
        subtitle="All of products are made with love and care."
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
