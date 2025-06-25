"use client";

import React from "react";
import Image from "next/image";

export default function VCardPage(): React.JSX.Element {
  const primaryBlue = "#1e3a8a";
  const lightBlue = "#3b82f6";

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "'Arial', sans-serif"
    }}>
      
      {/* Main Card Container */}
      <div style={{
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "0px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        overflow: "hidden",
        border: "2px solid #1e3a8a"
      }}>
        
        {/* Header Section */}
        <div style={{
          backgroundColor: "#f8f9ff",
          padding: "20px",
          textAlign: "center",
          borderBottom: "3px solid #1e3a8a"
        }}>
          <div style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1e3a8a",
            marginBottom: "5px",
            letterSpacing: "1px"
          }}>
            <span style={{ color: "#3b82f6" }}>STC</span> Supreme
          </div>
          <div style={{
            fontSize: "12px",
            color: "#1e3a8a",
            fontWeight: "bold",
            letterSpacing: "2px"
          }}>
            TRADING CORP
          </div>
        </div>

        {/* Profile Section */}
        <div style={{
          backgroundColor: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <Image
            src="/dad.jpeg"
            alt="Aamir Sogiawala"
            width={70}
            height={70}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #1e3a8a"
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML += `
                <div style="width: 70px; height: 70px; border-radius: 50%; background-color: #1e3a8a; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold;">
                  AS
                </div>
              `;
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "5px"
            }}>
              Aamir Sogiawala
            </div>
            <div style={{
              fontSize: "12px",
              color: "#666",
              lineHeight: "1.4"
            }}>
              ISO 9001:2015 Quality Management System
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div style={{
          backgroundColor: "#fff",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "12px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📱 Mobile
            </div>
            <div style={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "bold"
            }}>
              +91 99207 55226
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "12px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📞 Office
            </div>
            <div style={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "bold"
            }}>
              +91 22-23455226
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "12px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📧 Email
            </div>
            <div style={{
              fontSize: "12px",
              color: "#333",
              fontWeight: "bold"
            }}>
              info@supremetrading.in
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <a href="https://www.supremetrading.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{
                fontSize: "12px",
                color: "#1e3a8a",
                fontWeight: "bold",
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
              }}>
                🌐 Website
              </div>
              <div style={{
                fontSize: "12px",
                color: "#3b82f6",
                fontWeight: "bold",
                textDecoration: "underline"
              }}>
                supremetrading.in
              </div>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          backgroundColor: "#fff",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <a href="tel:+919920755226" style={{
            backgroundColor: "#1e3a8a",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
            transition: "background-color 0.2s"
          }}>
            📞 CALL NOW
          </a>
          
          <a href="https://wa.me/919920755226" style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
            transition: "background-color 0.2s"
          }}>
            💬 WHATSAPP
          </a>
          
          <a href="mailto:info@supremetrading.in" style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
            transition: "background-color 0.2s"
          }}>
            📧 EMAIL
          </a>
          
          <a href="https://www.supremetrading.in" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: "#8b5cf6",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
            transition: "background-color 0.2s"
          }}>
            🌐 WEBSITE
          </a>
        </div>

        {/* Address Section */}
        <div style={{
          backgroundColor: "#f8f9ff",
          padding: "20px",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "14px",
            color: "#1e3a8a",
            fontWeight: "bold",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}>
            📍 Our Locations
          </div>
          <div style={{ fontSize: "11px", color: "#666", lineHeight: "1.4" }}>
            <div style={{ marginBottom: "8px" }}>
              <strong>Mumbai Office:</strong><br/>
              Shop No 4, Bharmal House<br/>
              Behind Dargah, Bhandari Street<br/>
              Masjid Bander (W), Mumbai - 400003
            </div>
            <div>
              <strong>Branch Office:</strong><br/>
              Siyaganj, Indore (M.P.)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
