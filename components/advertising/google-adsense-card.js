import React, { useState, useEffect } from "react";

function GoogleAdSenseCard({ advertising }) {  
  useEffect(() => {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});  
  }, []);

  return (
    <div className="card h-100 border-0 shadow-sm">
      <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '230px', height: '453px' }}
          data-ad-client="ca-pub-7732920491288856"
          data-ad-slot="7722362440"></ins>
    </div>
  );
}

export default GoogleAdSenseCard;
