// API
//const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


// Step 1
const API_ENDPOINT = 'https://yesno.wtf/api';
const btn = document.getElementById('button');
const answer = document.getElementById('answer');
const input = document.getElementById('input');


const fetchAnswer = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        const answer = await response.json();
        return answer;
    } catch (err) {
        console.error(err);
    }
};

btn.addEventListener('click', async () => {
    const result = await fetchAnswer();

    answer.innerHTML = "<p>" + result.answer + "</p>";

    // After 3000 milliseconds (3 seconds)
    // the answer will be emptied
    setTimeout(function() {
        input.value = "";
        answer.innerHTML = "";
    }, 3000);
});
