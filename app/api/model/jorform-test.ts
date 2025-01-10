import type { JotFormResponse } from "../model";

export async function getSubmission(submission_id: string, apiKey: string): Promise<JotFormResponse> {
    try {
        const response = await fetch(`https://api.jotform.com/submission/${submission_id}?apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
            const dataSuccess: JotFormResponse = await response.json();
            return dataSuccess;
        
        
    } catch (error) {
        throw error;
    }
}