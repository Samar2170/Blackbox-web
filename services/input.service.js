import { fetchWrapper } from "../helpers/fetch-wrapper";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const inputService = {
    uploadFile,
    uploadFiles,
}


function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    return fetchWrapper.postForm(`${baseUrl}upload`, formData);
}

function uploadFiles(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }
    return fetchWrapper.postForm(`${baseUrl}uploads`, formData);
}

// Path: pages/uploadFileForm.js