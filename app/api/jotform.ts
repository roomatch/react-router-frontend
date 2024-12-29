import type { Interface } from "readline";
import { findOrAddUser, getUserInfo, getUsersInfo, updateUserCompatibles } from "./mongodb";
import { createRoomie, type Roomie } from "./model/roomie";
import type { JotFormResponse } from "./model";
import { createRoomieArrendador, type RoomieArrendador } from "./model/roomieArrendador";


export async function getSubmissions(): Promise<JotFormResponse> {
    try {
        const response = await fetch(`https://api.jotform.com/form/243607063936662/submissions?apiKey=${API_KEY}`);
        const data: JotFormResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submissions:", error);
        throw error;
    }
export async function editSubmission(questionId: string, newAnswer: string, submissionId: string) {
    try {
        const requestBody = {
                [questionId]: newAnswer,
            
        };
        const response = await fetch(`https://api.jotform.com/submission/${submissionId}?apiKey=${'a2899dc07c24bd4216e7eef159bd4198'}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Submission updated successfully:", result);
        return result;
    } catch (error) {
        console.error("Error updating submission:", error);
        throw error;
    }
}

async function getSubmission(submission_id: string): Promise<JotFormResponse> {
    try {
        const response = await fetch(`https://api.jotform.com/submission/${submission_id}?apiKey=${API_KEY}`);
        const data: JotFormResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submission:", error);
        throw error;
    }
}

export async function getRoomie(celular: string) {
    const roomieInfo = await getUserInfo(celular)
    const submission = getSubmission(roomieInfo.submission_id)
    const roomie = createRoomie(submission)
    return roomie
}

export async function getRoomieArrendador(celular: string) {
    const roomieArrendadorInfo = await getUserInfo(celular)
    const submission = getSubmission(roomieArrendadorInfo.submission_id)
    const roomieArrendador = createRoomieArrendador(submission)
    return roomieArrendador
}

async function updateMatrix() {
    try {
        const submissions = await getSubmissions()
        const currentUsersInfo = await getUsersInfo()
        let roomies: Roomie[] = []
        let roomiesArrendadores: RoomieArrendador[] = []
        submissions.content.forEach((submission) => {
            console.log(`Submission ID: ${submission.id}`);
            if (submission["answers"]["82"].answer == "Solo busco habitación, pero igual quiero tener buenos roomies") {
                const roomie = createRoomie(submission)
                roomies.push(roomie)
                console.log(roomie)
            } else {
                const roomieArrendador = createRoomieArrendador(submission)
                roomiesArrendadores.push(roomieArrendador)
                console.log(roomieArrendador)
            }
        });
        for (const roomie of roomies) {
            await findOrAddUser(roomie.celular, "roomie", [], "");
            let compatibles = []
            for (const roomieArrendador of roomiesArrendadores) {
                await findOrAddUser(roomieArrendador.celular, "roomieArrendador", [], "")
                let compatibilidad = 0
                //Check localidad
                const roomieLocalidadesSet = new Set(roomie.localidadesBuscadas);
                const hasCommonElement = roomieArrendador.localidadVivienda.some(localidad =>
                    roomieLocalidadesSet.has(localidad)
                );
                if (hasCommonElement) compatibilidad += 50;
                //Check presupuesto
                if (roomie.rangoPresupuestoMin > roomieArrendador.precioHabitacion &&
                    roomie.rangoPresupuestoMax <= roomieArrendador.precioHabitacion) compatibilidad += 30
                //Check amoblada

                //Check genero
                if (roomie.generoPreferencia = "Sí, solo quiero vivir con hombres") {
                    if (roomieArrendador.genero != "Masculino" && roomieArrendador.generoApartamento != "Hombres") compatibilidad = 0
                } else if (roomie.generoPreferencia = "Sí, solo quiero vivir con mujeres") {
                    if (roomieArrendador.genero != "Femenino" && roomieArrendador.generoApartamento != "Mujeres") compatibilidad = 0
                } else {
                    compatibilidad += 20
                }
                //Check edad
                if (roomieArrendador.edad < roomie.rangoEdadRoomieMin || roomieArrendador.edad >= roomie.rangoEdadRoomieMax) compatibilidad = 0
                //Check animales
                if (roomie.animalesMolestia == "SÍ" && roomieArrendador.viviraConMascota == "Sí") compatibilidad = 0;
                //Check orden
                const mapeoOrden = {

                }
                //Check limpieza
                const mapeoLimpieza = {

                }
                //Check ruido
                const mapeoRuido = {

                }

                if (compatibilidad > 50) compatibles.push(roomieArrendador.celular)
            }
            await updateUserCompatibles(roomie.celular, compatibles)
        }
    } catch (error) {
        console.error("Error fetching submissions:", error);
    }
}
