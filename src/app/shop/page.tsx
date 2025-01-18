import React from "react";
import Nav2 from "@/components/Nav2";
import HeroLinks from "@/components/HeroLinks";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/constant/products";



const Shop = () => {
  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Our Shop" url1="Home" url2="Shop" />

      <div className="py-20 px-10 max-w-[1320px] mx-auto sm:mt-10 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((p) => (
            <Link key={p.id} href={`/shop/${p.id}`}>
              <div>
                <div className="flex-1">
                  <Image
                    src={p.image[0]}
                    alt={p.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-gray-800 font-bold text-lg">
                    {p.name}
                  </h3>
                  <p className="text-gray-600">{p.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
