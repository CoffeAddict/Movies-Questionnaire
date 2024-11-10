/**
 * Fetch Questionnaire data.
 *
 * @returns {Promise<Object>} - A promise that resolves to the Questionnaire data.
 * @throws {Error} - Throws an error if the fetch fails or if the Questionnaire is not found.
 */
export const getQuestionnaire = async () => {

    const apiUrl = '/mock/questionnaire.json'

    try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Questionnaire:', error);
        throw error;
    }
};