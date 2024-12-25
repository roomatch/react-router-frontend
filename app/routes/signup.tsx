import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getSubmissions } from "~/utils/jotform";
export default function Signup() {

    const { data: submissions, error, isLoading } = useQuery({ queryKey: ["submissions"], queryFn: getSubmissions })
    let result = ""
    if (isLoading) {
        result = "Loading"
    } else if (error) {
        result = "Error retrieving data"
    } else {
        result = "Submissions loaded successfully"
    }


    const [images, setImages] = useState<string[]>([]);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return;

        const uploadPromises = Array.from(files).map(async (file: File) => {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'upload_preset');

            try {
                const res = await fetch('https://api.cloudinary.com/v1_1/dkao0yswo/upload', {
                    method: 'POST',
                    body: data
                });
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const json = await res.json();
                return json.secure_url;
            } catch (error) {
                console.error('Error:', error);
                return null;
            }
        });

        const uploadedImages = await Promise.all(uploadPromises);
        setImages(prevImages => [...prevImages, ...uploadedImages.filter(url => url !== null)]);
        console.log(uploadedImages);
    };

    return (
        <div>
            <p>{result}</p>
            <input type="file" multiple accept=".jpg, .jpeg, .png" onChange={handleFileUpload} />
            <div>
                {images.map(img => (
                    <img src={img} alt="uploaded" key={img} />
                ))}
            </div>
        </div>
    );
}
