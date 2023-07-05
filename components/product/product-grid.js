import ProductCard from "./product-card";
import AdvertisingCard from "../advertising/advertising-card";

function ProductGrid({ products }) {
  const propagandas = [{ "id": 1, "name": "amazon", "index": 3, "image_url": "https://i.promobit.com.br/185761646816879928968906621814_banner.png", "type": "grid" }, { "id": 2, "name": "amazon", "index": 1, "image_url": "", "type": "sidebar" }]
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {
        products.dailyDeals?.map((product, index) => {
          const propaganda = propagandas.filter(item => item.type === "grid" && item.index === index)[0];
          return (
            <>
              {propaganda ?
                (<div className="col">
                  <AdvertisingCard advertising={propaganda} />
                </div>) : null}
              <div className="col">
                <ProductCard product={product} />
              </div>
            </>
          )
        }
        )
      }
    </div>
  );
}

export default ProductGrid;
