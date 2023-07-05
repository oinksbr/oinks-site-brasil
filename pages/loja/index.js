import React, { useState, useEffect } from "react";
import StoreCard from "../../components/store/store-card";

function Store() {
    const [stores, setStores] = useState([]); 

    useEffect(() => {
        fetchStores();    
    }, []);

    const fetchStores = async () => {
        // setLoading(true);
        fetch(`${process.env.API_BASE_URL}/store`)
        .then((response) => response.json())
        .then((data) => {
            setStores(data)
        })  
        };
    return (
        <div>
            <div className="container py-3">
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-3 mb-5">
                            {stores.map((store, i) => {
                                return (
                                    <div className="col" key={i}>
                                        <StoreCard store={store} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Store;