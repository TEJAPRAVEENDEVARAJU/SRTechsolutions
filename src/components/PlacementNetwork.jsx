
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  MapPin,
  GraduationCap,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";

import "./PlacementNetwork.css";

// Statistics
const statistics = [
  {
    value: 3000,
    suffix: "+",
    label: "Students Trained",
    icon: Users,
  },
  {
    value: 2000,
    suffix: "+",
    label: "Students Placed",
    icon: GraduationCap,
  },
  {
    value: 52,
    suffix: "+",
    label: "Tech Programs",
    icon: Building2,
  },
  {
    value: 100,
    suffix: "+",
    label: "Companies",
    icon: Building2,
  },
];

// Placement locations
const locations = [
  {
    name: "Guntur",
    position: [16.3067, 80.4365],
    state: "Andhra Pradesh",
  },
  {
    name: "Sri City",
    position: [13.565, 80.02],
    state: "Andhra Pradesh",
  },
  {
    name: "Chennai",
    position: [13.0827, 80.2707],
    state: "Tamil Nadu",
  },
  {
    name: "Hyderabad",
    position: [17.385, 78.4867],
    state: "Telangana",
  },
  {
    name: "Bengaluru",
    position: [12.9716, 77.5946],
    state: "Karnataka",
  },
  {
    name: "Visakhapatnam",
    position: [17.6868, 83.2185],
    state: "Andhra Pradesh",
  },
  {
    name: "Vijayawada",
    position: [16.5062, 80.648],
    state: "Andhra Pradesh",
  },
];

