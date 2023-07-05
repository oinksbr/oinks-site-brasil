import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({currentPage, totalPages}) {
  const [currentPageButton, setCurrentPageButton] = useState(1);

  function setCurrentPage(number) {
    currentPage(number);
    setCurrentPageButton(number);
  }
  return (
    <>
        {(() => {
            if (totalPages > 1) {
                return (
                    <nav className="navbar justify-content-center mt-5">
                        <ul className="pagination">
                            {(() => {
                            if (currentPageButton !== 1){
                                return (
                                    <li className={`page-item ${currentPageButton === 1 ? "disabled" : ""}`}>
                                        <a className="page-link" href="#" onClick={() => setCurrentPage(currentPageButton-1)}>
                                            Anterior
                                        </a>
                                    </li>
                                )
                            }                            
                            return null;
                            })()}

                            {                
                                Array.from({length: totalPages}, (_, i) => i + 1).map((number) => {                   
                                    return (
                                        <li className={`page-item ${currentPageButton === number ? "active" : ""}`}>
                                            <a className="page-link" href="#" onClick={() => setCurrentPage(number)}>
                                                {number}
                                            </a>
                                        </li>
                                    )
                                })
                            }      
              
                            {(() => {
                            if (currentPageButton !== totalPages){
                                return (
                                    <li className={`page-item ${currentPageButton === totalPages ? "disabled" : ""}`}>
                                        <a className="page-link" href="#" onClick={() => setCurrentPage(currentPageButton+1)}>
                                            Próximo
                                        </a>
                                    </li>
                                )
                            }
                            return null;
                            })()}        
                
                        </ul>
                    </nav>   
                );
            }
            return null;
            })()}
    </>
  );
}

export default Pagination;