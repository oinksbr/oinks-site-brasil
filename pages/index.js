import React, { useState, useEffect } from "react";
import ProductGrid from "../components/product/product-grid";
import Sidebar from "../components/sidebar";
import ProductListBar from "../components/product/product-list-bar";
import Pagination from "../components/pagination";

function Products() {
    const [products, setProducts] = useState([]);
    const [sortProducts, setSortProducts] = useState("-discount");
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [page, sortProducts]);

    const fetchProducts = async () => {
        setLoading(true);
        const params = `page=${page}&size=50&sort_by=${encodeURIComponent(sortProducts)}`;
        await fetch(`${process.env.API_BASE_URL}/deal/?${params}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
        setLoading(false);
    }

    return (
        <div className="vstack">
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-9">
                        {
                            loading ? <div className="hstack top-bar justify-content-between mb-3">Carregando...</div> :
                                <>
                                    <ProductListBar totalItems={products.totalItems} sortDeals={setSortProducts} />
                                    <ProductGrid products={products} />
                                </>
                        }
                    </div>
                    <div className="col-lg-3 vstack gap-2">
                        <Sidebar />
                    </div>
                    <Pagination currentPage={setPage} totalPages={products.totalPages} />
                </div>
            </div>
        </div>
    );
}

export default Products;
