"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { MapPin } from "../icons";

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
    address: "51/A, Essaji Street, Opp. Shah Roadways, Vadgadi, Masjid Bunder (W), Mumbai 400003, Maharashtra, India",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30188.49523647128!2d72.835988!3d18.950776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2445fe9359%3A0xe8c4e71d26263e7a!2sTitanium%20Dioxide%20Suppliers%20-%20Supreme%20Trading%20Corp.!5e0!3m2!1sen!2sin!4v1765969497421!5m2!1sen!2sin",
  },
  {
    type: "Branch office",
    city: "Indore",
    address: "Loha Mandi, Siyaganj, Indore, Madhya Pradesh",
    mapSrc: "https://www.google.com/maps?q=Loha+Mandi,+Siyaganj,+Indore,+Madhya+Pradesh&output=embed",
  },
  {
    type: "Branch office",
    city: "Haridwar",
    address: "Jamalpur Kalan, District Haridwar, Uttarakhand",
    mapSrc: "https://www.google.com/maps?q=Jamalpur+Kalan,+District+Haridwar,+Uttarakhand&output=embed",
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
      <div className="max-w-[1360px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-14 text-center">
          <p className="mb-4 text-[#2d68a0] text-[10px] font-extrabold tracking-[0.1em] uppercase">Office network</p>
          <h2 className="m-0 font-heading text-[clamp(42px,5vw,64px)] font-semibold leading-none tracking-[-0.03em]">Locations</h2>
        </div>

        <div className="contact-office-grid grid grid-cols-[1.16fr_1fr_1fr] max-[900px]:grid-cols-1 gap-5 gs-stagger">
          {offices.map((office, index) => {
            const active = office.city === activeOffice.city;
            return (
              <button
                type="button"
                className={`contact-office-button tilt-card min-h-[324px] p-[clamp(26px,3vw,40px)] border relative overflow-hidden flex flex-col text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#356fa7] focus-visible:ring-offset-2 transition-[background-color,border-color] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[4px] after:transition-[width] after:duration-500 ${
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
                  <span className={`text-[10px] font-bold tracking-[0.1em] ${active ? "text-[#356fa7]" : "text-[#7b8a98]"}`}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-auto pt-14">
                  <p className={`mb-3 text-[10px] font-extrabold tracking-[0.09em] uppercase ${active ? "text-[#356fa7]" : "text-[#7b8a98]"}`}>{office.type}</p>
                  <h3 className={`mb-5 font-heading text-[clamp(32px,3vw,42px)] leading-none font-semibold tracking-[-0.03em] ${active ? "text-[#174f84]" : ""}`}>{office.city}</h3>
                  <address className="max-w-[410px] m-0 text-[#617181] text-[13px] font-medium not-italic leading-[1.75]">{office.address}</address>
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
      <div className="contact-map-header max-w-[1480px] mx-auto px-[clamp(22px,5vw,76px)] py-[clamp(54px,6vw,76px)]">
        <div className="grid grid-cols-[0.75fr_1.25fr] max-[760px]:grid-cols-1 items-end gap-[clamp(36px,7vw,110px)]">
          <div>
            <p className="mb-3 text-[#356fa7] text-[10px] font-extrabold tracking-[0.1em] uppercase">{activeOffice.city} {activeOffice.type}</p>
            <h2 className="m-0 font-heading text-[clamp(38px,4.5vw,58px)] font-semibold tracking-[-0.03em]">Find us</h2>
          </div>
          <address className="max-w-[620px] m-0 pl-8 max-[760px]:pl-0 max-[760px]:pt-6 border-l max-[760px]:border-l-0 max-[760px]:border-t border-[#356fa7]/24 text-[#526473] text-[14px] not-italic leading-[1.75]">{activeOffice.address}</address>
        </div>
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
