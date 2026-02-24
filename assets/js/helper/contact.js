(function () {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const btnText = document.getElementById("btn-text");
    const btnSpinner = document.getElementById("btn-spinner");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        console.log("Submit detectado");

        const captchaResponse = grecaptcha.getResponse();

        if (!captchaResponse || captchaResponse.length === 0) {
            window.AppModal.show({
                type: "error",
                title: "Verificación requerida",
                message: "Por favor confirma que no eres un robot antes de enviar el formulario."
            });
            return;
        }

        // Mostrar spinner
        btnText.textContent = "Enviando...";
        btnSpinner.classList.remove("hidden");
        submitBtn.disabled = true;

        try {
            const result = await emailjs.sendForm(
                EMAIL_CONFIG.SERVICE_ID,   //Service ID
                EMAIL_CONFIG.TEMPLATE_ID,   //Template ID
                form
            );

            console.log("Email enviado:", result);

            window.AppModal.show({
                type: "success",
                title: "Mensaje enviado",
                message: "Tu mensaje fue enviado correctamente. Nos pondremos en contacto contigo pronto."
            });
            form.reset();
            grecaptcha.reset();

        } catch (error) {
            console.error("Error al enviar:", error);
            window.AppModal.show({
                type: "error",
                title: "Error al enviar",
                message: "Ocurrió un problema al enviar el mensaje. Inténtalo nuevamente."
            });
        } finally {
            btnText.textContent = "Enviar Mensaje";
            btnSpinner.classList.add("hidden");
            submitBtn.disabled = false;
        }
    });
});