'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [usernameError, setUsernameError] = useState(false);

  useEffect(() => {
    console.log("MapComponent useEffect");
    function initMap() {
      const defaultLocation = { lat: 0, lng: 0 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: defaultLocation,
      });

      

      const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
      });

      map.addListener("click", (event) => {
        const clickedLocation = event.latLng;
        const lat = clickedLocation.lat();
        const lng = clickedLocation.lng();

        marker.setPosition(clickedLocation);
        document.getElementById("coords").textContent = `Latitude: ${lat}, Longitude: ${lng}`;
      });
    }

    if (typeof window !== 'undefined' && window.google) {
      console.log("MapComponent initMap");
      initMap();
    } else {
      initMap();
      console.log("MapComponent window.initMap");
      window.initMap = initMap;
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h1>Let&apos;s get started!</h1>
      </div>
      <form>
        <div>
          <label>Display Name: </label>
          <input id="display-name" name="display-name" required/>
        </div>
        <div>
          Message to the next recipient:<br/>
          <textarea style={{width: "100%", maxWidth: "100%"}} id="message" name="message"/><br/>
          You can come back to this later, if you&apos;d like.
        </div>
        <div>
          Location:
          <div id="map" style={{ height: '30rem', width: '100%' }}></div>
          <p>Coordinates: <span id="coords"></span></p>
          Not required, but encouraged! You can be as specific/general as you&apos;d like.
        </div>
        <button type="submit">Next</button>
      </form>
    </main>
  );
}

