import React, { useEffect } from "react";

function GoogleAdSense({
  className,
  style,
  client,
  slot,
  format,
  layout,
  layoutKey,
  responsive})
  {  
  useEffect(() => {
    if(window) (window.adsbygoogle = window.adsbygoogle || []).push({});  
  }, []);

  return (
    <div className="card h-100 border-0 shadow-sm">   
      <ins className={className}
        style={style}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout={layout}
        data-ad-layout-key={layoutKey}
        data-ad-format={format}
        data-full-width-responsive={responsive}></ins>
    </div>
  );
}

export default GoogleAdSense;
