import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const seedProducts = initialData.products;

const labels: Record<Category, string> = {
  men: "Men´s Clothes",
  women: "Women´s Clothes",
  kid: "Kids Clothes",
  unisex: "Unisex Clothes",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter((product) => product.gender === id);
  //if (id === "kids") {
  // notFound();
  // }
  return (
    <>
      <Title
        title={`${labels[id]}`}
        subtitle="All of products are made with love and care."
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
