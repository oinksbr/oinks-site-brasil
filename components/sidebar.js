import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdvertisingSidebarCard from "./advertising/advertising-sidebar-card";

function Sidebar({ advertising }) {
    return (
        <>
            {
                advertising.filter(item => item.type === "sidebar")?.map((propaganda, index) => {
                    return (
                        <div className="accordion-item">
                            <AdvertisingSidebarCard advertising={propaganda} />
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