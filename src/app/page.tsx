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
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: "white",
      textAlign: "center",
      gap: "1.5rem"
    }}>
      
      {/* Company Logo */}
      <div style={{ marginBottom: "1rem" }}>
        <div style={{
          width: "150px",
          height: "150px",
          margin: "0 auto",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
          border: "2px solid rgba(255,255,255,0.2)",
          marginBottom: "0.5rem",
          overflow: "hidden"
        }}>
          <Image
            src="/logo.png"
            alt="STC Supreme Trading Corp Logo"
            width={150}
            height={150}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%"
            }}
            onError={(e) => {
              // Fallback if image doesn't exist
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div style="font-size: 2.5rem; font-weight: 700; color: white; text-align: center; display: flex; align-items: center; justify-content: center; height: 100%;">
                  <div><span style="color: #fbbf24">STC</span><br/>Supreme</div>
                </div>
              `;
            }}
          />
        </div>
       
      </div>

      {/* Profile Section */}
      <div style={{ 
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: "1.5rem",
        borderRadius: "20px",
        marginBottom: "1.5rem",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}>
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          border: "3px solid rgba(255,255,255,0.3)",
          overflow: "hidden"
        }}>
          <Image
            src="/dad.jpeg"
            alt="Aamir Sogiawala"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
            onError={(e) => {
              // Fallback if image doesn't exist
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div style="font-size: 2.5rem; font-weight: bold; color: white; display: flex; align-items: center; justify-content: center; height: 100%;">
                  AS
                </div>
              `;
            }}
          />
        </div>
        
        <h2 style={{ 
          fontSize: "2rem", 
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
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1rem",
        maxWidth: "700px",
        width: "100%",
        marginBottom: "1.5rem"
      }}>
        
        {/* Phone */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>📱</div>
          <h3 style={{ margin: "0 0 0.3rem", fontSize: "1rem" }}>Mobile</h3>
          <p style={{ margin: "0", fontSize: "1.1rem", fontWeight: "500" }}>+91 99207 55226</p>
        </div>

        {/* Office Phone */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>📞</div>
          <h3 style={{ margin: "0 0 0.3rem", fontSize: "1rem" }}>Office</h3>
          <p style={{ margin: "0", fontSize: "1.1rem", fontWeight: "500" }}>+91 22-23455226</p>
        </div>

        {/* Email */}
        <div style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "1rem",
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>📧</div>
          <h3 style={{ margin: "0 0 0.3rem", fontSize: "1rem" }}>Email</h3>
          <p style={{ margin: "0", fontSize: "0.9rem", fontWeight: "500" }}>info@supremetrading.in</p>
        </div>

        {/* Website */}
        <a
          href="https://www.supremetrading.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "1rem",
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
          <div style={{ fontSize: "1.5rem", marginBottom: "0.3rem" }}>🌐</div>
          <h3 style={{ margin: "0 0 0.3rem", fontSize: "1rem" }}>Website</h3>
          <p style={{ margin: "0", fontSize: "0.9rem", fontWeight: "500" }}>www.supremetrading.in</p>
        </a>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: "flex",
        gap: "0.8rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "1.5rem"
      }}>
        <a
          href="tel:+919920755226"
          style={{
            backgroundColor: "#10b981",
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
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
          📞 Call
        </a>

        <a
          href="https://wa.me/919920755226"
          style={{
            backgroundColor: "#059669",
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
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
            padding: "0.8rem 1.5rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
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
            padding: "0.8rem 1.5rem",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
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
          🌐 Website
        </a>
      </div>

      {/* Address */}
      <div style={{
        backgroundColor: "rgba(255,255,255,0.1)",
        padding: "1.5rem",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        maxWidth: "500px"
      }}>
        <h3 style={{ 
          fontSize: "1.3rem", 
          margin: "0 0 0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        }}>
          📍 Our Locations
        </h3>
        <div style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          <p style={{ margin: "0 0 0.8rem" }}>
            <strong>Mumbai Office:</strong><br/>
            Shop No 4 , Bharmal House <br/>
            Behind Dargah , Bhandari Street <br/>  
            Masjid Bander (W) , Mumbai - 400003        
          </p>
          <p style={{ margin: "0" }}>
            <strong>Branch Office:</strong><br/>
            Siyaganj, Indore (M.P.)
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "1.5rem",
        fontSize: "0.8rem",
        opacity: "0.7"
      }}>
        Designed by Techtics
      </div>
    </div>
  );
}
