// Archivo de debug para detectar problemas
document.addEventListener('DOMContentLoaded', function() {
    console.log('Detectando problemas:');
    console.log('Elemento de selección de idioma:', document.getElementById('lang'));
    console.log('Elemento de tema:', document.querySelector('[data-theme-btn]'));
    
    // Probar cambio de idioma
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        console.log('Valor actual del selector de idioma:', langSelect.value);
        
        // Agregar un listener temporal para probar
        langSelect.addEventListener('change', function() {
            console.log('Cambio detectado en el selector de idioma:', this.value);
        });
    }
    
    // Probar cambio de tema
    const themeBtn = document.querySelector('[data-theme-btn]');
    if (themeBtn) {
        console.log('Estado actual del botón de tema:', themeBtn.classList.contains('active'));
        
        // Agregar un listener temporal para probar
        themeBtn.addEventListener('click', function() {
            console.log('Clic detectado en botón de tema');
            console.log('Nuevo estado:', this.classList.contains('active'));
        });
    }
}); 
