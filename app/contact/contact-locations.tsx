"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { MapPin } from "../icons";
import { MUMBAI_MAP_SRC, MUMBAI_OFFICE } from "../contact-details";

type Office = {
  type: string;
  city: string;
  address: string;
  mapSrc: string;
};

const offices: Office[] = [
  {
    type: "Head office",
    city: "Mumbai",
    address: MUMBAI_OFFICE.full,
    mapSrc: MUMBAI_MAP_SRC,
  },
  {
    type: "Branch office",
    city: "Indore",
    address: "Loha Mandi, Siyaganj, Indore, Madhya Pradesh",
    mapSrc: "https://www.google.com/maps?q=Loha+Mandi,+Siyaganj,+Indore,+Madhya+Pradesh&output=embed",
  },
];

type LocationContextValue = {
  activeOffice: Office;
  selectOffice: (office: Office) => void;
};

const LocationContext = createContext<LocationContextValue | null>(null);

function useLocationSelection() {
  const value = useContext(LocationContext);
  if (!value) throw new Error("Location components must be inside LocationProvider.");
  return value;
}

export function LocationProvider({ children }: { children: ReactNode }) {
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const value = useMemo(() => ({ activeOffice, selectOffice: setActiveOffice }), [activeOffice]);

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}

export function LocationCards() {
  const { activeOffice, selectOffice } = useLocationSelection();

  return (
    <section className="py-[clamp(76px,8vw,112px)] px-[clamp(22px,5vw,76px)] bg-white gs-reveal">
      <div className="max-w-[1640px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-14 text-center">
          <p className="mb-4 text-[#2d68a0] text-[clamp(11px,0.78vw,13px)] font-extrabold tracking-[0.1em] uppercase">Office network</p>
          <h2 className="m-0 font-heading text-[clamp(42px,5vw,64px)] font-semibold leading-none tracking-[-0.03em]">Locations</h2>
        </div>

        <div className="contact-office-grid grid grid-cols-[1.08fr_1fr] max-w-[1200px] mx-auto max-[900px]:grid-cols-1 gap-5 gs-stagger">
          {offices.map((office, index) => {
            const active = office.city === activeOffice.city;
            return (
              <button
                type="button"
                className={`contact-office-button tilt-card min-h-[324px] p-[clamp(26px,3vw,40px)] rounded-2xl border relative overflow-hidden flex flex-col text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#356fa7] focus-visible:ring-offset-2 transition-[background-color,border-color] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:transition-[width] after:duration-500 ${
                  active
                    ? "border-[#356fa7] bg-[#dceaf6] text-[#122c44] after:w-full after:bg-[#356fa7]"
                    : "border-[#173a57]/16 bg-[#f5f8fa] text-[#122c44] after:w-0 after:bg-[#7fa9ce] hover:bg-white hover:after:w-full"
                }`}
                key={office.city}
                onClick={() => selectOffice(office)}
                aria-pressed={active}
                data-active={active}
              >
                <div className="flex items-start justify-between gap-5">
                  <span className={`w-11 h-11 border grid place-items-center ${
                    active
                      ? "border-[#356fa7] bg-[#356fa7] text-white"
                      : "border-[#2d68a0]/28 bg-white text-[#2d68a0]"
                  }`}><MapPin /></span>
                  <span className={`text-[clamp(11px,0.78vw,13px)] font-bold tracking-[0.1em] ${active ? "text-[#356fa7]" : "text-[#7b8a98]"}`}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-auto pt-14">
                  <p className={`mb-3 text-[clamp(11px,0.78vw,13px)] font-extrabold tracking-[0.09em] uppercase ${active ? "text-[#356fa7]" : "text-[#7b8a98]"}`}>{office.type}</p>
                  <h3 className={`mb-5 font-heading text-[clamp(32px,3vw,42px)] leading-none font-semibold tracking-[-0.03em] ${active ? "text-[#174f84]" : ""}`}>{office.city}</h3>
                  <address className="max-w-[410px] m-0 text-[#617181] text-[clamp(14px,1vw,18px)] font-medium not-italic leading-[1.75]">{office.address}</address>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LocationMap() {
  const { activeOffice } = useLocationSelection();

  return (
    <section className="contact-map-section-new bg-[#f4f7fa] gs-reveal" aria-live="polite">
      <div className="contact-map-header px-[clamp(22px,5vw,76px)] py-[clamp(48px,5vw,66px)] text-center">
        <h2 className="m-0 font-heading text-[clamp(44px,5vw,68px)] leading-none font-semibold tracking-[-0.035em] text-[#123451]">Find us Here</h2>
      </div>
      <div className="contact-map-reveal relative overflow-hidden">
        <iframe
          key={activeOffice.city}
          title={`Supreme Trading Corp ${activeOffice.city} ${activeOffice.type} map`}
          src={activeOffice.mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="w-full h-[480px] max-[720px]:h-[380px] block border-0 [filter:saturate(0.65)_contrast(1.03)]"
        />
        <span key={`map-swipe-${activeOffice.city}`} className="contact-map-swipe" aria-hidden="true" />
      </div>
    </section>
  );
}
