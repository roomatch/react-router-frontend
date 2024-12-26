export type Action = { type: "SET_IMAGES"; payload: string[] }
    | { type: "TOGGLE_INFO_NOTIFICATION" }
    | { type: "TOGGLE_SUCCESS_NOTIFICATION" }
    | { type: "TOGGLE_ERROR_NOTIFICATION" };
