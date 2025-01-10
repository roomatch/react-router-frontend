import { getInteresados } from "./interesados";

export type RoomieArrendador = {
    submission_id: string;
    edad: number;
    universidad: string;
    toleranciaInvitados: string;
    numeroRommies: number | undefined;
    descripcionRommieIdeal: string;
    animalesMolestia: string[] | undefined;
    viviraConMascota: string;
    otrosAnimalesMolestia: string;
    nombreCompleto: string;
    localidadVivienda: Array<string>;
    descripcionApartamento: string | undefined;
    precioHabitacion: Array<number>;
    amoblada: Array<string>;
    precioHabitacionServicios: boolean;
    precioServiciosPromedio: number | undefined;
    generoPreferencia: string;
    generoApartamento: string[];
    frecuenciaInvitados: string;
    rangoEdadRoomie: string;
    ocupacion: string[];
    situacionBusqueda: string;
    genero: string;
    orden: string;
    limpieza: string;
    interaccionSocial: string;
    preferenciaRuido: string;
    celular: string;
    direccion: string | undefined;
    linkfotos: string | undefined;
    puntaje: number;
    plan: string;
    fechaHabitacion: { datetime: string };
    numberOfCompatibles: number;
};

export const createRoomieArrendador = (responses: Record<string, any>): RoomieArrendador => {
    const id = responses["id"]
    responses = responses["answers"]
    let habitaciones = JSON.parse(responses["75"].answer)
    let precios = []
    let amobladas = []
    for (let i = 0; i < habitaciones.length; i++) {
        precios.push(habitaciones[i].Precio)
        amobladas.push(habitaciones[i].Amoblada)
    }
    return {
        submission_id: id,
        puntaje: 0,
        edad: parseInt(responses["17"]?.answer) || 0,
        universidad: responses["21"]?.answer || "",
        toleranciaInvitados: responses["31"]?.answer || "",
        numeroRommies: parseInt(responses["33"]?.answer) || undefined,
        descripcionRommieIdeal: responses["37"]?.answer || "",
        animalesMolestia: responses["40"]?.answer,
        viviraConMascota: responses["87"]?.answer,
        otrosAnimalesMolestia: responses["78"]?.answer,
        nombreCompleto: responses["41"]?.answer || "",
        localidadVivienda: responses["45"]?.answer,
        descripcionApartamento: responses["46"]?.answer,
        precioHabitacion: precios,
        amoblada: amobladas,
        precioHabitacionServicios: responses["49"]?.answer === "SÍ",
        precioServiciosPromedio: parseInt(responses["50"]?.answer) || undefined,
        generoPreferencia: responses["51"]?.answer || "",
        generoApartamento: responses["54"]?.answer,
        frecuenciaInvitados: responses["52"]?.answer || "",
        rangoEdadRoomie: responses["66"]?.answer || "",
        ocupacion: responses["81"]?.answer || "",
        situacionBusqueda: responses["82"]?.answer || "",
        genero: responses["83"]?.answer || "",
        orden: responses["84"]?.answer || "",
        limpieza: responses["85"]?.answer || "",
        interaccionSocial: responses["86"]?.answer || "",
        preferenciaRuido: responses["88"]?.answer || "",
        celular: responses["91"]?.answer || "",
        direccion: responses["63"]?.answer,
        linkfotos: responses["92"]?.answer,
        plan: responses["94"]?.answer || "Estandar",
        fechaHabitacion: responses["68"]?.answer || Date.now,
        numberOfCompatibles: getInteresados(responses["91"]?.answer) || 17
    };
};