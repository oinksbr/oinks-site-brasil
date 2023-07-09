import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
// import ProductRating from "../../components/product-rating";
import ProductRelatedCard from "../../components/product/product-related-card";

function ProductDetail() {
    const router = useRouter()
    const oink = router.query.oink;
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState(null);
       
    useEffect(() => {
        fetchProduct();    
    }, [oink]);

    useEffect(() => {  
      if (product != null){   
        fetchRelatedProducts(product.title)
     };
  }, [product]);

    const fetchProduct = () => {
        fetch(`${process.env.API_BASE_URL}/product/${oink}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data)
        })
      }
    
    const fetchRelatedProducts = (title) => {
        const params = `title=${title}&size=6`;
        fetch(`${process.env.API_BASE_URL}/deal/similar?${params}`)
        .then((response) => response.json())
        .then((data) => {
          setRelatedProducts(data)
        })
      }
      

  return (
    <>
    {product != null ? (
    <div className="vstack">
      
      <div className="bg-secondary">        
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href="/">Ofertas</a>
                </li>
                <li className="breadcrumb-item">
                  <a className="breadcrumb-link" href={`/categoria/${product.category}`}>{product.category_display_name}</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {product.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white mb-4">
        <div className="container py-4">
          <div className="row gy-3 gx-4">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-12">
                  <div className="ratio ratio-1x1">
                    <img
                      className="rounded"
                      src={product.image_url}
                      width={300}
                      height={300}
                      alt="Product image."
                    />
                  </div>
                </div>
              </div>              
            </div>

            <div className="col-lg-7">
              <div className="d-flex">
                <div className="d-inline h2 mb-0 fw-semibold me-3 text-black-2">
                  {product.title}
                </div>                
              </div>
              <div className="vstack">
                <div className="d-flex mb-3 gap-2">
                  {/* <ProductRating /> */}                 
                </div>  
                {
                    product.original_price !== null ? 
                    <del className="text-muted fw-original-price">R$ {product.original_price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</del>
                    : null
                }
                <h4 className="fw-price">R$ {product.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h4>               
                <dl className="row mb-2 mt-4 text-black-3">
                  <dt className="col-sm-3 fw-semibold">Loja</dt>
                  <dd className="col-sm-9 text-capitalize">{product.store}</dd>
                  <dt className="col-sm-3 fw-semibold">Categoria</dt>
                  <dd className="col-sm-9 text-capitalize">{product.category_display_name}</dd>
                  <dt className="col-sm-3 fw-semibold">Tags</dt>
                  <dd className="col-sm-9">{product.badge}</dd>
                </dl>
                <hr className="text-muted" />
                
                <div className="d-flex mt-4">
                  <a
                    href="#"
                    className="btn btn-primary px-md-4 col col-md-auto me-2"
                  >
                    Ver na {product.store.charAt(0).toUpperCase() + product.store.slice(1)}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-3">
      <h5 className="my-auto fw-semibold">Produtos relacionados</h5>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3 mb-5">
                        {
                  relatedProducts?.map((product) => {
                    return (
                      <ProductRelatedCard
                        product={product} />
                    )}
                  )}                            
                        </div>
                    </div>
                </div>
            </div>      
      <br />
      <br />
      <br />
    </div>
    ) : null
    }
    </>
  );
}

export default ProductDetail;
