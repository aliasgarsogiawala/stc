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
            padding: "30px 40px",
            display: "flex",
            alignItems: "center",
            gap: "25px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <Image
              src="/dad.jpeg"
              alt="Aamir Sogiawala"
              width={110}
              height={110}
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
                    <div style="width: 110px; height: 110px; border-radius: 50%; background-color: #1e3a8a; color: white; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; flex-shrink: 0;">
                      AS
                    </div>
                  `;
                }
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "8px",
                lineHeight: "1.2",
                whiteSpace: "nowrap"
              }}>
                Aamir Sogiawala
              </div>
              <div style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.4",
                fontWeight: "800"
              }}>
                <b>Raw Herbs | Food Herbs | Honey | Chemicals</b>
              </div>
            </div>
          </div>

          {/* Contact Info Section - Dr. Alafiya Style */}
          <div style={{
            backgroundColor: "#fff",
            padding: "30px 40px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "40px"
            }}>
              {/* Mobile Section */}
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
                  </svg>
                  Mobile
                </div>
                <a href="tel:+919920755226" style={{
                  fontSize: "14px",
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
                height: "60px",
                backgroundColor: "#e0e0e0"
              }}></div>

              {/* Email Section */}
              <div style={{
                textAlign: "center"
              }}>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#3b82f6">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email
                </div>
                <a href="mailto:aamir@supremetrading.in" style={{
                  fontSize: "12px",
                  color: "#333",
                  textDecoration: "none",
                  fontWeight: "500"
                }}>
                  aamir@supremetrading.in
                </a>
              </div>
            </div>
          </div>

          {/* Action Icons Section - Exactly like Dr. Alafiya */}
          <div style={{
            backgroundColor: "#fff",
            padding: "25px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            borderBottom: "1px solid #e0e0e0"
          }}>
            {/* WhatsApp */}
            <a href="https://wa.me/919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#364B8C",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
              </svg>
            </a>
            
            {/* Phone Call */}
            <a href="tel:+919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#364B8C",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
            
            {/* SMS/Message */}
            <a href="sms:+919920755226" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#364B8C",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </a>
            
            {/* Email */}
            <a href="mailto:info@supremetrading.in" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#364B8C",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            
            {/* Website */}
            <a href="https://supremetrading.in" target="_blank" rel="noopener noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#364B8C",
              color: "white",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "scale(1)";
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>

          {/* Save Contact Section */}
          <div style={{
            backgroundColor: "#364B8C",
            padding: "16px 40px",
            textAlign: "center"
          }}>
            <button
              onClick={() => {
                // Create vCard data
                const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Aamir Sogiawala
ORG:STC Supreme Trading Corp
TITLE:Raw Herbs | Food Herbs | Honey | Chemicals
TEL;TYPE=CELL:+919920755226
EMAIL:info@supremetrading.in
ADR;TYPE=WORK:;;Shop No 4, Bharmal House, Behind Dargah, Bhandari Street;Mumbai;Maharashtra;400003;India
URL:https://supremetrading.in
END:VCARD`;

                // Create blob and download
                const blob = new Blob([vCardData], { type: 'text/vcard' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'Aamir-Sogiawala-STC.vcf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              }}
              style={{
                width: "100%",
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                padding: "0",
                borderRadius: "0",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                transition: "all 0.2s ease",
                textDecoration: "underline"
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Save Contact on my Phone
            </button>
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

      {/* Footer - Designed by Techtics */}
      <div style={{
        backgroundColor: "#364B8C",
        background: "#364B8C",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px"
      }}>
        <div style={{
          fontSize: "16px",
          color: "white",
          fontWeight: "500"
        }}>
          Designed by Techtics
        </div>
      </div>
    </div>
  );
}
