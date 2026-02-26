class ProductCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col" 
                data-category="${this.data.category}"
                onclick="openModal('${this.data.modalId}')">
                
                <div class="relative">
                    <img src="${this.data.image}" 
                        class="w-full h-64 object-cover object-top" 
                        alt="${this.data.title}"/>
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 class="text-2xl font-bold text-white">${this.data.title}</h3>
                    </div>
                </div>
                
                <div class="p-6 flex-1 flex flex-col">
                    <p class="text-gray-600 mb-4 leading-relaxed line-clamp-2 flex-1">
                        ${this.data.description}
                    </p>
                    
                    <div class="flex items-center justify-between text-sm text-gray-500">
                        <span class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                            ${this.data.categoriesCount} categorías de productos
                        </span>
                        <span class="text-[#009c8c] font-semibold flex items-center gap-1">
                            Ver más
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        `;
    }
}

// Función para renderizar todas las cards
function renderProductCards(cardsData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id '${containerId}' not found`);
        return;
    }
    
    const cardsHTML = cardsData.map(data => new ProductCard(data).render()).join('');
    container.innerHTML = cardsHTML;
}

// ========================================
// FUNCIÓN GENÉRICA PARA GENERAR MODALES
// ========================================
function renderModals(productsData) {
    const modalsContainer = document.getElementById('modals-container');
    if (!modalsContainer) {
        console.error('Modals container not found');
        return;
    }

    // Usar la misma función para TODOS los productos
    const modalsHTML = productsData.map(product => generateProductModal(product)).join('');
    modalsContainer.innerHTML = modalsHTML;
}

