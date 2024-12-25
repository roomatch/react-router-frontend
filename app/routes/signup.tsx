import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Flex, Strong, Text } from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";
import * as Toast from "@radix-ui/react-toast";
import { useEffect, useRef } from "react";
import "./styles.css";

export default function Signup() {
    const [images, setImages] = useState<string[]>([]);

    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const handleFilesUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpen(false);
        const files = event.target.files;
        if (!files) return;

        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setOpen(true);
        }, 100);
        /*
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
        */
    };

    const filesMutation = useMutation({
        mutationFn: handleFilesUpload,
        onError: (error) => console.error('Error:', error),
    })

    return (
        <>
            <Toast.Provider swipeDirection="right">

                <Label.Root htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-2/4 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <Text size="4" as="p"><Strong>Cargar imágenes</Strong></Text>
                    <Text size="1" as="p">JPG, JPEG o PNG</Text>
                    <input multiple accept=".jpg, .jpeg, .png" onChange={filesMutation.mutate} id="dropzone-file" type="file" className="hidden" />
                    {filesMutation.isPending && <Text size="1" as="p">Cargando...</Text>}
                    {filesMutation.isSuccess && <Text size="1" as="p">Cargado con éxito</Text>}
                </Label.Root >

                <Toast.Root className="bg-white rounded-md p-4 data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[hide_100ms_ease-in] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out]" open={open} onOpenChange={setOpen}>
                    <Toast.Title asChild>
                        <Flex display="flex" align="center" gap="1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M12 9h.01" />
                                <path d="M11 12h1v4h1" />
                            </svg>
                            <Text as="p">Cargando imágenes...</Text>
                        </Flex>
                    </Toast.Title>
                    <Toast.Action
                        asChild
                        altText="Cerrar notificacion"
                    >
                        <Button size="1" radius="large" className="hover:cursor-pointer transition-all">Cerrar</Button>
                    </Toast.Action>
                </Toast.Root>
                <Toast.Viewport className="fixed flex flex-col gap-2.5 w-[390px] max-w-[100vw] z-[2147483647] m-0 p-[25px] right-0 bottom-0 list-none outline-none" />

                <div>
                    {images.map(img => (
                        <img src={img} alt="uploaded" key={img} />
                    ))}
                </div>
            </Toast.Provider>

        </>
    );
}

function prettyDate(date: number | Date | undefined) {
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
        timeStyle: "short",
    }).format(date);
}
