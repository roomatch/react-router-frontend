import type { RoomieArrendador } from "./roomieArrendador";

export type Roomie = {
    submissionid: string,
    compatibles: Array<RoomieArrendador>;
    edad: number;
    universidad: string;
    localidadesBuscadas: Array<string>;
    toleranciaInvitados: string;
    descripcionRommieIdeal: string;
    animalesMolestia: string | undefined;
    nombreCompleto: string;
    generoPreferencia: string;
    frecuenciaInvitados: string;
    amoblada: string | undefined;
    rangoPresupuestoMin: number;
    rangoPresupuestoMax: number;
    rangoEdadRoomieMin: number;
    rangoEdadRoomieMax: number;
    ocupacion: string;
    situacionBusqueda: string;
    genero: string;
    orden: string;
    limpieza: string;
    interaccionSocial: string;
    preferenciaRuido: string;
    celular: string;

};

export const createRoomie = (responses: Record<string, any>): Roomie => {
    const id = responses["id"]
    responses = responses["answers"]
    return {
        submissionid: id,
        compatibles: [],
        edad: parseInt(responses["17"]?.answer) || 0,
        universidad: responses["21"]?.answer || "",
        localidadesBuscadas: responses["23"]?.answer,
        toleranciaInvitados: responses["31"]?.answer || "",
        descripcionRommieIdeal: responses["37"]?.answer || "",
        animalesMolestia: responses["40"]?.answer,
        nombreCompleto: responses["41"]?.answer || "",
        generoPreferencia: responses["51"]?.answer || "",
        frecuenciaInvitados: responses["52"]?.answer || "",
        amoblada: responses["61"]?.answer,
        rangoPresupuestoMin: parseInt(responses["65"]?.answer.split(";")[0]),
        rangoPresupuestoMax: parseInt(responses["65"]?.answer.split(";")[1]),
        rangoEdadRoomieMin: parseInt(responses["66"]?.answer.split(";")[0]),
        rangoEdadRoomieMax: parseInt(responses["66"]?.answer.split(";")[0]),
        ocupacion: responses["81"]?.answer || "",
        situacionBusqueda: responses["82"]?.answer || "",
        genero: responses["83"]?.answer || "",
        orden: responses["84"]?.answer || "",
        limpieza: responses["85"]?.answer || "",
        interaccionSocial: responses["86"]?.answer || "",
        preferenciaRuido: responses["88"]?.answer || "",
        celular: responses["91"]?.answer || "",
    };
};
