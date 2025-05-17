// Archivo de debug para detectar problemas
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de logging
    const DEBUG = true;
    const log = (message, data) => {
        if (DEBUG) {
            console.log(`[DEBUG] ${message}:`, data);
        }
    };

    // Monitorear cambios en el tema
    const themeBtn = document.querySelector('[data-theme-btn]');
    if (themeBtn) {
        log('Estado inicial del tema', {
            'isDark': document.body.classList.contains('dark-theme'),
            'isLight': document.body.classList.contains('light-theme'),
            'buttonActive': themeBtn.classList.contains('active')
        });

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    log('Cambio en el tema detectado', {
                        'isDark': document.body.classList.contains('dark-theme'),
                        'isLight': document.body.classList.contains('light-theme'),
                        'buttonActive': themeBtn.classList.contains('active')
                    });
                }
            });
        });

        observer.observe(themeBtn, { attributes: true });
        observer.observe(document.body, { attributes: true });
    } else {
        console.error('No se encontró el botón de tema');
    }

    // Monitorear cambios en el idioma
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        log('Estado inicial del idioma', {
            'selectedValue': langSelect.value,
            'savedLanguage': localStorage.getItem('language')
        });

        langSelect.addEventListener('change', function(e) {
            log('Cambio de idioma detectado', {
                'oldValue': this.dataset.previousValue || 'no-value',
                'newValue': this.value,
                'savedLanguage': localStorage.getItem('language')
            });
            this.dataset.previousValue = this.value;
        });
    } else {
        console.error('No se encontró el selector de idioma');
    }
});
