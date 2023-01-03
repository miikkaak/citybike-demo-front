import axios from "axios";

const server = import.meta.env.VITE_SERVER_URL;

const axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: false,
}

export const getJourneysCount = async () => {
    try {
        const res = axios.get(
            `${server}/journeys/count`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const fetchPaginatedJourneys = async (take, page) => {
    try {
        const res = axios.get(
            `${server}/journeys?take=${take}&page=${page}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const getStationsCount = async () => {
    try {
        const res = axios.get(
            `${server}/stations/count`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const fetchPaginatedStations = async (take, page) => {
    try {
        const res = axios.get(
            `${server}/stations?take=${take}&page=${page}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const findStation = async (search) => {
    try {
        const res = axios.get(
            `${server}/stations?keyword=${search}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const getStation = async (station) => {
    try {
        const res = axios.get(
            `${server}/stations/${station}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const getJourneysFrom = async (station) => {
    try {
        const res = axios.get(
            `${server}/journeys/from/${station}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}

export const getJourneysTo = async (station) => {
    try {
        const res = axios.get(
            `${server}/journeys/to/${station}`,
        )
        .then((res) => {
            return res.data;
        })

        return res;
    } catch (error) {
        console.error(error);
    }
}