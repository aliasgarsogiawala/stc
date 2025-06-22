"use client";

import React from "react";
import Image from "next/image";

export default function VCardPage(): React.JSX.Element {
  const primaryBlue = "#1e3a8a";
  const lightBlue = "#3b82f6";

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: `linear-gradient(135deg, ${primaryBlue} 0%, ${lightBlue} 100%)`,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "white",
      textAlign: "center"
    }}>
      
      {/* Company Logo */}
      <div style={{ marginBottom: "3rem" }}>
        <div style={{
          width: "200px",
          height: "200px",
          margin: "0 auto",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255,255,255,0.2)",
          marginBottom: "1rem"
        }}>
          <Image
            src="/logo.png"
            alt="STC Supreme Trading Corp Logo"
            width={150}
            height={150}
            style={{
              objectFit: "contain",
              borderRadius: "10px"
            }}
            onError={(e) => {
              // Fallback if image doesn't exist
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div style="font-size: 3rem; font-weight: 700; color: white; text-align: center;">
                  <span style="color: #fbbf24">STC</span><br/>Supreme
                </div>
              `;
            }}
          />
        </div>
        <p style={{
          fontSize: "1.2rem",
          margin: "0",
          letterSpacing: "4px",
          opacity: "0.9"
        }}>
          TRADING CORP
        </p>
      </div>

      {/* Profile Section */}
      <div style={{ 
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: "2rem",
        borderRadius: "20px",
        marginBottom: "3rem",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <div style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          margin: "0 auto 1.5rem",
          border: "3px solid rgba(255,255,255,0.3)"
        }}>
          AS
        </div>
        
        <h2 style={{ 
          fontSize: "2.5rem", 
          margin: "0 0 0.5rem",
          fontWeight: "600"
        }}>
          Aamir Sogiawala
        </h2>
        
        <p style={{ 
          fontSize: "1.1rem", 
          margin: "0",
          opacity: "0.9"
        }}>
          ISO 9001:2015 Quality Management System
        </p>
      </div>

      {/* Contact Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        maxWidth: "800px",
        width: "100%",
        marginBottom: "3rem"
      }}>
        
        {/* Phone */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1.5rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📱</div>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Mobile</h3>
          <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "500" }}>+91 99207 55226</p>
        </div>

        {/* Office Phone */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1.5rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📞</div>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Office</h3>
          <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "500" }}>+91 22-23455226</p>
        </div>

        {/* Email */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1.5rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📧</div>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Email</h3>
          <p style={{ margin: "0", fontSize: "1rem", fontWeight: "500" }}>info@supremetrading.in</p>
        </div>

        {/* Website */}
        <a
          href="https://www.supremetrading.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "1.5rem",
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            textDecoration: "none",
            color: "white",
            display: "block",
            transition: "transform 0.2s, background-color 0.2s",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
            (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌐</div>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Website</h3>
          <p style={{ margin: "0", fontSize: "1rem", fontWeight: "500" }}>www.supremetrading.in</p>
        </a>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "3rem"
      }}>
        <a
          href="tel:+919920755226"
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 0.2s",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          📞 Call Now
        </a>

        <a
          href="https://wa.me/919920755226"
          style={{
            backgroundColor: "#059669",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 0.2s",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          💬 WhatsApp
        </a>

        <a
          href="mailto:info@supremetrading.in"
          style={{
            backgroundColor: "#6366f1",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 0.2s",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          📧 Email
        </a>

        <a
          href="https://www.supremetrading.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#8b5cf6",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "transform 0.2s",
            border: "none",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          🌐 Visit Website
        </a>
      </div>

      {/* Address */}
      <div style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: "2rem",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        maxWidth: "600px"
      }}>
        <h3 style={{ 
          fontSize: "1.5rem", 
          margin: "0 0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        }}>
          📍 Our Locations
        </h3>
        <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          <p style={{ margin: "0 0 1rem" }}>
            <strong>Mumbai Office:</strong><br/>
            Shop No 4 , Bharmal House <br></br>
            Behind Dargah , Bhandari Street <br></br>  
            Masjid Bander (W) , Mumbai - 400003        </p>
          <p style={{ margin: "0" }}>
            <strong>Branch Office:</strong><br/>
            Siyaganj, Indore (M.P.)
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "3rem",
        fontSize: "0.9rem",
        opacity: "0.7"
      }}>
        Designed using vcard.supremetrading.in
      </div>
    </div>
  );
}
