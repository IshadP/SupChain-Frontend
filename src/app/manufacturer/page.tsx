import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import ProductCard from "@/components/MtfProductCard";
import { products } from '@/lib/products';

import { useUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import { userAgent } from "next/server";

const dummyProduct = {
  id: '1',
  name: 'Sample Product',
  description: 'This is a sample product for testing.',
  image: '/placeholder.svg',
  price: 199.99,
  status: 'In Stock',
  taxNo: '1234567890',
};

export default async function Home() {
  return (
    <div className="font-sans flex flex-col">
      <header className="border-b-2 border-b-gray-300">
      <Navbar/>
      </header>
      <div className="pr-12 pl-12">
        <ProductList products={products} />
      </div>
    </div>
  );
}

