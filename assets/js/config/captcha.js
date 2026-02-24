const CAPTCHA_CONFIG = {
    SITE_KEY: "6LfBdnEsAAAAAHfU-6T28FBsumBXK0rPOH1bas8N",
};

// Función que inicializa el captcha cuando grecaptcha está listo
function initCaptcha() {
    grecaptcha.render("captcha-container", {
        sitekey: CAPTCHA_CONFIG.SITE_KEY
    });
}

window.addEventListener("load", initCaptcha);