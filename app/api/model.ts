interface Submission {
    id: string;
    form_id: string;
    answers: Record<string, Submissionanswer>;
}

// Type for individual answer (you might want to expand this based on your needs)
interface Answer {
    // Add specific properties of an answer here
    [key: string]: any;
  }
  
  // Type for the answers object with numeric keys
  interface Answers {
    [key: number]: Answer;
  }
  
  // Main content interface
  interface FormSubmission {
    answers: Answers;
    created_at: string;
    flag: string;
    form_id: string;
    id: string;
    ip: string;
    new: string;
    notes: string;
    status: "ACTIVE" | "INACTIVE" | string; // Add other possible status values if needed
    updated_at: string;
  }

export interface JotFormResponse {
    content: FormSubmission;
    responseCode: number;
}

export interface JotFormErrorResponse {
    responseCode: number
}

export interface JotFormSingleResponse {
    content: Submission;
}

interface Submissionanswer {
    text: string;
    answer: string;
}

export interface RoomieInfo {
    cellphone: string;
    type: string;
    compatibles: Array<string>;
    puntajes: Array<number>;
    submission_id: string
}









