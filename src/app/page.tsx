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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: "'Arial', sans-serif"
    }}>
      
      {/* Logo at the top */}
      <div style={{
        marginBottom: "30px"
      }}>
        <Image
          src="/logo.png"
          alt="STC Supreme Trading Corp Logo"
          width={200}
          height={200}
          style={{
            objectFit: "contain"
          }}
          onError={(e) => {
            // Fallback if logo.png doesn't exist
            (e.target as HTMLImageElement).style.display = "none";
            (e.target as HTMLImageElement).parentElement!.innerHTML = `
              <div style="font-size: 3rem; font-weight: 700; color: #1e3a8a; text-align: center;">
                <span style="color: #3b82f6">STC</span><br/>Supreme
              </div>
            `;
          }}
        />
      </div>
      
      {/* Main Card Container */}
      <div style={{
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "0px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        overflow: "hidden",
        border: "2px solid #1e3a8a"
      }}>
        
        {/* Profile Section */}
        <div style={{
          backgroundColor: "#fff",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <Image
            src="/dad.jpeg"
            alt="Aamir Sogiawala"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #1e3a8a"
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML += `
                <div style="width: 100px; height: 100px; border-radius: 50%; background-color: #1e3a8a; color: white; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold;">
                  AS
                </div>
              `;
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "8px"
            }}>
              Aamir Sogiawala
            </div>
            <div style={{
              fontSize: "16px",
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
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "16px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📱 Mobile
            </div>
            <div style={{
              fontSize: "16px",
              color: "#333",
              fontWeight: "bold"
            }}>
              +91 99207 55226
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "16px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📞 Office
            </div>
            <div style={{
              fontSize: "16px",
              color: "#333",
              fontWeight: "bold"
            }}>
              +91 22-23455226
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "16px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}>
              📧 Email
            </div>
            <div style={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "bold"
            }}>
              info@supremetrading.in
            </div>
          </div>
          
          <div style={{ textAlign: "center" }}>
            <a href="https://www.supremetrading.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{
                fontSize: "16px",
                color: "#1e3a8a",
                fontWeight: "bold",
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px"
              }}>
                🌐 Website
              </div>
              <div style={{
                fontSize: "14px",
                color: "#3b82f6",
                fontWeight: "bold",
                textDecoration: "underline"
              }}>
                supremetrading.in
              </div>
            </a>
          </div>
        </div>

        {/* Action Icons */}
        <div style={{
          backgroundColor: "#fff",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          borderBottom: "1px solid #e0e0e0"
        }}>
          <a href="tel:+919920755226" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.1)";
            (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
          }}>
            📞
          </a>
          
          <a href="https://wa.me/919920755226" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.1)";
            (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
          }}>
            💬
          </a>
          
          <a href="mailto:info@supremetrading.in" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.1)";
            (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
          }}>
            📧
          </a>
          
          <a href="https://www.supremetrading.in" target="_blank" rel="noopener noreferrer" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#3b82f6",
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1.1)";
            (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "scale(1)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
          }}>
            🌐
          </a>
        </div>

        {/* Address Section */}
        <div style={{
          backgroundColor: "#f8f9ff",
          padding: "30px",
          textAlign: "center"
        }}>
          <div style={{
            fontSize: "16px",
            color: "#1e3a8a",
            fontWeight: "bold",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}>
            📍 Our Locations
          </div>
          <div style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>
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
