const formulaire = document.querySelector(".monFormulaire");

document.addEventListener("DOMContentLoaded", () => {
    formulaire.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstname = document.getElementById("nom").value.trim();
        const lastname = document.getElementById("prenom").value.trim();
        const age = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const confirmEmail = document.getElementById("confirmedEmail").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmedPassword").value.trim();
        const checkCGU = document.getElementById("acceptCGU").value.trim();

        const checkAll = ["nom", "prenom", "age", "email", "confirmedEmail", "password", "confirmedPassword", "acceptCGU"];
        
        const checkEmpty = checkAll.some(e => document.getElementById(e).value.trim() === "");

        if (checkEmpty) {
            alert("Veuillez remplir tout les champs de ce formulaire");
            return;
        }

        if (email !== confirmEmail) {
            const email = document.getElementById("email");
            const emailError = document.getElementById("emailError");
            
            email.classList.add("input-error");
            emailError.textContent = "L'email et la confirmation de l'email doivent être identiques.";
            emailError.style.display = "block";
            return;
        }
        
        if (password != confirmPassword) {
            const pass = document.getElementById("password");
            const passwordError = document.getElementById("passwordError");
            
            pass.classList.add("input-error");
            passwordError.textContent = "Le mot de passe et sa confirmation doivent être identiques.";
            passwordError.style.display = "block";
            return; 
        }

        if (password.length < 6) {
            const pass = document.getElementById("password");
            const passwordError = document.getElementById("passwordError");

            pass.classList.add("input-error");
            passwordError.textContent = "Votre mot de passe doit contenir au moins 6 caracteres";
            passwordError.style.display = "block";
            return;
        }

        if (age < 19 ) {
            const checkAge = document.getElementById("age");
            const ageError = document.getElementById("ageError");

            checkAge.classList.add("input-error");
            ageError.textContent = "Vous devez avoir plus de 18 ans pour accéder";
            ageError.style.display = "block";
            return;
        }

        const inputsFree = document.querySelectorAll(".input");
            inputsFree.forEach((i) => {
            i.classList.remove("input-error");
        });
        formulaire.submit();
    });
});