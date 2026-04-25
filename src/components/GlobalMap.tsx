'use client';

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styles from './GlobalMap.module.css';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Suppress hover/pressed outlines that browsers add to SVG elements
const GEOGRAPHY_STYLE = {
  default: { outline: 'none' },
  hover:   { outline: 'none' },
  pressed: { outline: 'none' },
};

interface MapMarker {
  id: string;
  code: string;
  region: string;
  coordinates: [number, number]; // [longitude, latitude]
  color: string;
  pulseDelays: [string, string]; // two staggered CSS animation delays for the ripple effect
}

const MARKERS: MapMarker[] = [
  { id: 'fda',  code: 'FDA',  region: 'United States', coordinates: [-95,  38], color: '#0A4D68', pulseDelays: ['0s',   '0.8s'] },
  { id: 'ema',  code: 'EMA',  region: 'Europe',        coordinates: [ 10,  51], color: '#1A7A5A', pulseDelays: ['0.7s', '1.5s'] },
  { id: 'nmpa', code: 'NMPA', region: 'China',         coordinates: [104,  36], color: '#E8913A', pulseDelays: ['1.4s', '2.2s'] },
  { id: 'tga',  code: 'TGA',  region: 'Australia',     coordinates: [133, -27], color: '#0D6B90', pulseDelays: ['2.1s', '2.9s'] },
];

const MARKER_RADIUS = 22;

export default function GlobalMap() {
  return (
    <div className={styles.wrap}>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 153, center: [0, 0] }}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(10, 77, 104, 0.18)"
                stroke="rgba(10, 77, 104, 0.1)"
                strokeWidth={0.5}
                style={GEOGRAPHY_STYLE}
              />
            ))
          }
        </Geographies>

        {MARKERS.map(({ id, code, region, coordinates, color, pulseDelays }) => (
          <Marker key={id} coordinates={coordinates}>
            {/* Two staggered rings create a "signal pulse" effect */}
            <circle r={MARKER_RADIUS} fill={color} className={styles.pulse} style={{ animationDelay: pulseDelays[0] }} />
            <circle r={MARKER_RADIUS} fill={color} className={styles.pulse} style={{ animationDelay: pulseDelays[1] }} />
            <circle r={MARKER_RADIUS} fill={color} opacity={0.92} />
            <text textAnchor="middle" y={6}  fontSize={14} fill="white"               fontWeight="700" fontFamily="Inter, sans-serif">{code}</text>
            <text textAnchor="middle" y={38} fontSize={13} fill="rgba(10,77,104,0.85)"                 fontFamily="Inter, sans-serif">{region}</text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
