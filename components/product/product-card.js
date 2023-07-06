import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductCard({ product }) {

  let percentOff;
  let price;
  let offPrice;

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
        R$ {product.current_price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </>
    );

    if (product.original_price !== null) {
      offPrice = (
        <>
          <del className="text-muted small fw-normal">R$ {product.original_price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</del>
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
            src={product.image}
            alt="Product product.image."
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
          <Link className="text-product.title text-decoration-none" href="/product/1">
            <span>{product.title}</span>
          </Link>
        </div>
        <div className="vstack">

          <button className="btn btn-sm btn-secondary text-btn-secondary" onClick={() => window.open(product.url, '_blank', 'noreferrer')}>
            Ver na {product.store}
          </button>


        </div>
      </div>
    </div>
  );
}

export default ProductCard;