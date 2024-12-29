import { useReducer } from "react";
import type { Action } from "../types/action";

export default function useManageFilesUpload() {

    type State = {
        images: string[];
        isUploadInfoNotificationOpened: boolean;
        isUploadSuccessNotificationOpened: boolean;
        isUploadErrorNotificationOpened: boolean;
    };

    const initialState: State = {
        images: [],
        isUploadInfoNotificationOpened: false,
        isUploadSuccessNotificationOpened: false,
        isUploadErrorNotificationOpened: false,
    };

    const [state, dispatch] = useReducer((state: State, action: Action) => {
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
        };
    }, initialState);

    return { state, dispatch };
};
