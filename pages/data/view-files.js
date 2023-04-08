import { dataService } from "../../services/data.service";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ViewFiles() {
    const router = useRouter();
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
        dataService.viewFiles()
            .then(files => {
                console.log(files);
                setFiles(files.rows);
            })
            .catch(err => setError(err));
    }, []);



    return (
        <div>
            <h1>View Files</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>File Name</th>
                                        <th>File Type</th>
                                        <th>File Size</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file, index) => (
                                        <tr key={index}>
                                            <td>{file.OgName}</td>
                                            <td>{file.Type}</td>
                                            <td>{file.Size}</td>
                                            <td>
                                                <button  className="btn btn-primary">
                                                    <a href={`${baseUrl}download/${file.SignedUrl}/`} target="_blank" rel="noopener noreferrer" >
                                                        
                                                        Download
                                                        </a>
                                                        </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            </div>
                            </div>
                            </div>

        </div>
    )
}