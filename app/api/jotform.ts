import type { JotFormResponse, RoomieInfo } from "./model";
import { createRoomie } from "./model/roomie";
import { createRoomieArrendador, type RoomieArrendador } from "./model/roomieArrendador";


export async function editSubmission(questionId: string, newAnswer: string, submissionId: string) {
    try {
        const requestBody = {
            [questionId]: newAnswer,
        };
        const response = await fetch(`https://api.jotform.com/submission/${submissionId}?apiKey=${"4467333b321a35452040e22280e0d7aa"}`, {
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

export async function getSubmission(submission_id: string): Promise<JotFormResponse> {
    try {
        const response = await fetch(`https://api.jotform.com/submission/${submission_id}?apiKey=${"4467333b321a35452040e22280e0d7aa"}`);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const data: JotFormResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submission:", error);
        throw error;
    }
}

export async function getRoomie(celular: string) {
    const roomieInfo: RoomieInfo = await getUserInfo(celular)
    const submission = await getSubmission(roomieInfo.submission_id)
    const roomie = createRoomie(await submission)
    let arrendadores: Array<RoomieArrendador> = []
    for (let i = 0; i < roomieInfo.compatibles.length; i++) {
        const roomieArrendador = await getRoomieArrendador(roomieInfo.compatibles[i])
        roomieArrendador.puntaje = roomieInfo.puntajes[i]
        arrendadores.push(roomieArrendador)
    }
    roomie.compatibles = arrendadores
    console.log(roomie)
    return roomie
}

export async function getRoomieArrendador(celular: string) {
    const roomieArrendadorInfo = await getUserInfo(celular)
    const submission = await getSubmission(roomieArrendadorInfo.submission_id)
    const roomieArrendador = createRoomieArrendador(submission["content"])
    return roomieArrendador
}

async function getUserInfo(cellphone: string): Promise<RoomieInfo> {
    const response = await fetch(`http://3.17.141.84:80/user/${cellphone}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: RoomieInfo = await response.json();
    return data;
};

