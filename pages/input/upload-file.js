import { inputService } from "../../services/input.service";
import FormLayout  from "../../components/form";
import { useRouter } from "next/router";
import {  useState } from "react";


export default function UploadFile() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        await inputService.uploadFile(file).then((response) => {
            setSubmitted(true);
            setUploading(false);
        }
        );
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <>
        <FormLayout name="Upload File">
            <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-3 sm:col-span-3">
                            <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">
                                File
                                </label>
                                <input type="file" name="invoiceFile"  onChange={handleFileChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>   
                    </div>    

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        disabled={uploading}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {uploading ? 'Loading...' : 'Create'}
                    </button>
                </div>
            </div>
            </form>
        </FormLayout>
        </>
    )
    
}

