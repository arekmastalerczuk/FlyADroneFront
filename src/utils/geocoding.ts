export const geocode = async (spotAddress: string): Promise<{
    latitude: number;
    longitude: number;
}> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(spotAddress)}`);
    const geoData = await geoRes.json();

    const latitude = parseFloat(geoData[0].lat);
    const longitude = parseFloat(geoData[0].lon);

    return {latitude, longitude}
}
