const API_KEY = process.env.JOTFORM_APIKEY


export async function getSubmissions() {
    const URL = `https://api.jotform.com/user/forms?apiKey=${API_KEY}`


    let request = await fetch(URL)

    try {

        const response = await fetch(URL);


        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching submissions:", error);
        throw error;
    }
}

