export type RoomieArrendador = {
    submission_id: string;
    edad: number;
    universidad: string;
    toleranciaInvitados: string;
    numeroRommies: number | undefined;
    descripcionRommieIdeal: string;
    animalesMolestia: string | undefined;
    viviraConMascota: string;
    nombreCompleto: string;
    localidadVivienda: Array<string>;
    descripcionApartamento: string | undefined;
    precioHabitacion: number;
    amoblada: string;
    precioHabitacionServicios: boolean | undefined;
    precioServiciosPromedio: number | undefined;
    generoPreferencia: string;
    generoApartamento: string;
    frecuenciaInvitados: string;
    rangoEdadRoomie: string;
    ocupacion: string;
    situacionBusqueda: string;
    genero: string;
    orden: string;
    limpieza: string;
    interaccionSocial: string;
    preferenciaRuido: string;
    celular: string;
    direccion: string | undefined;
    linkfotos: string | undefined;
};

export const createRoomieArrendador = (responses: Record<string, any>): RoomieArrendador => {
    const id = responses["id"]
    responses = responses["answers"]
    return {
        submission_id: id,
        edad: parseInt(responses["17"]?.answer) || 0,
        universidad: responses["21"]?.answer || "",
        toleranciaInvitados: responses["31"]?.answer || "",
        numeroRommies: parseInt(responses["33"]?.answer) || undefined,
        descripcionRommieIdeal: responses["37"]?.answer || "",
        animalesMolestia: responses["40"]?.answer,
        viviraConMascota: responses["87"]?.answer,
        nombreCompleto: responses["41"]?.answer || "",
        localidadVivienda: responses["45"]?.answer,
        descripcionApartamento: responses["46"]?.answer,
        precioHabitacion: parseInt(JSON.parse(responses["75"]?.answer)[0].Precio),
        amoblada: JSON.parse(responses["75"]?.answer)[0].Amoblada,
        precioHabitacionServicios: responses["49"]?.answer === "Sí",
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
        linkfotos: responses["92"]?.answer
    };
};