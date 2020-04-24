import { SERVER_URL } from "./settings";

facade = () => {

    async function fetchGameArea() {
        const res = await fetch(`${SERVER_URL}/geoapi/gamearea`).then(res => res.json());
        return res.coordinates;
    }

    async function isUserInArea(lon, lat) {
        const status = await fetch(`${SERVER_URL}/geoapi/isuserinarea/${lon}/${lat}`).
            then(res => res.json())
        return status;
    }

    async function welcomeGet() {
        const msg = await fetch(`${SERVER_URL}/api/dummy`).then(res => res.json());
        return msg
    }

    async function findNearbyTeams(userName, password, lat, lon, distance) {
        const request = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                password,
                lat: Number(lat),
                lon: Number(lon),
                distance: Number(distance)
            })
        };
        const response = await fetch(`${SERVER_URL}/gameapi/nearbyplayers`, request)
            .then(res => res.json());
        return response;
    }

    return {
        fetchGameArea,
        isUserInArea,
        welcomeGet,
        findNearbyTeams
    }
}

export default facade();