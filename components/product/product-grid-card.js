import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductGridCard({ id, title, discount, original_price, current_price, image,store, url }) {

  let percentOff;
  let price;
  let offPrice;

  if (discount && discount > 0) {
    percentOff = (
      <>
      <div
        className="badge bg-mint py-2 text-white position-absolute"
        style={{ top: "0.5rem", left: "0.5rem" }}
      >
        {discount}%
      </div>
      {/* <div
        className="badge bg-brandeis-blue py-2 text-white position-absolute"
        style={{ top: "0.5rem", left: "3.25rem" }}
      >
        Selo estoque magalu
      </div> */}
      </>
    );

    price = (
      <>
        R$ {current_price.toLocaleString('pt-br', {minimumFractionDigits: 2})}
      </>
    );
    
    if (original_price !== null) {     
      offPrice = (
        <>
          <del className="text-muted small fw-normal">R$ {original_price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</del>               
        </>
      );
    }

    

  }
  return (
    <div className="card h-100 border-0 shadow-sm">
      <Link href="/product/1">
        
          <div className="ratio ratio-1x1">
            <img
              className="card-img-top "
              src={image}
              alt="Product image."
              style={{ objectFit: "cover" }}
            />
          </div>
          {percentOff}
        
      </Link>
      <div className="card-body">
        <div className="vstack1 gap-2">
        <div> 
          <span className="fw-original-price">{offPrice}</span>
          <br></br>
          <span className="fw-price">{price}</span>
          
        </div>
        <Link href="/product/1">
            <span className="text-title text-decoration-none">{title}</span>
          </Link>
      </div>
      <div className="vstack">
      
          <button className="btn btn-sm btn-secondary text-btn-secondary" onClick={() => window.open(url, '_blank', 'noreferrer')}>
                  Ver na {store}
          </button>
          
          
        </div>
      </div>
    </div>
  );
}

export default ProductGridCard;
