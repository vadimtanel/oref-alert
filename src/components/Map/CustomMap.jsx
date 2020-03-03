import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconAlert from "./../../asserts/marker-icon-2x-red-alert.png";
import iconShadow from "./../../asserts/marker-shadow.png";
import { setSelectedAlert } from './../../reducers/orefActions';

// fix for react-leaflet
delete L.Icon.Default.prototype._getIconUrl;

// fix for react-leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const classes = require("./style.scss");

var greenIcon = new L.Icon({
  iconUrl: iconAlert,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});


export default function CustomMap(props) {
  const israelLat = 31.0461;
  const israelLng = 34.8516;
  const defaultZoom = 7;

  const data = useSelector(state => state.data);
  const dispatch = useDispatch()
  const selectedAlert = useSelector(state => state.selectedAlert);
  const [lat, setLat] = useState(israelLat);
  const [lng, setLng] = useState(israelLng);
  const [zoom, setZoom] = useState(defaultZoom);

  useEffect(() => {
    if (Object.keys(selectedAlert).length !== 0 && selectedAlert.constructor === Object && typeof (selectedAlert.geoPosition) !== "undefined" && selectedAlert.geoPosition !== null) {
      setLat(selectedAlert.geoPosition.latt);
      setLng(selectedAlert.geoPosition.longt);
      setZoom(12);
    } else { // if (Object.keys(selectedAlert).length === 0 || selectedAlert === null || typeof (selectedAlert) === "undefined" || typeof (selectedAlert.geoPosition) === "undefined" || selectedAlert.geoPosition === null) {
      setLat(israelLat);
      setLng(israelLng);
      setZoom(defaultZoom);
    }
  }, [selectedAlert]);


  const handleMarkerClick = (event, data) => {
    console.log("clicked on " + data.location);
    dispatch(setSelectedAlert(data));
  };

  const dataMarkers = () => {
    return data.map((d, index) => {
      if (d.geoPosition !== null) {
        return (
          <Marker key={"dataMarker" + index} position={[d.geoPosition.latt, d.geoPosition.longt]} onClick={event => handleMarkerClick(event, d)}>
            <Popup>{d.location + " - " + d.date + " " + d.time}</Popup>
          </Marker>);
      }
      return (<React.Fragment></React.Fragment>);
    });
  }

  const selectedMarker = () => {
    return (
      (Object.keys(selectedAlert).length === 0 && selectedAlert.constructor === Object && typeof (selectedAlert.geoPosition) === "undefined")
      || selectedAlert.geoPosition === null) ?
      <React.Fragment></React.Fragment>
      :
      <Marker key="selectedMarker" position={[selectedAlert.geoPosition.latt, selectedAlert.geoPosition.longt]} icon={greenIcon}>
        <Popup>{selectedAlert.location + " - " + selectedAlert.date + " " + selectedAlert.time}</Popup>
      </Marker>;
  }

  return (
    <Map center={[lat, lng]} zoom={zoom}>
      {dataMarkers()}
      {selectedMarker()}
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map >
  );
}
