import React, {useEffect, useState} from 'react';
import {SpotEntity} from 'types';

interface Props {
    id: string;
}

export const SingleSpot = (props: Props) => {
    const [spot, setSpot] = useState<SpotEntity | null>(null);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/spot/${props.id}`);
            const data = await res.json();
            console.log(data);
            setSpot(data);
        })();
    }, []);

    if (spot === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <h3>{spot.name}</h3>
        {spot.description && <p><b>Opis:</b><br/>{spot.description}</p>}
        {spot.siteUrl && <p><b>Strona www:</b><br/><a href={spot.siteUrl} target="_blank" title="otwarcie w nowym oknie"
                                                      rel="noreferrer">{spot.siteUrl}</a></p>}
        {spot.facebookUrl &&
          <p><b>Facebook:</b><br/><a href={spot.facebookUrl} target="_blank" title="otwarcie w nowym oknie"
                                     rel="noreferrer">{spot.facebookUrl}</a></p>}
        {spot.youtubeUrl &&
          <p><b>YouTube:</b><br/><a href={spot.youtubeUrl} target="_blank" title="otwarcie w nowym oknie"
                                    rel="noreferrer">{spot.youtubeUrl}</a></p>}
        {spot.instagramUrl &&
          <p><b>Instagram:</b><br/><a href={spot.instagramUrl} target="_blank" title="otwarcie w nowym oknie"
                                      rel="noreferrer">{spot.instagramUrl}</a></p>}
        {spot.image && <p><b>Zdjęcie:</b><br/>{spot.image}</p>}
    </>
}
