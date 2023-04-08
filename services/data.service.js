import { fetchWrapper } from "../helpers/fetch-wrapper";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const dataService = {
    viewFiles
}



function viewFiles() {
    return fetchWrapper.get(`${baseUrl}view-files`);
}
