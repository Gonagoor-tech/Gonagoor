
import React, { useEffect, useRef } from 'react';

interface GoogleMapWindow extends Window {
  initMap: () => void;
  google?: any;
}

declare const window: GoogleMapWindow;

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Initialize the map
    window.initMap = () => {
      if (!mapRef.current || !window.google) return;

      const location = { lat: 12.9121, lng: 77.5907 }; // Bengaluru JP Nagar coordinates
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#444444"}]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
          },
          {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
          },
          {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#c4e7f2"}, {"visibility": "on"}]
          }
        ]
      });

      // Add marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Gonagoor Tech Solutions"
      });
    };

    // Declare global initMap function
    window.initMap = window.initMap || function() {};

    loadGoogleMapsScript();

    return () => {
      window.initMap = function() {};
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full min-h-[400px]">
      <div className="h-full w-full flex items-center justify-center bg-secondary/20">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    </div>
  );
};

export default Map;