// Company logos
// Add direct image URLs or local image filenames.
const companies = [
  {
    name: "Daikin",
    logo: "https://images.openai.com/static-rsc-4/V0Q_ItMcQdizsQlq0AosD-F_HPdB4XA6eYmx-rDz5ec2hYmgYHG5qSq7IeNMmjMmjgDRoYEKQnWn-T9OOmiLUU2OQ1t7tRBnenez89QlLZLwZvKTljTBSOtI5hSpnM3f12yI2-i7Qs7yEjjW8xioFJfFZU0i1TDRfHgOPFLzPIkI7OHICRCL-MiRzVYGLTvs?purpose=fullsize",
  },
  {
    name: "DMart",
    logo: "https://images.openai.com/static-rsc-4/JQUdgLc6gFgKm4mBc4tkzVxz5rVyXwa97vjts3DdThDfHEryf3Zp4RDuWezUjzSWpnmjqkQ-jlIR519TNqk5-7TrYb2860cK3GKswjfS5Hwu6D1xk_SGrq_gw1_Rk_RT91VILXTR_hVR6yEfNcrga9fDCCWs9kMZ5RxPb_nWVDmOyHCAf5ze9uw_GBwCWiAQ?purpose=fullsize",
  },
  {
    name: "LG",
    logo: "https://images.openai.com/static-rsc-4/NsrAXKB69ismUuzMBMwtVh0-Onr1RxMUEYONZCmfkfmryrv3vOjuNdbYuEIiACAwVPXUjHVCdTNTUHLR0wK101iGjWYMNkZrOVh_1rULZlQAdESY1PxqdXYk9ELc8rayDabmV4aniR_4c7_U9fbOXSyADRwEE598KFWWuzT_7uqi8guPCFd3xDoWNX73DhIM?purpose=fullsize",
  },
  {
    name: "Samsung",
    logo: "https://images.openai.com/static-rsc-4/2w0eH16f6SfQPICLAZxEqORTPLLK1_5vhlpWKi5q8cFt5KfHhDGezQr1OAo3LNIW9G1bCVfGTabPyhMSPNiWNd_gHGdYtebGJPDiFFtSQcLYdcYk4uQ0gZ4F_3eyeW5rCCEYR0eZ0N9yrLTV2IAJGlmtBU_0aiW3e0lKaxaLoHrpXwYcLiLDE6Cg9EhEtgBN?purpose=fullsize",
  },
  {
    name: "Mondelez India Foods",
    logo: "https://images.openai.com/static-rsc-4/sCIoVztj3dOBoYg3jAks3leW9gh1KEElIk8UHdrPBTOKR6iKnuXco4-I24J-qyk0l9VDhtBZn1P7MSyfQ6jXs9b2A3LaSVkk3RW7Efl2F2vZRvugGPpz1oO9txSOmlF19N4W3HSbePhGF-980lrRX9DS6jUeGtF1HeSyCp6Xl8I?purpose=inline",
  },
  {
    name: "Colgate-Palmolive",
    logo: "https://images.openai.com/static-rsc-4/XAOiAq3qf3V6gmMDhmWALabsZur7JudH-B3ZRwiQP4-fh3mmXJmKzYmD90D6CrjoU3caaU-14JO9NDeQGy_-hli9YNzFwHUgYXTCo4VRkbHevRpFpCqbWusQDgPus1oyayYjwcDwaNH_B33vE2wfxFSYLMdmmLhDRCDFjpQdE2k?purpose=inline",
  },
  {
    name: "Kellogg's India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWAtnlgXi8ojGCI9TsJls8M1ExqZ98od2awZynLZ6XA&s=10",
  },
  {
    name: "PepsiCo",
    logo: "https://images.openai.com/static-rsc-4/66cJjWWTi0s1sTOkNrm_w_Dwe709e2RaXA6t5OA9vvwSCSaOA3zMHRQntcgXRLnGiSrx8RwYv7Sk28Wpg2WCC5Ea3e2zPXOF8EGP1WLQjJCP6Pe-1NWOrBrOeybmwnWIaEVz0oU8tqInZjx6LgO7Mb73bkPCyELcgfn2qYmog2ZkW82dt2HJw4NGfo1BCg_o?purpose=fullsize",
  },
  {
    name: "Unicharm India",
    logo: "https://content.jdmagicbox.com/v2/comp/bangalore/c6/080pxx80.xx80.161009095203.y2c6/catalogue/unicharm-india-pvt-ltd-jayanagar-bangalore-fmcg-product-manufacturers-1uygjjn5s7.jpg",
  },
  {
    name: "Blue Star",
    logo: "https://images.openai.com/static-rsc-4/f1VyO6GJLGS8yKlbCQkCKF5UjUi6Kgm85SIgxqfBY46ok98tnrjAXPnf2l97Z_x1mqG72g-PfNcJjPNQ1O2IpDXvujAAASmDNFeyFuyckRkDHqipbi5LRLBalUmYrzejHR9Fpaw_YpwdOQIdc6jg3jMScYnYzmJIXX_uKvr_FYg?purpose=inline",
  },
  {
    name: "Havells",
    logo: "https://images.openai.com/static-rsc-4/_F3A59z2Vxy5ca09Pg4b41A1WcWQYqtxDJNUGPvejqFd6lazzZdtWdI4nxpyxJ2ZqGrqmztmmmXiSuBZRjc301OzT_6E80tu97d0LOZbKSojw5lB0qI6ECnWCL-DD9Hp1o9QF_d5hd_pTVQZuCkGNvHF5EzhcsVkheaGhDaaXJrlBqCXlhOmoS-HOi1VL-wp?purpose=fullsize",
  },
  {
    name: "Bharat FIH",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabCsn00_H-f9B6WA0i9s4PwFinPhhwzgut-tupZENQw&s=10",
  },
  {
    name: "Xiaomi",
    logo: "https://images.openai.com/static-rsc-4/l_ANNm5pjP0fmVsuPjXDKElsWmrs7qC_Ku09P-2AT13o8zdA6gj9rDdfUu1qKg3ZNYQeXR73e4fcP-rNdFTlhAZyGuVvugrY3e8WZzAW65QhpvvxCnCpFZSS5XRS6XBlhIJJFqDLpva4fZn5f-ja3GAkP5AiyHBxW3fdpXzPIpcMH__KlJwpI6E7iu9D41xI?purpose=fullsize",
  },
  {
    name: "West Pharmaceutical Packaging",
    logo: "https://e7.pngegg.com/pngimages/273/408/png-clipart-logo-west-pharmaceutical-services-pharmaceutical-industry-brand-product-european-flower-vine-blue-text-thumbnail.png",
  },
  {
    name: "Sutures India",
    logo: "https://invascent.com/wp-content/uploads/2023/05/Sutures-India-1.jpg",
  },
  {
    name: "Amber",
    logo: "https://www.ambergroupindia.com/wp-content/uploads/2025/02/Amber-Logo-on-white.png",
  },
  {
    name: "Mitsubishi Electric",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRin9PKe4kdQt8S0KGS421NeSQZHlb3Qms-bLbUH9hGiGYoDK3ng1Arh2A&s=10",
  },
];


