
const API_KEY = import.meta.env.VITE_JOTFORM_APIKEY;

export async function getSubmissions() {
    try {
        const response = await fetch(`https://api.jotform.com/user/forms?apiKey=`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submissions:", error);
        throw error;
    }
};

export async function editSubmission(questionId: string, newAnswer: string, submissionId: string) {
    try {
        const requestBody = {
                [questionId]: newAnswer,
            
        };
        const response = await fetch(`https://api.jotform.com/submission/${submissionId}?apiKey=${API_KEY}`, {
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


