import React from 'react';
import MtfProductCard from './MtfProductCard';
import DisProductCard from './DisProductCard';
import { Product } from '@/lib/products';

type ProductListProps = {
  products: Product[];
  userRole: 'manufacturer' | 'distributor'; // Add userRole prop
};

const ProductList: React.FC<ProductListProps> = ({ products, userRole }) => {
  return (
    <div className="product-list mt-[2rem]">
      <div>
        <h2>Products</h2>
      </div>
      {products.map((product) => {
        if (userRole === 'manufacturer') {
          return <MtfProductCard key={product.id} product={product} />;
        } else if (userRole === 'distributor') {
          return <DisProductCard key={product.id} product={product} />;
        } else {
          return null; // Or a default card if the role is unknown
        }
      })}
    </div>
  );
};

export default ProductList;