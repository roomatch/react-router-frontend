import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Flex, Strong, Text } from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";
import * as Toast from "@radix-ui/react-toast";
import { useEffect, useRef } from "react";

import { useReducer } from "react";

type State = {
    images: string[];
    isUploadInfoNotificationOpened: boolean;
    isUploadSuccessNotificationOpened: boolean;
    isUploadErrorNotificationOpened: boolean;
};

type Action =
    | { type: "SET_IMAGES"; payload: string[] }
    | { type: "TOGGLE_INFO_NOTIFICATION" }
    | { type: "TOGGLE_SUCCESS_NOTIFICATION" }
    | { type: "TOGGLE_ERROR_NOTIFICATION" };

const initialState: State = {
    images: [],
    isUploadInfoNotificationOpened: false,
    isUploadSuccessNotificationOpened: false,
    isUploadErrorNotificationOpened: false,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_IMAGES":
            return { ...state, images: action.payload };
        case "TOGGLE_INFO_NOTIFICATION":
            return { ...state, isUploadInfoNotificationOpened: !state.isUploadInfoNotificationOpened };
        case "TOGGLE_SUCCESS_NOTIFICATION":
            return { ...state, isUploadSuccessNotificationOpened: !state.isUploadSuccessNotificationOpened };
        case "TOGGLE_ERROR_NOTIFICATION":
            return { ...state, isUploadErrorNotificationOpened: !state.isUploadErrorNotificationOpened };
        default:
            return state;
    }
}

export default function Signup() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleFilesUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
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
        //setImages(prevImages => [...prevImages, ...uploadedImages.filter(url => url !== null)]);
        console.log(uploadedImages);

    };

    const filesMutation = useMutation({
        mutationFn: handleFilesUpload,
        onError: () => {if(state.isUploadErrorNotificationOpened) dispatch({ type: "TOGGLE_ERROR_NOTIFICATION" })},
        onMutate: () => {
            if(state.isUploadSuccessNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
            if(!state.isUploadInfoNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
        },
        onSuccess: () => {
            if(state.isUploadInfoNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
            if(!state.isUploadSuccessNotificationOpened) dispatch({ type: "TOGGLE_SUCCESS_NOTIFICATION" });
        },
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

                <Toast.Root className="bg-gray-100 rounded-md p-2 data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[hide_100ms_ease-in] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out]" open={state.isUploadInfoNotificationOpened} onOpenChange={() => {if(state.isUploadInfoNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" })}}>
                    <Flex display="flex" direction="row" justify="between" align="center">
                        <Toast.Title asChild>
                            <Flex display="flex" align="center" gap="1" mb="2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" stroke="blue" />
                                    <path d="M12 9h.01" stroke="blue" />
                                    <path d="M11 12h1v4h1" stroke="blue" />
                                </svg>
                                <Text as="p" size="2">Cargando imágenes...</Text>
                            </Flex>
                        </Toast.Title>
                        <Toast.Action
                            asChild
                            altText="Cerrar notificacion"
                        >
                            <Button variant="outline" color="crimson" size="1" radius="large" className="hover:cursor-pointer transition-all">Cerrar</Button>
                        </Toast.Action>
                    </Flex>
                </Toast.Root>

                <Toast.Root className="bg-gray-100 rounded-md p-2 data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[hide_100ms_ease-in] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out]" open={state.isUploadSuccessNotificationOpened} onOpenChange={() => {if(state.isUploadSuccessNotificationOpened) dispatch({ type: "TOGGLE_SUCCESS_NOTIFICATION" })}}>
                    <Flex display="flex" direction="row" justify="between" align="center">
                        <Toast.Title asChild>
                            <Flex display="flex" align="center" gap="1" mb="2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" stroke="green" />
                                <path d="M9 12l2 2l4 -4" stroke="green" />
                            </svg>
                            <Text as="p" size="2">Imágenes cargadas exitosamente.</Text>
                            </Flex>
                        </Toast.Title>
                        <Toast.Action
                            asChild
                            altText="Cerrar notificacion"
                        >
                            <Button variant="outline" color="crimson" size="1" radius="large" className="hover:cursor-pointer transition-all">Cerrar</Button>
                        </Toast.Action>
                    </Flex>
                </Toast.Root>

                <Toast.Root className="bg-gray-100 rounded-md p-2 data-[state=open]:animate-[slideIn_150ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[hide_100ms_ease-in] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-[swipeOut_100ms_ease-out]" open={state.isUploadErrorNotificationOpened} onOpenChange={() => {if(state.isUploadErrorNotificationOpened) dispatch({ type: "TOGGLE_ERROR_NOTIFICATION" })}}>
                    <Flex display="flex" direction="row" justify="between" align="center">
                        <Toast.Title asChild>
                            <Flex display="flex" align="center" gap="1" mb="2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-square-rounded">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" stroke="red" />
                                <path d="M12 8v4" stroke="red" />
                                <path d="M12 16h.01" stroke="red" />
                            </svg>
                            <Text as="p" size="2">Hubo un error en la carga, contáctanos para ayudarte.</Text>
                            </Flex>
                        </Toast.Title>
                        <Toast.Action
                            asChild
                            altText="Cerrar notificacion"
                        >
                            <Button variant="outline" color="crimson" size="1" radius="large" className="hover:cursor-pointer transition-all">Cerrar</Button>
                        </Toast.Action>
                    </Flex>
                </Toast.Root>



                <Toast.Viewport className="fixed flex flex-col gap-2.5 w-[390px] max-w-[100vw] z-[2147483647] m-0 p-[25px] right-0 bottom-0 list-none outline-none" />

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
