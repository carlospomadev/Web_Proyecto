let menuVisble = false;
//Funcion que muestra u oculta el menú
function mostrarOcultarMenu(){
    if(menuVisble){
        document.getElementById("nav").classList ="";
        menuVisble = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisble = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciona una opción
    document.getElementById("nav").classList="";
    menuVisble = false;
}
    //funcion para las animaciones de skills
    function efectoSkills(){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("Java");
            habilidades[3].classList.add("python");
            habilidades[4].classList.add("sql");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajoenequipo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("projectmanagement");
        }
    }
    window.onscroll = function(){
        efectoSkills();
    }

//funciones del aviso-cookies
const botonAceptarCookies = document.getElementById("boton-aceptar-cookies");
const avisoCookies = document.getElementById("aviso-cookies");
const fondoAvisoCookies = document.getElementById("fonde-aviso-cookies");

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}

botonAceptarCookies.addEventListener("click", ()=>{
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);
});