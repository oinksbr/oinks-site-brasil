import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductListBar({sortDeals, totalItems}) {
  const [activeButton, setActiveButton] = useState("-discount");

  function sortDealsBy(sortOrder) {
    sortDeals(sortOrder);
    setActiveButton(sortOrder);
  }
  return (
    <div className="hstack top-bar justify-content-between mb-3">              
      <div className="btn-group" role="group">
        <button className={`btn ${activeButton==="-discount" ? "btn-top-bar-selected" : "btn-top-bar"}`} onClick={() => {sortDealsBy("-discount")}}>
          <FontAwesomeIcon icon={['fas', 'percentage']} /> Maior desconto
        </button>
        <button className={`btn ${activeButton==="+current_price" ? "btn-top-bar-selected" : "btn-top-bar"}`} onClick={() => {sortDealsBy("+current_price")}}>            
          <FontAwesomeIcon icon={['fas', 'sort-amount-down-alt']} /> Menor preço             
        </button>               
      </div>
      <span className="text-dark">{totalItems} {totalItems === 1 ? 'item encontrado': 'itens encontrados'}</span>
    </div>
  );
}

export default ProductListBar;
