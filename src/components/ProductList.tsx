import React from 'react';
import ProductCard from './MtfProductCard';
import { Product } from '@/lib/products'; 

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list mt-[2rem]">
      <div>
        <h2>Products</h2>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;