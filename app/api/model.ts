interface Submission {
    id: string;
    form_id: string;
    answers: Record<string, Submissionanswer>;
}

export interface JotFormResponse {
    content: Submission[];
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
    compatibles: Array<string>
    submission_id: string
}









