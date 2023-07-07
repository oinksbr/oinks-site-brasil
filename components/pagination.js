import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Pagination({ currentPage, totalPages }) {
    const [currentPageButton, setCurrentPageButton] = useState(1);
    const limit = parseInt(process.env.PAGINATION_DISPLAY_PAGES);
    const [pages, setPages] = useState([]);
    
    useEffect(() => {
        setPages(Array.from({ length: totalPages <= limit ? totalPages : limit }, (_, i) => i + 1))
    }, [totalPages]);

    useEffect(() => {
        setVisiblePages();
    }, [currentPageButton]);

    function setVisiblePages() {
        const currentPages = [...pages];
        if (totalPages > limit) {
            if (pages.indexOf(currentPageButton) === limit - 1) {
                if (currentPageButton < totalPages) {
                    currentPages.splice(0, 1);
                    currentPages.push(currentPageButton + 1)
                }
            }
            if (currentPages.indexOf(currentPageButton) === 0) {
                if (currentPageButton > 1) {
                    currentPages.splice(currentPages.length - 1, 1);
                    currentPages.splice(0, 0, currentPageButton - 1)
                }
            }
            setPages(currentPages);
        }
    }

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
                                    if (currentPageButton !== 1) {
                                        return (
                                            <li className={`page-item ${currentPageButton === 1 ? "disabled" : ""}`}>
                                                <a className="page-link" href="#" onClick={() => setCurrentPage(currentPageButton - 1)}>
                                                    Anterior
                                                </a>
                                            </li>
                                        )
                                    }
                                    return null;
                                })()}

                                {
                                    pages.map((number) => {
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
                                    if (currentPageButton !== totalPages) {
                                        return (
                                            <li className={`page-item ${currentPageButton === totalPages ? "disabled" : ""}`}>
                                                <a className="page-link" href="#" onClick={() => setCurrentPage(currentPageButton + 1)}>
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