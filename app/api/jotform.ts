
//const API_KEY = process.env.JOTFORM_APIKEY


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


