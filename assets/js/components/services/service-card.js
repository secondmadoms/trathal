function renderServices() {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = servicesData.map(service => `
        <div class="group h-72 cursor-pointer w-full md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)]" style="perspective: 1000px">
            <div class="relative w-full h-full" style="transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.4,0,0.2,1);" data-flip>
                <!-- Front -->
                <div class="absolute inset-0 rounded-2xl bg-white border border-gray-100 px-8 py-6 flex flex-col items-center justify-center gap-4 shadow-sm group-hover:shadow-[0_8px_32px_rgba(0,156,140,0.15)] transition-shadow duration-300" style="backface-visibility: hidden">
                    <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#009c8c] to-[#007a6e] flex items-center justify-center shadow-[0_4px_20px_rgba(0,156,140,0.4)]">
                        <img src="${service.icon}" class="w-12 h-12 brightness-0 invert" alt="Icono"/>
                    </div>
                    <h3 class="font-semibold text-[#051020] text-sm text-center leading-snug">${service.title}</h3>
                </div>
                <!-- Back -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#051020] to-[#091836] border border-[#1a2d5a] p-8 flex flex-col justify-center overflow-hidden" style="backface-visibility: hidden; transform: rotateY(180deg)">
                    <div class="absolute -top-5 -left-5 w-28 h-28 rounded-full bg-[#009c8c] opacity-10 blur-xl"></div>
                    <div class="w-8 h-0.5 bg-[#009c8c] mb-3 rounded-full"></div>
                    <h3 class="font-bold text-white text-lg leading-snug mb-3">${service.title}</h3>
                    <p class="text-white/75 text-sm leading-relaxed">${service.description}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Flip logic
    container.querySelectorAll('[data-flip]').forEach(inner => {
        const card = inner.parentElement;
        card.addEventListener('mouseenter', () => {
            if (!window.matchMedia('(hover: none)').matches)
                inner.style.transform = 'rotateY(180deg)';
        });
        card.addEventListener('mouseleave', () => {
            if (!window.matchMedia('(hover: none)').matches)
                inner.style.transform = 'rotateY(0deg)';
        });
        card.addEventListener('click', () => {
            if (window.matchMedia('(hover: none)').matches) {
                const flipped = inner.style.transform === 'rotateY(180deg)';
                inner.style.transform = flipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', renderServices);