// Animated statistics
function AnimatedStat({ value, suffix, label, icon: Icon, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const duration = 1600;
    const startTime = performance.now();

    let frame;

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <div className="placement-stat-card">
      <div className="placement-stat-icon">
        <Icon size={21} />
      </div>

      <div className="placement-stat-number">
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>

      <p>{label}</p>
    </div>
  );
}

// Main placement network
function PlacementNetwork() {
  const sectionRef = useRef(null);
  const companiesRef = useRef(null);

const [hasAnimated, setHasAnimated] = useState(true);
const [companiesVisible, setCompaniesVisible] = useState(true);

  // Main section animation - runs once
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Company section animation - runs independently once
  useEffect(() => {
    const companiesSection = companiesRef.current;

    if (!companiesSection || companiesVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompaniesVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(companiesSection);

    return () => observer.disconnect();
  }, [companiesVisible]);

  return (
    <section
      ref={sectionRef}
      id="placement-network"
      className={`placement-network section-padding ${
        hasAnimated ? "is-visible" : ""
      }`}
    >
      <div className="placement-container">
<br/><br/>
        {/* Section heading */}
        <div className="placement-heading">
          <span className="placement-eyebrow">
            OUR PLACEMENT NETWORK
          </span>

          <h2>
            Connecting Talent to{" "}
            <span>Opportunities</span>
          </h2>

          <p>
            Empowering students with practical skills and connecting
            talent with career opportunities across India's growing
            industrial and technology hubs.
          </p>
        </div>

        {/* Statistics */}
    <div className="placement-stats-grid">
  {statistics.map((stat) => (
    <AnimatedStat
      key={stat.label}
      {...stat}
      start={hasAnimated}
    />
  ))}
</div>

        {/* Interactive placement map */}
        <div className="placement-map-section">

          <div className="placement-map-heading">
            <div>
              <span className="placement-small-label">
                CAREER DESTINATIONS
              </span>

              <h3>
                Opportunities Across Multiple Cities
              </h3>

              <p>
                Explore the locations where our students have found
                career opportunities.
              </p>
            </div>

            <div className="placement-map-tag">
              <MapPin size={16} />
              <span>7 Locations</span>
            </div>
          </div>

          <div className="placement-map-layout">

            {/* India map */}
            <div className="placement-map">
              <MapContainer
                center={[15.5, 80.2]}
                zoom={5}
                scrollWheelZoom={false}
                className="india-map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {locations.map((location) => (
                  <CircleMarker
                    key={location.name}
                    center={location.position}
                    radius={8}
                    pathOptions={{
                      color: "#FFFFFF",
                      weight: 3,
                      fillColor: "#1746A2",
                      fillOpacity: 1,
                    }}
                  >
                    <Popup>
                      <strong>{location.name}</strong>
                      <br />
                      {location.state}
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>

            {/* Placement locations */}
            <div className="placement-location-list">
              <h4>Placement Locations</h4>

              {locations.map((location) => (
                <div
                  className="placement-location-item"
                  key={location.name}
                >
                  <span className="placement-location-dot"></span>

                  <div>
                    <strong>{location.name}</strong>
                    <small>{location.state}</small>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Company showcase - independent animation */}
        <div
          ref={companiesRef}
          className={`placement-companies-section ${
            companiesVisible ? "companies-visible" : ""
          }`}
        >

          <div className="placement-companies-heading">
            <span className="placement-small-label">
              INDUSTRY EXPOSURE
            </span>

            <h3>
              Companies Across Different Industries
            </h3>

            <p>
              Explore some of the organizations associated with the
              career journeys and opportunities shared by our students.
            </p>
          </div>

          {/* Four-column company grid */}
          <div className="placement-company-grid">

            {companies.map((company) => {
              const isDirectUrl = company.logo.startsWith("http");
              const isPlaceholder = company.logo.startsWith("PASTE_");

              const logoSrc = isDirectUrl
                ? company.logo
                : `/assets/logos/companies/${company.logo}`;

              return (
                <div
                  className="placement-company-item"
                  key={company.name}
                >
                  <div className="placement-company-card">

                    {!isPlaceholder && (
                      <img
                        src={logoSrc}
                        alt={`${company.name} logo`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    )}

                  </div>

                  <p className="placement-company-name">
                    {company.name}
                  </p>
                </div>
              );
            })}

          </div>

          <div className="placement-more-companies">
            <span>And many more organizations</span>
            <ArrowUpRight size={17} />
          </div>

        </div>

      </div>
    </section>
  );
}

export default PlacementNetwork;
