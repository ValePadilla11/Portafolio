'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - main.js');
    
    // Selector de idioma
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            const lang = this.value;
            console.log('Cambiando idioma a:', lang);
            
            if (lang === 'en') {
                document.querySelector('.hero-title').textContent = 'Transforming Data into Strategic Decisions';
            } else {
                document.querySelector('.hero-title').textContent = 'Transformando Datos en Decisiones Estratégicas';
            }
            
            // Guardar preferencia
            localStorage.setItem('language', lang);
        });
        
        // Establecer idioma inicial
        const savedLang = localStorage.getItem('language') || 'es';
        langSelect.value = savedLang;
        // Disparar evento change para actualizar textos
        const event = new Event('change');
        langSelect.dispatchEvent(event);
    } else {
        console.error('No se encontró el selector de idioma');
    }
    
    // Botón de tema
    const themeBtn = document.querySelector('[data-theme-btn]');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            // Toggle clase active
            this.classList.toggle('active');
            
            // Cambiar tema
            if (this.classList.contains('active')) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else {
                document.body.classList.add('dark-theme');
                document.body.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Establecer tema inicial
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            themeBtn.classList.add('active');
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            themeBtn.classList.remove('active');
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        }
    } else {
        console.error('No se encontró el botón de tema');
    }
    
    // Language Toggle Function
    const languageSelect = document.getElementById('lang');
    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contact',
            heroTitle: 'Transforming Data into Strategic Decisions',
            contactUs: 'Contact Me',
            aboutMe: 'About me',
            needProduct: 'Need Data Insights?',
            aboutText: 'I am Valentín, a data analyst passionate about transforming complex data into actionable insights. My experience includes statistical analysis, data visualization, and machine learning. I have worked with large volumes of data across various sectors, helping companies make data-driven decisions. My approach combines technical skills with a strong business understanding to deliver solutions that generate real value.',
            hireMe: 'Hire Me',
            downloadCV: 'Download CV',
            mySkills: 'My Skills',
            skillsTitle: 'What Do My Data Analysis Skills Include?',
            skillsText: 'I use these technologies and tools to extract, transform and analyze data, creating impactful visualizations and predictive models that help businesses make better decisions.',
            myWorks: 'My Projects',
            worksTitle: 'Check out my data analysis projects!',
            worksText: 'Each project demonstrates my ability to transform data into valuable insights, using best practices in data analysis and visualization.',
            loadMore: 'Load More Projects',
            contactTitle: 'Have a data project? Let\'s talk!',
            contactText: 'I\'m available for data analysis, visualization, and machine learning projects. Contact me and let\'s discuss how I can help you!',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            send: 'Send',
            yearsExp: 'Years of Experience',
            completedProjects: 'Data Projects',
            happyClients: 'Happy Clients',
            address: 'Address:',
            phoneTitle: 'Phone:',
            emailTitle: 'Email:',
            scroll: 'Scroll',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            kaggle: 'Kaggle',
            twitter: 'Twitter',
            skills: 'Skills',
            tools: 'Tools',
            allRights: 'All rights reserved',
            goToTop: 'Go to Top'
        },
        es: {
            home: 'Inicio',
            about: 'Sobre mí',
            skills: 'Habilidades',
            portfolio: 'Portafolio',
            contact: 'Contacto',
            heroTitle: 'Transformando Datos en Decisiones Estratégicas',
            contactUs: 'Contáctame',
            aboutMe: 'Sobre mí',
            needProduct: '¿Necesitas Insights de tus Datos?',
            aboutText: 'Soy Valentín, un analista de datos apasionado por transformar datos complejos en insights accionables. Mi experiencia incluye análisis estadístico, visualización de datos, y machine learning. He trabajado con grandes volúmenes de datos en diversos sectores, ayudando a empresas a tomar decisiones basadas en datos. Mi enfoque combina habilidades técnicas con una fuerte comprensión del negocio para entregar soluciones que generan valor real.',
            hireMe: 'Contrátame',
            downloadCV: 'Descargar CV',
            mySkills: 'Mis Habilidades',
            skillsTitle: '¿Qué Incluyen mis Habilidades de Análisis de Datos?',
            skillsText: 'Utilizo estas tecnologías y herramientas para extraer, transformar y analizar datos, creando visualizaciones impactantes y modelos predictivos que ayudan a las empresas a tomar mejores decisiones.',
            myWorks: 'Mis Proyectos',
            worksTitle: '¡Mira mis proyectos de análisis de datos!',
            worksText: 'Cada proyecto demuestra mi capacidad para transformar datos en insights valiosos, utilizando las mejores prácticas de análisis de datos y visualización.',
            loadMore: 'Cargar Más Proyectos',
            contactTitle: '¿Tienes un proyecto de datos? ¡Hablemos!',
            contactText: 'Estoy disponible para proyectos de análisis de datos, visualización y machine learning. ¡Contáctame y conversemos sobre cómo puedo ayudarte!',
            name: 'Nombre',
            email: 'Correo',
            phone: 'Teléfono',
            message: 'Mensaje',
            send: 'Enviar',
            yearsExp: 'Años de Experiencia',
            completedProjects: 'Proyectos de Datos',
            happyClients: 'Clientes Satisfechos',
            address: 'Dirección:',
            phoneTitle: 'Teléfono:',
            emailTitle: 'Correo:',
            scroll: 'Desplazar',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            kaggle: 'Kaggle',
            twitter: 'Twitter',
            skills: 'Habilidades',
            tools: 'Herramientas',
            allRights: 'Todos los derechos reservados',
            goToTop: 'Ir Arriba'
        }
    };

    function updateLanguage(lang) {
        console.log("Actualizando idioma a:", lang);
        // Actualizar textos de navegación
        document.querySelectorAll('.navbar-link').forEach((link, index) => {
            const keys = ['home', 'about', 'skills', 'portfolio', 'contact'];
            link.textContent = translations[lang][keys[index]];
        });

        // Actualizar otros textos
        document.querySelector('.hero-title').textContent = translations[lang].heroTitle;
        document.querySelector('.hero .btn-primary').textContent = translations[lang].contactUs;
        document.querySelector('.section-subtitle').textContent = translations[lang].aboutMe;
        document.querySelector('.section-title').textContent = translations[lang].needProduct;
        document.querySelector('.section-text').textContent = translations[lang].aboutText;
        document.querySelector('.about .btn-secondary')?.textContent = translations[lang].downloadCV;
        document.querySelector('.about .btn-primary')?.textContent = translations[lang].hireMe;
        document.querySelectorAll('.section-subtitle')[1].textContent = translations[lang].mySkills;
        document.querySelectorAll('.section-title')[1].textContent = translations[lang].skillsTitle;
        document.querySelectorAll('.section-text')[1].textContent = translations[lang].skillsText;
        document.querySelectorAll('.section-subtitle')[2].textContent = translations[lang].myWorks;
        document.querySelectorAll('.section-title')[2].textContent = translations[lang].worksTitle;
        document.querySelectorAll('.section-text')[2].textContent = translations[lang].worksText;
        document.querySelector('.load-more').textContent = translations[lang].loadMore;
        document.querySelectorAll('.section-subtitle')[3].textContent = translations[lang].contact;
        document.querySelectorAll('.section-title')[3].textContent = translations[lang].contactTitle;
        document.querySelectorAll('.section-text')[3].textContent = translations[lang].contactText;

        // Actualizar etiquetas del formulario
        document.querySelector('label[for="name"]').textContent = translations[lang].name;
        document.querySelector('label[for="email"]').textContent = translations[lang].email;
        document.querySelector('label[for="phone"]').textContent = translations[lang].phone;
        document.querySelector('label[for="message"]').textContent = translations[lang].message;
        document.querySelector('.contact-form .btn-primary').textContent = translations[lang].send;

        // Actualizar estadísticas
        document.querySelectorAll('.stats-card .card-title strong').forEach((strong, index) => {
            const keys = ['yearsExp', 'completedProjects', 'happyClients'];
            strong.textContent = translations[lang][keys[index]];
        });

        // Actualizar títulos de contacto
        document.querySelectorAll('.contact-item-title').forEach((title, index) => {
            const keys = ['address', 'phoneTitle', 'emailTitle'];
            title.textContent = translations[lang][keys[index]];
        });

        // Actualizar tooltips de redes sociales
        document.querySelectorAll('.hero-social-link .tooltip').forEach((tooltip, index) => {
            const keys = ['github', 'linkedin', 'kaggle'];
            tooltip.textContent = translations[lang][keys[index]];
        });

        document.querySelectorAll('.contact-social-link .tooltip').forEach((tooltip, index) => {
            const keys = ['github', 'linkedin', 'kaggle', 'twitter'];
            tooltip.textContent = translations[lang][keys[index]];
        });

        // Actualizar botones de habilidades/herramientas
        document.querySelectorAll('.toggle-btn').forEach((btn, index) => {
            const keys = ['skills', 'tools'];
            btn.textContent = translations[lang][keys[index]];
        });

        // Actualizar texto de scroll
        document.querySelector('.scroll-down').textContent = translations[lang].scroll;

        // Actualizar copyright
        document.querySelector('.copyright').innerHTML = `&copy; 2025 <a href="#" target="_blank">ANALISTA DE DATOS</a>. ${translations[lang].allRights}`;

        // Actualizar título del botón ir arriba
        document.querySelector('[data-go-top]').title = translations[lang].goToTop;

        // Guardar preferencia de idioma
        localStorage.setItem('language', lang);
    }

    // Event listener para el cambio de idioma
    languageSelect.addEventListener('change', function(e) {
        const selectedLanguage = e.target.value;
        console.log("Idioma seleccionado:", selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    // Al cargar la página, forzamos la actualización del idioma
    const savedLanguage = localStorage.getItem('language') || 'es';
    console.log("Idioma guardado:", savedLanguage);
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

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

            for(let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
            elemToggleFunc(skillsBox);
        });
    }

    // Botón de cargar más proyectos
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('Función para cargar más proyectos. Aquí puedes implementar la carga de proyectos adicionales.');
        });
    }

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(name && email && message) {
                alert(`¡Gracias por tu mensaje, ${name}! Te contactaré pronto.`);
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
});