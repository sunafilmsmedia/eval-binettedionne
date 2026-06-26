"use client";

import dynamic from "next/dynamic";
import { REGION_CENTER } from "@/lib/regions";

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="map-mono map-no-interaction absolute inset-0">
        <MapContainer
          center={REGION_CENTER}
          zoom={13}
          fadeAnimation={false}
          zoomControl={false}
          attributionControl={true}
          dragging={false}
          touchZoom={false}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          boxZoom={false}
          keyboard={false}
          style={{ width: "100%", height: "100%" }}
        >
          {/* Tuile claire CartoDB (Positron) grayscalée par .map-mono :
              réseau de rues gris/blanc bien lisible sur le fond noir du hero. */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap, &copy; CARTO'
            subdomains={["a", "b", "c", "d"]}
          />
        </MapContainer>
      </div>

      {/* Voile noir dégradé — laisse voir la carte au centre, fond noir sur les bords */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, rgba(40,8,11,0.10) 0%, rgba(40,8,11,0.55) 55%, rgba(40,8,11,0.92) 100%)",
        }}
      />
      {/* Renfort bas pour la zone CTA */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(40,8,11,0) 40%, rgba(40,8,11,0.60) 78%, rgba(40,8,11,0.95) 100%)",
        }}
      />
    </div>
  );
}
