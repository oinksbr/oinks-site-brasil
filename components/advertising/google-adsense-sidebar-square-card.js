import React, { useState, useEffect } from "react";

function GoogleAdSenseSidebarSquareCard({ }) {  
  useEffect(() => {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});  
  }, []);

  return (
    <div className="card h-100 border-0 shadow-sm">
          <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7732920491288856"
          data-ad-slot="4592538741"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
    </div>
  );
}

export default GoogleAdSenseSidebarSquareCard;
