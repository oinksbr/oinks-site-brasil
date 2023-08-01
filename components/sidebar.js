import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdvertisingSidebarCard from "./advertising/advertising-sidebar-card";
import GoogleAdSense from "./advertising/google-adsense";

function Sidebar({ }) {
    const [advertisings, setAdvertisings] = useState([]);

    useEffect(() => {
        fetchAdvertisings();
    }, []);

    const fetchAdvertisings = async () => {
        // setLoading(true);
        fetch(`${process.env.API_BASE_URL}/advertising`)
            .then((response) => response.json())
            .then((data) => {
                setAdvertisings(data)
            })
    };

    return (
        <>
            <div className="accordion-item">
                <GoogleAdSense 
                    className={"adsbygoogle"}
                    style={{ display: 'block' }}
                    client={"ca-pub-7732920491288856"}
                    slot={"4592538741"} 
                    format="auto" 
                    responsive="true" />
            </div>   
            <div className="accordion-item">
                <GoogleAdSense 
                    className={"adsbygoogle"}
                    style={{ display: 'block' }}
                    client={"ca-pub-7732920491288856"}
                    slot={"4836081328"} 
                    format="auto" 
                    responsive="true" /> 
            </div>           
            {
                advertisings.filter(item => item.type === "sidebar")?.map((advertising, index) => {
                    return (
                        <div className="accordion-item">
                            <AdvertisingSidebarCard advertising={advertising} />
                        </div>
                    )
                })
            }
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <div className="accordion-title fw-bold">
                        Redes sociais
                    </div>
                </h2>
                <div className="accordion-collapse collapse show">
                    <div className="accordion-body pt-2">
                        <div className="vstack gap-2">
                            <div className="hstack align-self-center gap-4">
                                <a href="#" className="link-social">
                                    <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
                                </a>
                                <a href="#" className="link-social">
                                    <FontAwesomeIcon icon={["fab", "telegram"]} size="lg" />
                                </a>
                                <a href="#" className="link-social">
                                    <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
                                </a>
                                <a href="#" className="link-social">
                                    <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
                                </a>
                                <a href="#" className="link-social">
                                    <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;