'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - main.js');

    // Configuración del tema
    const themeBtn = document.querySelector('[data-theme-btn]');
    const body = document.body;
    
    // Función para establecer el tema
    function setTheme(theme, updateStorage = true) {
        const isDark = theme === 'dark';
        
        // Actualizar clases del body
        body.classList.toggle('dark-theme', isDark);
        body.classList.toggle('light-theme', !isDark);
        
        // Actualizar estado del botón
        themeBtn?.classList.toggle('active', !isDark);
        
        // Actualizar el almacenamiento local si es necesario
        if (updateStorage) {
            localStorage.setItem('theme', theme);
        }
        
        // Disparar evento personalizado
        window.dispatchEvent(new CustomEvent('themechange', { 
            detail: { theme, isDark } 
        }));
    }
    
    // Aplicar tema inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'), false);
    
    // Escuchar cambios en el tema
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Sistema de traducción
    const translations = {
        en: {
            hero: 'Transforming Data into Strategic Decisions',
            about: 'About me',
            aboutNav: 'About',
            needInsights: 'Need Data Insights?',
            aboutText: 'I am Valentín, a data analyst passionate about transforming complex data into actionable insights. My experience includes statistical analysis, data visualization, and machine learning. I have worked with large volumes of data across various sectors, helping companies make data-driven decisions. My approach combines technical skills with a strong business understanding to deliver solutions that generate real value.',
            hireMe: 'Hire Me',
            downloadCV: 'Download CV',
            contact: 'Contact',
            send: 'Send',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            skills: 'My Skills',
            skillsTitle: 'What Do My Data Analysis Skills Include?',
            skillsText: 'I transform complex data into actionable insights using advanced analysis and visualization techniques, helping companies make data-driven decisions with these technologies.',
            portfolio: 'My Projects',
            portfolioTitle: 'Check out my data analysis projects!',
            portfolioText: 'Each project demonstrates my ability to transform data into valuable insights, using best practices in data analysis and visualization.',
            loadMore: 'Load More Projects',
            contactTitle: 'Have a data project? Let\'s talk!',
            contactText: 'Contact me and let\'s discuss how I can help you!',
            scroll: 'Scroll',
            home: 'Home',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contact',
            contactMe: 'Contact Me',
            featured: 'Featured',
            viewOnGitHub: 'View on GitHub',
            yearsExperience: 'Years of Experience',
            dataProjects: 'Data Projects',
            satisfiedClients: 'Satisfied Clients',
            skillsTab: 'Skills',
            toolsTab: 'Tools'
        },
        es: {
            hero: 'Transformando Datos en Decisiones Estratégicas',
            about: 'Sobre mí',
            aboutNav: 'Sobre mí',
            needInsights: '¿Necesitas Insights de tus Datos?',
            aboutText: 'Soy Valentín, un analista de datos apasionado por transformar datos complejos en insights accionables. Mi experiencia incluye análisis estadístico, visualización de datos, y machine learning. He trabajado con grandes volúmenes de datos en diversos sectores, ayudando a empresas a tomar decisiones basadas en datos. Mi enfoque combina habilidades técnicas con una fuerte comprensión del negocio para entregar soluciones que generan valor real.',
            hireMe: 'Contrátame',
            downloadCV: 'Descargar CV',
            contact: 'Contacto',
            send: 'Enviar',
            name: 'Nombre',
            email: 'Correo',
            phone: 'Teléfono',
            message: 'Mensaje',
            skills: 'Mis Habilidades',
            skillsTitle: '¿Qué incluyen mis habilidades de Análisis de Datos?',
            skillsText: 'Transformo datos complejos en insights accionables utilizando técnicas avanzadas de análisis y visualización, ayudando a las empresas a tomar decisiones basadas en datos con estas tecnologías.',
            portfolio: 'Mis Proyectos',
            portfolioTitle: '¡Mira mis proyectos de análisis de datos!',
            portfolioText: 'Cada proyecto demuestra mi capacidad para transformar datos en insights valiosos, utilizando las mejores prácticas de análisis de datos y visualización.',
            loadMore: 'Cargar Más Proyectos',
            contactTitle: '¿Tienes un proyecto de datos? ¡Hablemos!',
            contactText: '¡Contáctame y conversemos sobre cómo puedo ayudarte!',
            scroll: 'Desplazar',
            home: 'Inicio',
            skills: 'Habilidades',
            portfolio: 'Portafolio',
            contact: 'Contacto',
            contactMe: 'Contáctame',
            featured: 'Destacado',
            viewOnGitHub: 'Ver en GitHub',
            yearsExperience: 'Años de Experiencia',
            dataProjects: 'Proyectos de Datos',
            satisfiedClients: 'Clientes Satisfechos',
            skillsTab: 'Habilidades',
            toolsTab: 'Herramientas'
        }
    };

    // Función para actualizar el idioma
    function setLanguage(lang, updateStorage = true) {
        if (!translations[lang]) {
            console.error('Idioma no soportado:', lang);
            return;
        }

        // Actualizar el selector de idioma
        const langSelect = document.getElementById('lang');
        if (langSelect && langSelect.value !== lang) {
            langSelect.value = lang;
        }

        // Actualizar textos
        const elements = {
            '.hero-title': 'hero',
            '.section-subtitle': 'about',
            '.navbar-link[href="#about"]': 'aboutNav',
            '.section-title': 'needInsights',
            '.section-text': 'aboutText',
            '.about .btn-primary': 'hireMe',
            '.about .btn-secondary': 'downloadCV',
            'label[for="name"]': 'name',
            'label[for="email"]': 'email',
            'label[for="phone"]': 'phone',
            'label[for="message"]': 'message',
            '.contact-form .btn-primary': 'send',
            '.skills .section-subtitle': 'skills',
            '.skills .section-title': 'skillsTitle',
            '.skills .section-text': 'skillsText',
            '.project .section-subtitle': 'portfolio',
            '.project .section-title': 'portfolioTitle',
            '.project .section-text': 'portfolioText',
            '.load-more': 'loadMore',
            '.contact .section-title': 'contactTitle',
            '.contact .section-text': 'contactText',
            '.scroll-down': 'scroll',
            '.navbar-link[href="#home"]': 'home',
            '.navbar-link[href="#skills"]': 'skills',
            '.navbar-link[href="#portfolio"]': 'portfolio',
            '.navbar-link[href="#contact"]': 'contact',
            '.hero .btn-primary': 'contactMe',
            '.project-card.featured::after': 'featured',
            '.card-link': 'viewOnGitHub',
            '.stats-card:nth-child(1) .card-title strong': 'yearsExperience',
            '.stats-card:nth-child(2) .card-title strong': 'dataProjects',
            '.stats-card:nth-child(3) .card-title strong': 'satisfiedClients',
            '.toggle-btn:first-child': 'skillsTab',
            '.toggle-btn:last-child': 'toolsTab'
        };

        for (const [selector, key] of Object.entries(elements)) {
            const element = document.querySelector(selector);
            if (element && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        }

        // Actualizar el almacenamiento local si es necesario
        if (updateStorage) {
            localStorage.setItem('language', lang);
        }

        // Disparar evento personalizado
        window.dispatchEvent(new CustomEvent('languagechange', { 
            detail: { language: lang } 
        }));
    }

    // Configurar el idioma inicial
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('language');
    const initialLang = savedLang || (translations[browserLang] ? browserLang : 'es');
    setLanguage(initialLang, false);

    // Escuchar cambios en el selector de idioma
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }

    //Toggle Function

    const elemToggleFunc = function(elem) { elem.classList.toggle('active'); }

    // Header Sticky & Go-Top

    const header = document.querySelector('[data-header]');
    const goTopBtn = document.querySelector('[data-go-top]');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', function(){
        if(window.scrollY >= 10) {
            header.classList.add('active');
            goTopBtn.classList.add('active');
        } else {
            header.classList.remove('active');
            goTopBtn.classList.remove('active');
        }
        // Ocultar header al hacer scroll hacia abajo, mostrar al subir
        if(window.scrollY > lastScrollY && window.scrollY > 80) {
            header.classList.add('hide');
        } else {
            header.classList.remove('hide');
        }
        lastScrollY = window.scrollY;
    });

    // Mobile Menu

    const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
    const navbar = document.querySelector('[data-navbar]');

    navToggleBtn.addEventListener('click', function() { 
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
    });

    // Cerrar el menú de navegación al hacer clic en los enlaces
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                elemToggleFunc(navToggleBtn);
                elemToggleFunc(navbar);
                elemToggleFunc(document.body);
            }
        });
    });

    // Manejo de botones en la sección About
    const downloadCVBtn = document.querySelector('.about .btn-secondary');
    const hireMeBtn = document.querySelector('.about .btn-primary');

    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', function() {
            alert('Función de descarga de CV activada. Añade tu CV para descarga.');
        });
    }

    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', function() {
            window.location.href = '#contact';
        });
    }

    // Skills Toggling Button

    const toggleBtnBox = document.querySelector('[data-toggle-box]');
    const toggleBtns = document.querySelectorAll('[data-toggle-btn]');
    const skillsBox = document.querySelector('[data-skills-box]');

    for(let i = 0; i < toggleBtns.length; i++){
        toggleBtns[i].addEventListener('click', function(){
            elemToggleFunc(toggleBtnBox);
            
            // Ajustar posición y tamaño del toggle según el idioma
            const btnWidth = this.offsetWidth;
            const togglePosition = i === 0 ? 5 : toggleBtnBox.offsetWidth - btnWidth - 5;
            
            // Aplicar los cambios de estado a los botones
            for(let j = 0; j < toggleBtns.length; j++) {
                elemToggleFunc(toggleBtns[j]);
            }
            
            elemToggleFunc(skillsBox);
        });
    }
    
    // Manejar ajustes del toggle cuando cambia el idioma
    window.addEventListener('languagechange', function() {
        // Permitir que el DOM se actualice primero
        setTimeout(() => {
            // Ajustar dimensiones si es necesario
            const activeIndex = toggleBtnBox.classList.contains('active') ? 1 : 0;
            const activeBtn = toggleBtns[activeIndex];
            
            // Si hay cambios significativos en el ancho de los botones, ajustar el CSS
            if (activeBtn.offsetWidth > 110) {
                document.documentElement.style.setProperty('--toggle-btn-width', `${activeBtn.offsetWidth + 10}px`);
            }
        }, 50);
    });

    // Botón de cargar más proyectos
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('Función para cargar más proyectos. Aquí puedes implementar la carga de proyectos adicionales.');
        });
    }


    // Detectar dispositivo y redirigir al hacer clic en el botón de correo
    document.querySelector('.contact-social-link[href*="mail.google.com"]').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Detectar dispositivo móvil
        const email = "valepadi11@gmail.com";

        if (isMobile) {
            // Redirigir a la aplicación de correo en dispositivos móviles
            window.location.href = `mailto:${email}`;
        } else {
            // Redirigir a Gmail en el navegador en computadoras
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
        }
    });
});