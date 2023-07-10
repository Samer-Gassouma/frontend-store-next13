"use client";

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "./Currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
interface ProductCardProps {
  data: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const previewModal = usePreviewModal()
    const cart = useCart()
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }
    const onPreview :MouseEventHandler<HTMLButtonElement>= (event) => {
        event.stopPropagation()

        previewModal.onOpen(data)
    }
    const addTocart :MouseEventHandler<HTMLButtonElement>= (event) => {
      event.stopPropagation()

      cart.addItem(data)
  }
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4" onClick={handleClick}>
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="product image"
          className="aspect-square rounded-md object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={addTocart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500">{data?.category.name}</p>
      </div>
      <div className="flex items-center justify-between">  
        <Currency value={data?.price} />
      </div>    
    </div>
  );
};
