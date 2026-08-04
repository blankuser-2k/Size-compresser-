/*
=====================================
 Size Compressor
 Main JavaScript File
=====================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Size Compressor Loaded Successfully");

    // Add a click animation to all menu buttons
    const buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.96)";

            setTimeout(() => {
                this.style.transform = "";
            }, 150);
        });
    });
});
