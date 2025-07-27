"use client";

import Container from "@/components/shared/Ui/Container";
import SectionTitle from "@/components/shared/Ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { TProduct } from "@/types";
import { Package, Search } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "../../Products/ProductCard";
import ProductCardSkeleton from "../../Products/ProductCardSkeleton";

const Products = ({
  queryString,
  sectionName,
}: {
  queryString?: string;
  sectionName: string;
}) => {
  const query: Record<string, any> = {};

  if (queryString) {
    query["sort"] = queryString;
  }

  // RTK Query hook
  const { data: productsData, isLoading: isProductsLoading } =
    useGetProductsQuery(query);

  return (
    <Container className="py-16">
      <div className="flex items-center mb-6">
        <SectionTitle text={sectionName} />
      </div>

      <div>
        {isProductsLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[...Array(6)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div>
            {productsData.data.data.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {productsData.data.data.slice(0, 6).map((product: TProduct) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="relative mb-6">
                  <Package className="h-16 w-16 text-muted-foreground/50" />
                  <Search className="absolute -bottom-1 -right-1 h-6 w-6 text-muted-foreground/70" />
                </div>

                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  No Product Found!
                </h2>

                <p className="text-muted-foreground mb-6 max-w-md">
                  We couldn&apos;t find any products matching.
                </p>

                <Link href="/products">
                  <Button>Browse All Products</Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Products;
