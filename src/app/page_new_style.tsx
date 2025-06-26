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

        {/* Main Card Container - Dr. Alafiya Style */}
        <div style={{
          maxWidth: "700px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          overflow: "hidden",
          border: "1px solid #e0e0e0"
        }}>
          
          {/* Profile Section - Dr. Alafiya Style */}
          <div style={{
            backgroundColor: "#fff",
            padding: "50px 40px",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <Image
              src="/dad.jpeg"
              alt="Aamir Sogiawala"
              width={140}
              height={140}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #f0f0f0",
                flexShrink: 0
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                (e.target as HTMLImageElement).style.display = "none";
                if ((e.target as HTMLImageElement).parentElement) {
                  (e.target as HTMLImageElement).parentElement!.innerHTML += `
                    <div style="width: 140px; height: 140px; border-radius: 50%; background-color: #1e3a8a; color: white; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; flex-shrink: 0;">
                      AS
                    </div>
                  `;
                }
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "15px",
                lineHeight: "1.2"
              }}>
                Aamir Sogiawala
              </div>
              <div style={{
                fontSize: "20px",
                color: "#666",
                lineHeight: "1.4",
                fontWeight: "400"
              }}>
                Practicing Medical Cosmetologist, Trichologist &<br/>
                Skin Aesthetician
              </div>
            </div>
          </div>

          {/* Contact Info Section - Dr. Alafiya Style */}
          <div style={{
            backgroundColor: "#fff",
            padding: "50px 40px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "60px"
            }}>
              {/* Mobile Section */}
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  📱 Mobile
                </div>
                <a href="tel:+919920755226" style={{
                  fontSize: "18px",
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  +919920755226
                </a>
              </div>

              {/* Vertical Divider */}
              <div style={{
                width: "1px",
                height: "80px",
                backgroundColor: "#e0e0e0"
              }}></div>

              {/* Email Section */}
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  ✉️ Email
                </div>
                <a href="mailto:info@supremetrading.in" style={{
                  fontSize: "16px",
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  info@supremetrading.in
                </a>
              </div>
            </div>
          </div>

          {/* Action Icons Section - Brown circles like Dr. Alafiya */}
          <div style={{
            backgroundColor: "#fff",
            padding: "50px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <a href="https://wa.me/919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#8B4513",
              color: "white",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.1)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(139, 69, 19, 0.3)";
            }}>
              💬
            </a>
            
            <a href="tel:+919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#8B4513",
              color: "white",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.1)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(139, 69, 19, 0.3)";
            }}>
              📞
            </a>
            
            <a href="sms:+919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#8B4513",
              color: "white",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.1)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(139, 69, 19, 0.3)";
            }}>
              💬
            </a>
            
            <a href="mailto:info@supremetrading.in" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#8B4513",
              color: "white",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.1)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(139, 69, 19, 0.3)";
            }}>
              📧
            </a>
            
            <a href="https://www.supremetrading.in" target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#8B4513",
              color: "white",
              textDecoration: "none",
              fontSize: "28px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 12px rgba(139, 69, 19, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.1)";
              (e.target as HTMLElement).style.boxShadow = "0 6px 16px rgba(139, 69, 19, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "0 4px 12px rgba(139, 69, 19, 0.3)";
            }}>
              🌐
            </a>
          </div>

          {/* Address Section */}
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "40px",
            textAlign: "center"
          }}>
            <div style={{
              fontSize: "18px",
              color: "#1e3a8a",
              fontWeight: "bold",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}>
              📍 Our Locations
            </div>
            <div style={{ fontSize: "15px", color: "#666", lineHeight: "1.6" }}>
              <div style={{ marginBottom: "15px" }}>
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
