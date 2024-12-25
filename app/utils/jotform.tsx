const API_KEY = "a2899dc07c24bd4216e7eef159bd4198"
import { useEffect, useState } from "react";


export async function getSubmissions() {
    const URL = `https://api.jotform.com/user/forms?apiKey=${API_KEY}`
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submissions:", error);
        throw error;
    }
}
//Metodo para editar la solicitud, podemos adaptarlo posteriormente a como lo vamos a usar
export async function editSubmission(submissionData: any, submission_id: any) {
    const url = `https://api.jotform.com/submission/${submission_id}?apiKey=${API_KEY}`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submissionData),
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


