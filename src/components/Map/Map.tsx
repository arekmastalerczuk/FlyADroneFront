import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {town, street} = useContext(SearchContext);
    const spot = `${town} ${street}`
    useEffect(() => {
        console.log('Make request to search for', spot);
    }, [spot])

    return <>
        <div className="map">
            <MapContainer center={[50.259490, 19.022222]} zoom={16}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyritht'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.265759, 19.025570]}>
                    <Popup>
                        <h3>Spodek</h3>
                        <p>Hala widowiskowo-sportowa</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </>
}
