import React, { useState, useEffect } from "react";
import ProductGrid from "../../components/product/product-grid";
import Sidebar from "../../components/sidebar";
import { useRouter } from 'next/router';
import ProductListBar from "../../components/product/product-list-bar";
import Pagination from "../../components/pagination";

function Category() {
    const router = useRouter()
    const term = router.query.term;
    const [products, setProducts] = useState([]);
    const [sortProducts, setSortProducts] = useState("-discount");
    const [page, setPage] = useState(1)
     
    useEffect(() => {
        fetchProducts();
    }, [term, page, sortProducts]);   

    const fetchProducts = async () => {
        const params = `page=${page}&size=50&term=${term}&sort_by=${encodeURIComponent(sortProducts)}`;       
        await fetch(`${process.env.API_BASE_URL}/deal?${params}`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            })
    };
    return (
        <div className="vstack">
            <div className="container py-4">
                <div className="row g-3">
                    <div className="col-lg-9">                        
                        <ProductGrid products={products} />
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
export default Category;
