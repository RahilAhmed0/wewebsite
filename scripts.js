document.addEventListener("DOMContentLoaded", function () {
    // Animation for the video section using GSAP
    gsap.from("#video", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
    });

    // Simple form validation
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate email format using a regular expression
        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validation successful, you can proceed with form submission or other actions
        alert("Form submitted successfully!");
    });
});
