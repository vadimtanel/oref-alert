import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const classes = require('./style.css');


export default function CustomMap() {
  const [lat, setLat] = useState(51.505);
  const [lng, setLng] = useState(-0.09);
  const [zoom, setLZoom] = useState(13);
  
  const pointerIcon = new L.Icon({
    iconUrl: './../../asserts/mapPointer.png',
    iconRetinaUrl: './../../asserts/mapPointer.png',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowUrl: './../../assets/marker-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })

  useEffect(() => {
  });

  const position = [lat, lng]
  return (
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={pointerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
  );
}
