import getBillboards from "@/actions/get-billboard";

import Container from "@/components/ui/container";
import { Billboard } from "@/components/Billboard";
import getProducts from "@/actions/get-products";
import { ProductList } from "@/components/ProductList";
export const revalidate = 0;

const Home = async () => {
  const billboards = await getBillboards(
    "d5892b95-acf9-4673-90d3-fe4fd0f80567"
  );
  const products = await getProducts({
    isFeatured: true,
  });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
