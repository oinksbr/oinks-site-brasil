import Link from "next/link";

function StoreCard({ store }) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-1x1">
        <a href={`/loja/${store.name}`}>
            <img
            className="card-img-top"
            src={store.image_url}
            alt={store.display_name}
            style={{ objectFit: "cover" }}
            />
        </a>
      </div>      
    </div>
  );
}

export default StoreCard;
