import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import './Map.css';
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import {SimpleSpotEntity} from 'types';
import {SingleSpot} from "./SingleSpot";

export const Map = () => {
    const {town, street} = useContext(SearchContext);
    const searchAddress = `${town} ${street}`
    const [spots, setSpots] = useState<SimpleSpotEntity[]>([]);

    // useEffect(() => {
    //
    // }, [searchAddress]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/spot/search/${town}`);
            const data = await res.json();
            setSpots(data);
        })();
    }, [town]);

    return <>
        <div className="map">
            <MapContainer center={[50.259490, 19.022222]} zoom={16}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyritht'>OpenStreetMap</a> & contributors"
                />
                {
                    spots.map(spot => (
                        <Marker key={spot.id} position={[spot.latitude, spot.longitude]}>
                            <Popup>
                                <SingleSpot id={spot.id}/>
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    </>
}
