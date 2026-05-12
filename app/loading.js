"use client";

export default function Loading() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center" 
      style={{ height: "100vh", backgroundColor: "white" }}
    >
      <div 
        className="spinner-border" 
        role="status" 
        style={{ color: "#20b2aa", width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5 className="mt-4 text-muted fw-light" style={{ letterSpacing: "3px" }}>
        HOTEL ANANTA INN
      </h5>
      <p className="small text-muted mt-2">Preparing your luxury stay...</p>
    </div>
  );
}
