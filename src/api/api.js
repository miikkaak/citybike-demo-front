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