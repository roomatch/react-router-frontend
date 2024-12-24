import { useState } from "react";

export default function Signup() {
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
            <input type="file" multiple accept=".jpg, .jpeg, .png" onChange={handleFileUpload} />
            <div>
                {images.map(img => (
                    <img src={img} alt="uploaded" key={img} />
                ))}
            </div>
        </div>
    );
}
