document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page reload on form submit

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    console.log(user); // Logging the user data for demonstration
});
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    let user = { name, email, message };
    console.log(user); // Logging the validated data
});
