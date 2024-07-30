import api from "./instance";

export async function getAuthentication() {
    let response = null;

    try {
        response = await api.get(`/user`)
    } catch(e) {
        console.error(e)
        response = e.response;
    }

    return response;
}