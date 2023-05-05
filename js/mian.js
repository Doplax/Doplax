// Función para manejar el evento de clic en el botón de menú
function handleMenuToggle() {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
}

// Función para cerrar el menú
function closeMenu() {
    navMenu.classList.remove("nav-menu_visible");
}

// Función para manejar el evento de desplazamiento en la ventana
function handleScroll() {
    const header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
}

// Función para manejar el cambio de idioma
function handleLanguage() {
    const isChecked = check.checked;

    if (isChecked) {
        location.href = "en/index.html";
    } else {
        location.href = "../index.html";
    }
}

function renderSkills(skills) {
    const skillsContainer = document.querySelector(".skill__list");

    skills.forEach((skill) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="skill__item">
            <img src="${skill.icon}" alt="${skill.altText}">
            <div class="skill__name">${skill.skillName}</div>
        </div>`;
    skillsContainer.appendChild(div)
    });

}

// Selecciona los elementos del DOM necesarios
const skills = [
    {
        icon: "./img/html-logo.png",
        altText: "Logotipo de HTML 5",
        skillName: "HTML 5",
    },
    {
        icon: "./img/css-logo.png",
        altText: "Logotipo de CSS 3",
        skillName: "CSS 3",
    },
    {
        icon: "./img/js-logo.png",
        altText: "Logotipo de JavaScript",
        skillName: "JavaScript",
    },
    {
        icon: "./img/bootstrap-logo.png",
        altText: "Logotipo de Bootstrap",
        skillName: "Bootstrap",
    },
    {
        icon: "./img/git-logo.png",
        altText: "Logotipo de GIT",
        skillName: "GIT",
    },
    {
        icon: "./img/JS_personal.png",
        altText: "Logotipo de GitHub",
        skillName: "GitHub",
    },
    {
        icon: "./img/linux-logo.png",
        altText: "Logotipo de Linux",
        skillName: "Linux",
    },
    {
        icon: "./img/next-js-logo.png",
        altText: "Logotipo de Next.js",
        skillName: "Next.js",
    },
    {
        icon: "./img/node-logo.png",
        altText: "Logotipo de Node.js",
        skillName: "Node.js",
    },
    {
        icon: "./img/notion-logo.png",
        altText: "Logotipo de Notion",
        skillName: "Notion",
    },
    {
        icon: "./img/npm-logo.png",
        altText: "Logotipo de npm",
        skillName: "npm",
    },
    {
        icon: "./img/php-logo.png",
        altText: "Logotipo de PHP",
        skillName: "PHP",
    },
    {
        icon: "./img/python-logo.png",
        altText: "Logotipo de Python",
        skillName: "Python",
    },
    {
        icon: "./img/react-icon.png",
        altText: "Logotipo de React",
        skillName: "React",
    },
    {
        icon: "./img/excel.png",
        altText: "Logotipo de Microsoft Excel",
        skillName: "Microsoft Excel",
    },
];

const navToggle = document.querySelector(".nav-toggle");
const navMenuItem = document.querySelector(".nav-menu");
const check = document.querySelector(".check");

// Registra los controladores de eventos
navToggle.addEventListener("click", handleMenuToggle);
navMenuItem.addEventListener("click", closeMenu);
check.addEventListener("click", handleLanguage);
window.addEventListener("scroll", handleScroll);

window.onload = () => {
    renderSkills(skills);
};
