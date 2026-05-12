import Link from "next/link";

export default function NotFound() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center text-center px-3" 
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <h1 
        className="display-1 fw-bold" 
        style={{ color: "#caa86a", letterSpacing: "10px" }}
      >
        404
      </h1>
      <h2 className="mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
        Page Not Found
      </h2>
      <p className="text-muted mb-5" style={{ maxWidth: "500px" }}>
        It looks like you've followed a broken link or entered a URL that doesn't exist on this site.
      </p>
      <Link 
        href="/" 
        className="btn px-5 py-3" 
        style={{ 
          backgroundColor: "#1a1a1a", 
          color: "white", 
          borderRadius: "0",
          letterSpacing: "2px",
          fontSize: "14px"
        }}
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
