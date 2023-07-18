function mostrarSeccion(sectionId) {
    const sections = ['clima', 'departamentos','ciudades'];
    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}


document.querySelector("a[href='#clima']").addEventListener("click", () => mostrarSeccion("clima"));
document.querySelector("a[href='#departamentos']").addEventListener("click", () => mostrarSeccion("departamentos"));
document.querySelector("a[href='#ciudades']").addEventListener("click", () => mostrarSeccion("ciudades"));


mostrarSeccion("clima");

const links = document.querySelectorAll('.sidebar .side-menu li a');

links.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        links.forEach(i => {
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

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    let miTema = ''
    if (this.checked) {
        document.body.classList.add('dark');
        document.getElementById('selectDepartamento').classList.add("bg-dark", "text-light")
        document.getElementById('tablaBoostrap').classList.add("table-dark")
        miTema = 'dark';

    } else {
        document.body.classList.remove('dark');
        document.getElementById('selectDepartamento').classList.remove("bg-dark", "text-light")
        document.getElementById('tablaBoostrap').classList.remove("table-dark");
        miTema = 'light'
    }
    
    localStorage.setItem('theme', miTema);

});

function cambiarTema(tema){
    if(tema === 'dark'){
        document.body.classList.add('dark');
        document.getElementById('selectDepartamento').classList.add("bg-dark", "text-light")
        document.getElementById('tablaBoostrap').classList.add("table-dark")
    } else {
        document.body.classList.remove('dark');
        document.getElementById('selectDepartamento').classList.remove("bg-dark", "text-light")
        document.getElementById('tablaBoostrap').classList.remove("table-dark");
    }
}

let tema = localStorage.getItem('theme')

cambiarTema(tema)