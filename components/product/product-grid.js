import React, { useState, useEffect } from "react";
import ProductCard from "./product-card";
import AdvertisingCard from "../advertising/advertising-card";
import GoogleAdSenseCard from "../advertising/google-adsense-card";

function ProductGrid({ products }) {
  const [advertisings, setAdvertisings] = useState([]);

  useEffect(() => {
    fetchAdvertisings();    
  }, []);

  const fetchAdvertisings = async () => {
    // setLoading(true);
    fetch(`${process.env.API_BASE_URL}/advertising`)
      .then((response) => response.json())
      .then((data) => {
        setAdvertisings(data)
    })  
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {
        products.dailyDeals?.map((product, index) => {
          const advertising = advertisings.filter(item => item.type === "grid" && item.index === index)[0];          
          return (
            <>
              {advertising ?
                  (<div className="col">
                    <AdvertisingCard advertising={advertising} />
                  </div>) : null}
              {index===3 ?
                (
                <div className="col">
                  <GoogleAdSenseCard  />
                 </div>     
                ) : null}
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
