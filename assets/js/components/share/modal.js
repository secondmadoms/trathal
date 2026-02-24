class Modal {
    constructor() {
        this.create();
    }

    create() {
        this.modal = document.createElement("div");
        this.modal.id = "app-modal";
        this.modal.className = `
            fixed inset-0 bg-black/50 backdrop-blur-sm 
            flex items-center justify-center 
            opacity-0 pointer-events-none 
            transition-opacity duration-300 z-50
        `;

        this.modal.innerHTML = `
            <div id="modal-content"class="relative bg-[#091836] text-white rounded-2xl p-8 max-w-md w-full mx-4 transform scale-95 transition-transform duration-300">
                
                <!-- Botón X -->
                <button id="modal-x"
                    class="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl font-bold">
                    &times;
                </button>

                <div id="modal-icon" class="flex justify-center mb-4"></div>
                <h3 id="modal-title" class="text-xl font-bold text-center mb-2"></h3>
                <p id="modal-message" class="text-gray-300 text-center mb-6"></p>

                <!-- Botón Cerrar -->
                <div class="flex justify-center">
                    <button id="modal-close" 
                        class="bg-[#009c8c] hover:bg-[#007a6e] px-6 py-2 rounded-lg transition">
                        Cerrar
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);

        // Cerrar con botón "Cerrar"
        document.getElementById("modal-close")
            .addEventListener("click", () => this.hide());

        // Cerrar con botón "X"
        document.getElementById("modal-x")
            .addEventListener("click", () => this.hide());

        // Cerrar haciendo click fuera del contenido
        this.modal.addEventListener("click", (e) => {
            if (e.target === this.modal) {
                this.hide();
            }
        });
    }

    show({ type = "success", title, message }) {
        const iconContainer = document.getElementById("modal-icon");
        const content = document.getElementById("modal-content");

        const successIcon = `
            <div class="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 13l4 4L19 7"/>
                </svg>
            </div>
        `;

        const errorIcon = `
            <div class="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </div>
        `;

        iconContainer.innerHTML = type === "success" ? successIcon : errorIcon;

        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-message").textContent = message;

        this.modal.classList.remove("opacity-0", "pointer-events-none");
        content.classList.remove("scale-95");
    }

    hide() {
        const content = document.getElementById("modal-content");
        this.modal.classList.add("opacity-0", "pointer-events-none");
        content.classList.add("scale-95");
    }
}

window.AppModal = new Modal();