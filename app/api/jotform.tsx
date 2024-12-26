import type { Interface } from "readline";

const API_KEY = process.env.JOTFORM_APIKEY


export async function getSubmissions() {
    try {
        const response = await fetch(`https://api.jotform.com/user/forms?apiKey=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submissions:", error);
        throw error;
    }
}
//Metodo para editar la solicitud, podemos adaptarlo posteriormente a como lo vamos a usar
export async function editSubmission(submissionData: Interface, submission_id: string) {
    try {
        const response = await fetch(`https://api.jotform.com/submission/${submission_id}?apiKey=${API_KEY}`, {
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


