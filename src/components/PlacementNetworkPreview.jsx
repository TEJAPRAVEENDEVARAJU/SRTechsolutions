import { ArrowUpRight, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "./PlacementNetworkPreview.css";

function PlacementNetworkPreview() {
  return (
    <section className="network-preview">
      <div className="network-preview-container">
        <div className="network-preview-icon">
          <Building2 size={32} />
        </div>

        <div className="network-preview-content">
          <span className="network-preview-tag">
            CONNECTING OPPORTUNITIES
          </span>

          <h2>
            Our Placement <span>Network</span>
          </h2>

          <p>
            Explore our growing network of industry connections and
            institutional collaborations, creating opportunities for
            students to connect with the professional world.
          </p>

          <Link to="/placement" className="network-preview-btn">
            Explore Our Network
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="network-preview-decoration">
          <Users size={100} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}

export default PlacementNetworkPreview;