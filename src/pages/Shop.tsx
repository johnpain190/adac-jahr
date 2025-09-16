import { memo } from "react";
import ShopOptimized from "@/components/ShopOptimized";

const Shop = memo(() => {
  return <ShopOptimized />;
});

Shop.displayName = "Shop";

export default Shop;