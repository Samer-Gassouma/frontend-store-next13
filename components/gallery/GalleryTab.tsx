import Image from "next/image";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}
export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({ selected }) => (
          <div>
            <span className="absolute inset-0 rounded-md overflow-hidden h-full w-full aspect-square">
                    <Image
                        src={image.url}
                        alt=''
                        layout="fill"
                        objectFit="cover"
                        className="object-cover object-center"
                    />
                </span>
            <span
                className={cn(
                    "absolute inset-0 rounded-md overflow-hidden h-full w-full aspect-square",
                    selected ? "ring-2 ring-indigo-500" : ""
                )}
                
                />
          </div>
        )}
    </Tab>
  );
};
