import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductRelatedCard({ product }) {
  let percentOff;
  let price;
  let offPrice;
  let storeFolder;

  if (product.discount && product.discount > 0) {
    percentOff = (
      <>
        <div
          className="badge bg-mint py-2 text-white position-absolute"
          style={{ top: "0.5rem", left: "0.5rem" }}
        >
          {product.discount}%
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
        R$ {parseFloat(product.current_price).toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </>
    );
  }

  if (product.original_price !== null) {
    offPrice = (
      <>
        <del className="text-muted small fw-normal">R$ {parseFloat(product.original_price).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</del>
      </>
    );
  }

  storeFolder = ({
    "amazon": "amz",
    "magalu": "mlu",
  });
  
  return (
    <div className="py-2 vstack">
      <div className="card h-100 border-0 shadow-sm">
        <div className="ratio ratio-1x1">
          <a href={`/produto/${product.oink}`}>
            <img
              className="card-img-top"
              src={`https://oinks-com-br.s3.sa-east-1.amazonaws.com/uploads/${storeFolder[product.store]}/${product.oink}-300x300.png`}
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>       
        {percentOff}    
        <div className="card-body">
          <div className="vstack">
            <div>
              <span className="fw-original-price">{offPrice}</span>
              <br></br>
              <span className="fw-price">{price}</span>

            </div>
          </div>
          <div className="vstack">
           
            <button className="btn btn-sm btn-secondary text-btn-secondary" onClick={() => window.open(product.url, '_blank', 'noreferrer')}>
              Ver na {product.store}
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRelatedCard;
