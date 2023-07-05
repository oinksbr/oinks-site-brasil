function AdvertisingCard({ advertising }) {  
  return (
    <div className="card h-100 border-0 shadow-sm">
      <img
        className="ratio ratio-1x1"
        src={advertising.image_url}
        alt="Product image."
      />

    </div>
  );
}

export default AdvertisingCard;
