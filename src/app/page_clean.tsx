"use client";

import React from "react";
import Image from "next/image";

export default function VCardPage(): React.JSX.Element {
  
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "white",
      fontFamily: "'Arial', sans-serif"
    }}>
      
      {/* Decorative line before logo - full width */}
      <div style={{
        width: "100vw",
        height: "8px",
        background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #1e3a8a 100%)"
      }}></div>

      {/* Logo Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        paddingBottom: "60px"
      }}>
        <Image
          src="/logo.png"
          alt="STC Supreme Trading Corp Logo"
          width={350}
          height={350}
          style={{
            objectFit: "contain",
            maxWidth: "80vw",
            height: "auto"
          }}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // Fallback if logo.png doesn't exist
            (e.target as HTMLImageElement).style.display = "none";
            if ((e.target as HTMLImageElement).parentElement) {
              (e.target as HTMLImageElement).parentElement!.innerHTML = `
                <div style="font-size: 4rem; font-weight: 700; color: #1e3a8a; text-align: center; line-height: 1.2;">
                  <span style="color: #3b82f6">STC</span><br/>Supreme
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Decorative line after logo - full width */}
      <div style={{
        width: "100vw",
        height: "8px",
        background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #1e3a8a 100%)",
        marginBottom: "40px"
      }}></div>

      {/* Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px"
      }}>

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
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).style.display = "none";
                if ((e.target as HTMLImageElement).parentElement) {
                  (e.target as HTMLImageElement).parentElement!.innerHTML += `
                    <div style="width: 100px; height: 100px; border-radius: 50%; background-color: #1e3a8a; color: white; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold;">
                      AS
                    </div>
                  `;
                }
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
            borderBottom: "1px solid #e0e0e0"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginBottom: "20px"
            }}>
              <a href="tel:+912223455226" style={{
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                color: "#3b82f6",
                padding: "15px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                transition: "all 0.2s ease",
                display: "block",
                border: "1px solid rgba(59, 130, 246, 0.2)"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                (e.target as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.4)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
                (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(59, 130, 246, 0.05)";
                (e.target as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.2)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}>
                📞 OFFICE<br/>
                <span style={{ fontSize: "12px", fontWeight: "normal" }}>+91 22-23455226</span>
              </a>
              
              <a href="mailto:info@supremetrading.in" style={{
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                color: "#3b82f6",
                padding: "15px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                transition: "all 0.2s ease",
                display: "block",
                border: "1px solid rgba(59, 130, 246, 0.2)"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                (e.target as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.4)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
                (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(59, 130, 246, 0.05)";
                (e.target as HTMLElement).style.borderColor = "rgba(59, 130, 246, 0.2)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}>
                📧 EMAIL<br/>
                <span style={{ fontSize: "10px", fontWeight: "normal" }}>info@supremetrading.in</span>
              </a>
            </div>
            
            {/* Save Contact Link */}
            <div style={{ textAlign: "center" }}>
              <a href="data:text/vcard;charset=utf-8,BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3AAamir%20Sogiawala%0AORG%3ASTC%20Supreme%20Trading%20Corp%0ATITLE%3AISO%209001%3A2015%20Quality%20Management%20System%0ATEL%3BTYPE%3DCELL%3A%2B919920755226%0ATEL%3BTYPE%3DWORK%3A%2B912223455226%0AEMAIL%3BTYPE%3DWORK%3Ainfo%40supremetrading.in%0AURL%3Ahttps%3A//www.supremetrading.in%0AADR%3BTYPE%3DWORK%3A%3B%3BShop%20No%204%2C%20Bharmal%20House%2C%20Behind%20Dargah%2C%20Bhandari%20Street%3BMasjid%20Bander%20%28W%29%3BMumbai%3B400003%3BIndia%0AEND%3AVCARD" download="Aamir_Sogiawala_STC.vcf" style={{
                color: "#3b82f6",
                textDecoration: "underline",
                fontSize: "14px",
                fontWeight: "500",
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#3b82f6";
              }}>
                💾 Save Contact to Phone
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
    </div>
  );
}
