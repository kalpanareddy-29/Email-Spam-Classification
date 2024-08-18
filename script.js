document.getElementById('classificationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailText = document.getElementById('emailText').value;
    
    // Here you would normally send the data to your server using fetch or AJAX.
    // For this example, we'll simulate the response.

    if (emailText.toLowerCase().includes("win money") || emailText.toLowerCase().includes("click here")) {
        displayResult("This email is classified as SPAM.");
    } else {
        displayResult("This email is classified as NOT SPAM.");
    }
});

function displayResult(message) {
    document.getElementById('result').innerText = message;
}