// FUNCIÓN GENÉRICA que funciona para CUALQUIER producto - LAYOUT UNA COLUMNA
function generateProductModal(product) {
    // Generar líneas de productos
    const productLinesHTML = product.productLines.map(line => `
        <div>
            <p class="text-xs font-semibold text-[#009c8c] uppercase tracking-wide mb-2">${line.name}</p>
            <div class="flex flex-wrap gap-2">
                ${line.products.map(p => `
                    <span class="bg-${line.color}-50 text-${line.color}-700 text-xs font-medium px-3 py-1.5 rounded-md border border-${line.color}-200">${p}</span>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Generar beneficios (SOLO si existen)
    const benefitsHTML = product.benefits ? `
        <div class="bg-[#009c8c]/5 rounded-lg p-4 border border-[#009c8c]/20">
            <h4 class="text-sm font-bold text-[#051020] mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-[#009c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Beneficios principales
            </h4>
            <ul class="space-y-2 text-sm text-gray-700">
                ${product.benefits.map(benefit => `
                    <li class="flex items-start gap-2">
                        <span class="text-[#009c8c] mt-0.5">•</span>
                        <span>${benefit}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    ` : '';

    // Generar presentaciones (SOLO si existen)
    const presentationsHTML = product.presentations && product.presentations.length > 0 ? `
        <div class="border-t border-gray-100 pt-6">
            <h4 class="text-base font-bold text-[#051020] mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-[#009c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
                Presentaciones disponibles
            </h4>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                ${generatePresentations(product.presentations)}
            </div>
        </div>
    ` : '';

    // Retornar el HTML del modal con layout de UNA COLUMNA
    return `
        <div id="${product.modalId}" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
            <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <!-- Header del modal -->
                <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                    <h2 class="text-2xl font-bold text-[#051020]">${product.title}</h2>
                    <button onclick="closeModal('${product.modalId}')" class="text-gray-400 hover:text-gray-600 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <!-- Contenido del modal - UNA COLUMNA -->
                <div class="p-6">
                    <!-- 1. Imagen -->
                    <img src="${product.image}" 
                        class="w-full h-96 object-cover object-top rounded-lg mb-6" 
                        alt="${product.title}"/>

                    <!-- 2. Descripción -->
                    <div class="bg-gray-50 p-4 rounded-lg border border-teal-500 mb-6">
                        <h4 class="text-sm font-bold text-[#051020] mb-2 flex items-center gap-2">
                            <svg class="w-4 h-4 text-[#009c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            Descripción
                        </h4>
                        <p class="text-gray-600 text-sm leading-relaxed">${product.fullDescription}</p>
                    </div>

                    <!-- 3. Línea de productos -->
                    <div class="mb-6">
                        <h4 class="text-base font-bold text-[#051020] mb-4 flex items-center gap-2">
                            <svg class="w-5 h-5 text-[#009c8c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                            Línea de productos
                        </h4>
                        <div class="space-y-3">
                            ${productLinesHTML}
                        </div>
                    </div>

                    <!-- 4. Beneficios (solo si existen) -->
                    ${benefitsHTML ? `<div class="mb-6">${benefitsHTML}</div>` : ''}

                    <!-- 5. Presentaciones (solo si existen) -->
                    ${presentationsHTML}
                </div>

                <!-- Footer del modal -->
                <div class="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
                    <button onclick="closeModal('${product.modalId}')" class="w-full bg-[#009c8c] text-white py-3 rounded-lg hover:bg-[#007a6e] transition-colors font-semibold">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Función helper para generar SVG de presentaciones
function generatePresentations(presentations) {
    const icons = {
        gallon: `
            <svg class="w-8 h-8 text-[#009c8c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 3 h4 v1.5 a1 1 0 0 0 1 1 h1 v14.5 a2 2 0 0 1 -2 2 H10 a2 2 0 0 1 -2 -2 V5.5 h1 a1 1 0 0 0 1 -1 z" stroke-width="2" stroke-linejoin="round"/>
                <circle cx="12" cy="3.5" r="0.5" fill="currentColor"/>
                <path d="M8 10 h8" stroke-width="1.5" opacity="0.5"/>
                <path d="M8 15 h8" stroke-width="1.5" opacity="0.5"/>
                <rect x="15" y="6" width="1.5" height="3" rx="0.5" fill="currentColor" opacity="0.7"/>
            </svg>
        `,
        paila: `
            <svg class="w-8 h-8 text-[#009c8c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 3 h6 v2 h-6 z" stroke-width="2" stroke-linejoin="round"/>
                <path d="M10 5 L8 8 L7 20 a2 2 0 0 0 2 2 h6 a2 2 0 0 0 2 -2 L16 8 L14 5" stroke-width="2" stroke-linejoin="round"/>
                <path d="M8 12 h8" stroke-width="1.5" opacity="0.5"/>
                <path d="M8.5 16 h7" stroke-width="1.5" opacity="0.5"/>
                <circle cx="12" cy="4" r="0.8" fill="currentColor"/>
            </svg>
        `,
        carboya: `
            <svg class="w-8 h-8 text-[#009c8c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 8 L4 20 a1 1 0 0 0 1 1 h14 a1 1 0 0 0 1 -1 L18 8" stroke-width="2" stroke-linejoin="round"/>
                <path d="M5 8 h14" stroke-width="2" stroke-linecap="round"/>
                <path d="M8 8 V6 a1 1 0 0 1 1 -1 h6 a1 1 0 0 1 1 1 v2" stroke-width="2" stroke-linejoin="round"/>
                <path d="M6 13 h12" stroke-width="1.5" opacity="0.5"/>
                <path d="M5.5 17 h13" stroke-width="1.5" opacity="0.5"/>
            </svg>
        `,
        tambor: `
            <svg class="w-8 h-8 text-[#009c8c] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <ellipse cx="12" cy="5" rx="7" ry="2" stroke-width="2"/>
                <ellipse cx="12" cy="19" rx="7" ry="2" stroke-width="2"/>
                <path d="M5 5 L5 19" stroke-width="2" stroke-linecap="round"/>
                <path d="M19 5 L19 19" stroke-width="2" stroke-linecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke-width="2"/>
                <line x1="5" y1="9" x2="19" y2="9" stroke-width="1.5" opacity="0.5"/>
                <line x1="5" y1="15" x2="19" y2="15" stroke-width="1.5" opacity="0.5"/>
            </svg>
        `
    };

    return presentations.map(pres => `
        <div class="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-[#009c8c]/5 transition-colors">
            ${icons[pres.icon] || icons.tambor}
            <span class="text-sm font-medium text-gray-700">${pres.name}</span>
            <span class="text-xs text-gray-500">${pres.capacity}</span>
        </div>
    `).join('');
}