import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {SearchContext} from "../../contexts/search.context";
import 'leaflet/dist/leaflet.css';
import '../../utils/fix-map-icon';
import {SimpleSpotEntity} from 'types';
import {SingleSpot} from "./SingleSpot";
import {apiUrl} from "../../config/api";
import './Map.css';

export const Map = () => {
    const {town, street} = useContext(SearchContext);
    const searchAddress = `${town} ${street}`
    const [spots, setSpots] = useState<SimpleSpotEntity[]>([]);

    // useEffect(() => {
    //
    // }, [searchAddress]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/spot/search/${searchAddress}`);
            const data = await res.json();
            setSpots(data);
        })();
    }, [searchAddress]);

    return <>
        <div className="map">
            <MapContainer center={[51.7731368, 19.3370743]} zoom={7}>
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
