import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TUITS_API = `${BASE_URL}/api/tuits`;

export const createTuit = async (tuit) =>
    axios.post(TUITS_API, tuit)
        .then(response => response.data);

export const findAllTuits = async () =>
    axios.get(TUITS_API)
        .then((response) => response.data);

export const deleteTuit = async (tuit) =>
    axios.delete(`${TUITS_API}/${tuit._id}`)
        .then(response => response.data);

export const updateTuit = async (tuit) =>
    axios.put(`${TUITS_API}/${tuit._id}`, tuit)
        .then(response => response.data);