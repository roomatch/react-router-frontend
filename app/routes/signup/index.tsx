import { useMutation } from "@tanstack/react-query";
import * as Toast from "@radix-ui/react-toast";
import { default as ToastRoot } from "./components/toast";
import { error } from "./icons/error";
import { info } from "./icons/info";
import { success } from "./icons/success";
import useManageFilesUpload from "./hooks/use-manage-files-upload";
import type { Action } from "./types/action";
import FilesInput from "./components/files-input";

export default function Signup() {
    const { state, dispatch } = useManageFilesUpload();

    const handleFilesUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files) return null;
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
                if (error instanceof Error) {
                    throw new Error (error.message);
                }
                throw new Error('Unknown error');
            }
        });

        const uploadedImages = await Promise.all(uploadPromises);
        dispatch({ type: "SET_IMAGES", payload: [...state.images, ...uploadedImages.filter(url => url !== null)] });
    };

    const filesMutation = useMutation({
        mutationFn: handleFilesUpload,
        onError: () => { if (state.isUploadErrorNotificationOpened) dispatch({ type: "TOGGLE_ERROR_NOTIFICATION" }) },
        onMutate: () => {
            if (state.isUploadSuccessNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
            if (!state.isUploadInfoNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
        },
        onSuccess: () => {
            if (state.isUploadInfoNotificationOpened) dispatch({ type: "TOGGLE_INFO_NOTIFICATION" });
            if (!state.isUploadSuccessNotificationOpened) dispatch({ type: "TOGGLE_SUCCESS_NOTIFICATION" });
        },
    })

    const onOpenChangeProducer = (state: boolean, type: Action['type']) => () => { if (state) dispatch({ type } as Action) }
    
    const notifications = [{
        open: state.isUploadInfoNotificationOpened,
        onOpenChange: onOpenChangeProducer(state.isUploadInfoNotificationOpened, 'TOGGLE_INFO_NOTIFICATION'),
        icon: info,
        title: "Cargando imágenes...",
    },
    {
        open: state.isUploadSuccessNotificationOpened,
        onOpenChange: onOpenChangeProducer(state.isUploadSuccessNotificationOpened, 'TOGGLE_SUCCESS_NOTIFICATION'),
        icon: success,
        title: `${state.images.length} ${state.images.length == 1 ? 'imágen cargada' : 'imágenes cargadas'} exitosamente.`,
    },
    {
        open: state.isUploadErrorNotificationOpened,
        onOpenChange: onOpenChangeProducer(state.isUploadErrorNotificationOpened, 'TOGGLE_ERROR_NOTIFICATION'),
        icon: error,
        title: "Hubo un problema con la carga de tus imágenes, contactanos para ayudarte.",
    }]
    return (
        <Toast.Provider duration={60000} swipeDirection="right">
            <FilesInput filesMutation={filesMutation} />

            {notifications.map(({ open, onOpenChange, icon, title }) => (
                <ToastRoot key={title} open={open} onOpenChange={onOpenChange} icon={icon} title={title} />
            ))}

            <Toast.Viewport className="fixed flex flex-col gap-2.5 w-96 max-w-[100vw] z-[2147483647] m-0 p-[25px] right-0 bottom-0 list-none outline-none" />
        </Toast.Provider>
    );
}
