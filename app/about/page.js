import Image from "next/image";
import Amenities from "@/components/Amenities";

export const metadata = {
  title: "About | Hotel Ananta Inn Jaipur",
  description: "Learn about Hotel Ananta Inn Jaipur, a luxury stay in Lal Kothi with modern rooms and premium hospitality.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-5" style={{ backgroundColor: "#fff", color: "#1a1a1a" }}>
        <div className="container py-5">
          <div className="row align-items-center">

            {/* Image Column */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="position-relative p-3">
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "70%",
                    height: "90%",
                    border: "2px solid #c5a059",
                    zIndex: "1",
                    transform: "translate(-20px, -20px)"
                  }}
                ></div>

                <div className="position-relative" style={{ height: "450px", zIndex: "2" }}>
                  <Image
                    src="/images/terace.jpg.png"
                    alt="Hotel Ananta Inn"
                    fill
                    style={{
                      objectFit: "cover",
                      boxShadow: "20px 20px 60px rgba(0,0,0,0.15)",
                      borderRadius: "2px"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-6 ps-lg-5">
              <div className="header-box mb-4">
                <span className="text-uppercase mb-2 d-block" style={{ color: "#c5a059", letterSpacing: "5px", fontSize: "13px", fontWeight: "600" }}>
                  Est. 2015
                </span>
                <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: "serif", letterSpacing: "-1px" }}>
                  The Art of Luxury <br />
                  <span style={{ color: "#c5a059" }}>Hospitality</span>
                </h2>
                <div style={{ width: "80px", height: "1px", backgroundColor: "#c5a059" }}></div>
              </div>

              <p className="lead mb-4" style={{ color: "#444", fontSize: "1.2rem", fontWeight: "400", lineHeight: "1.6" }}>
                At Hotel Ananta Inn, we don't just provide a room; we curate an experience that stays with you forever.
              </p>

              <p className="text-muted mb-5" style={{ lineHeight: "1.9" }}>
                "At Hotel Ananta Inn, we believe that hospitality is not just about a comfortable bed, but about creating an atmosphere where every guest feels at home. Our philosophy is rooted in the ancient Indian tradition of 'Atithi Devo Bhava', where the guest is treated as God. Since our inception in 2015, we have strived to maintain a perfect balance between professional service and personal warmth."
              </p>

              <div className="d-flex gap-5">
                <div className="feature">
                  <h5 className="mb-1 fw-bold" style={{ color: "#c5a059" }}>Royal Suites</h5>
                  <p className="small text-muted">Designed for Royalty</p>
                </div>
                <div className="feature">
                  <h5 className="mb-1 fw-bold" style={{ color: "#c5a059" }}>Fine Dining</h5>
                  <p className="small text-muted">A Taste of Tradition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities />
    </main>
  );
}