import { Product } from "@/types";
import NoResulte from "./ui/no-resulte";
import { ProductCard } from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResulte />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
            <ProductCard key={item.id} data={item} />
        ))}
      </div>        
    </div>
  );
};
