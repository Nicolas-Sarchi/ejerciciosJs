
function showSection(sectionId) {
    const sections = ['home', 'rutas','puntos'];
    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}


document.querySelector("a[href='#home']").addEventListener("click", () => showSection("home"));
document.querySelector("a[href='#rutas']").addEventListener("click", () => showSection("rutas"));
document.querySelector("a[href='#puntos']").addEventListener("click", () => showSection("puntos"));


// Show the home section by default
showSection("home");

const sideLinks = document.querySelectorAll('.sidebar .side-menu a');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    
});

