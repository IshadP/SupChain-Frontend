import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import { checkRole } from '@/utils/roles'
import { products } from '@/lib/products';
import { redirect } from 'next/navigation'


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
  const isMan = await checkRole('manufacturer')
  if (!isMan) {
    redirect('/')
  } else {
  return (
    <div className="font-sans flex flex-col">
      <header className="border-b-2 border-b-gray-300">
      <Navbar userRole="manufacturer"/>
      </header>
      <div className="pr-12 pl-12">
        <ProductList products={products} userRole="manufacturer" />
      </div>
    </div>
  );
}
}
