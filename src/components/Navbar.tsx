"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link"
import { useRouter } from 'next/navigation';
import {
  Plus,
  MoveRight,
} from "lucide-react";

export default function UserNav() {
  const router = useRouter();
  const handleAddProduct = () => {
  router.push('/addproductpage');
};
    return (
        <div className="flex w-full items-center justify-between p-8 ">
          <div className="flex items-center gap-8 ">
            <Link href="/" className="text-xl font-semibold">
              SupChain
            </Link>
            <Link href="/addproductpage">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={handleAddProduct}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Profile
              <MoveRight className="w-4 h-4 mr-2" />
            </Button>
            <Button variant="default" className="bg-red-600 text-white text-sm">
              Log Out
            </Button>
          </div>
        </div>
    )
}