// js/main.js

// Funciones de manejo de modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación...');
    console.log('📦 Datos de productos:', productsData);
    
    try {
        // Renderizar las cards de productos
        renderProductCards(productsData, 'products-container');
        console.log('✅ Cards renderizadas');
        
        // Renderizar los modales
        renderModals(productsData);
        console.log('✅ Modales renderizados');
        
        // Configurar event listeners para cerrar modales
        setupModalEventListeners();
        console.log('✅ Event listeners configurados');
        
        console.log('✨ Aplicación cargada exitosamente');
    } catch (error) {
        console.error('❌ Error cargando productos:', error);
    }
});

// Configurar event listeners para modales
function setupModalEventListeners() {
    // Cerrar modal al hacer clic fuera de él
    document.querySelectorAll('[id^="modal-"]').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this.id);
            }
        });
    });

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('[id^="modal-"]').forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    closeModal(modal.id);
                }
            });
        }
    });
}