function AdvertisingSidebarCard({ advertising }) {
  return (
    <>
      <img className="ratio ratio-1x1"
        src={advertising.image_url}
      />
    </>
  );
}

export default AdvertisingSidebarCard;
