//Objetos
let clientes = [
    {
        id: 55555555,
        nombre: 'Mario', 
        apellidos: 'Casas Orozco',
        telefono:3001234578, 
        email: 'mario@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'Español'},

    {
        id: 987654321,
        nombre: 'Mario Noel', 
        apellidos: 'Páez',
        telefono:3001234578, 
        email: 'mario@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'Colombia'},

    {
        id: 654321987,
        nombre: 'Camila', 
        apellidos: 'Páez',
        telefono:3001234578, 
        email: 'camila@gmail.com',
        fechaNac: '14/06/2000',
        nacionalidad: 'Colombia'}

];

let rutas = [
    {
        id:12345,
        nombreRuta: 'Bucaramanga-Bogotá',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Bogotá',
        valorTiquete: 125000,
        puntosRuta: 50,
    },
    {
        id:456789,
        nombreRuta: 'Bucaramanga-Cartagena',
        ciudadOrigen: 'Bucaramanga',
        ciudadDestino: 'Cartagena',
        valorTiquete: 200000,
        puntosRuta: 80,
    }

];
//INICIO
const $main = document.getElementById('main-modulos');
//// Botones
const $botonCompraTiquete = document.getElementById('compra-tiquetes');
const $botonPuntos = document.getElementById('puntos');
///CLIENTES
const $botonClientes = document.getElementById('clientes');
const $mClientes = document.getElementById('modulo-clientes');

const $bAgregarCliente = document.getElementById('b-agregar-cliente');
const $vAgregarCliente =document.getElementById('agregar-cliente'); //v->Visualizar
const $vEditarCliente =document.getElementById('editar-cliente'); //v->Visualizar

const $tablaClientes = document.getElementById('template-clientes')

const $bBuscarCliente = document.getElementById('b-buscar-cliente');
////Formulario buscar
let $buscar = document.getElementById('buscar');

////Formulario cliente Agregar
let $documento = document.getElementById('id');
let $nombre = document.getElementById('nombre');
let $apellidos = document.getElementById('apellidos');
let $telefono = document.getElementById('telefono');
let $email = document.getElementById('email');
let $fechaNac = document.getElementById('fechaNac');
let $nacionalidad = document.getElementById('nacionalidad');
////Formulario cliente Editar
let $documentoE = document.getElementById('idE');
let $nombreE = document.getElementById('nombreE');
let $apellidosE = document.getElementById('apellidosE');
let $telefonoE = document.getElementById('telefonoE');
let $emailE = document.getElementById('emailE');
let $fechaNacE = document.getElementById('fechaNacE');
let $nacionalidadE = document.getElementById('nacionalidadE');


let $formClientesA = document.getElementById('form-agregar-cliente') //formulario agregar
let $formClientesE = document.getElementById('form-editar-cliente') //formulario editar

const $volverClientesA = document.getElementById('b-volver-cliente');
const $volverClientesE = document.getElementById('b-volver-cliente2');

$volverClientesA.addEventListener('click',function(){
    $mClientes.style.filter='none';
    $vAgregarCliente.style.display='none';   
});
$volverClientesE.addEventListener('click',function(){
    $mClientes.style.filter='none';
    $vEditarCliente.style.display='none';   
});

$botonClientes.addEventListener('click',function(){
    $main.style.display='none';
    $mClientes.style.display='flex';
    $mClientes.style.alignItems='center';

    listaClientes(clientes);
});
$bAgregarCliente.addEventListener('click',function(){
    $mClientes.style.filter='blur(5px)';
    $vAgregarCliente.style.display='flex';
});

//Buscar clientes
$bBuscarCliente.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();

    let listaBuscar = [];
    let clienteBuscar = $buscar.value.toUpperCase();
    console.log(clienteBuscar)

    if(clienteBuscar==''){
        listaClientes(clientes);
        return
    }
    //Se recorre la lista de clientes buscando coincidencias 
    clientes.forEach(function(e){
        let nombre = e.nombre.toUpperCase();
        let apellidos = e.apellidos.toUpperCase();
        let id = e.id;
        console.log(id)

        if(nombre.includes(clienteBuscar) || apellidos.includes(clienteBuscar)|| String(id).includes(clienteBuscar)){
            listaBuscar.push(e)
        }
    });

    if(listaBuscar.length>0){
        listaClientes(listaBuscar);
    }else{
        Swal.fire({
            //title: 'Sweet!',
            text: 'No hay coincidencias para su busqueda...',
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/3746/3746929.png',
            imageWidth: 200,
            imageAlt: 'Custom image',
          })
    }
});
//Formulario Agregar Clientes
$formClientesA.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();
    //Creación de objeto cliente
    let newCliente ={};
    newCliente.id= $documento.value; 
    newCliente.nombre= $nombre.value; 
    newCliente.apellidos= $apellidos.value; 
    newCliente.telefono= $telefono.value; 
    newCliente.email= $email.value; 
    newCliente.fechaNac= $fechaNac.value; 
    newCliente.nacionalidad= $nacionalidad.value; 
    console.log(newCliente);
    
    //Asignación a clientes
    clientes.push(newCliente);
    
    //Función para visualizar
    listaClientes(clientes);
    //eventooalert

    $mClientes.style.filter='none';
    $vAgregarCliente.style.display='none';
});

//Función lista de clientes
function listaClientes(clientes){
    $tablaClientes.innerHTML="";
    let contador = 1;
    clientes.forEach(e => {
        let html =`<tr id="${e.id}">
                        <th scope="row">${contador}</th>
                        <td>${e.id}</td>
                        <td>${e.nombre}</td>
                        <td>${e.apellidos}</td>
                        <td>${e.telefono}</td>
                        <td>${e.email}</td>
                        <td>${e.fechaNac}</td>
                        <td>${e.nacionalidad}</td>
                        <td class="editDelete">
                            <button id="E${e.id}" type="button" class="btn btn-warning bi bi-pencil-square" style="color: rgb(255, 255, 255);"></button>
                            <button id="D${e.id}" type="button" class="btn btn-danger bi bi-trash"></button>
                        </td>
                    </tr>`
        contador +=1;
        $tablaClientes.insertAdjacentHTML("beforeend", html);
    });   
};

//Función eliminar
document.addEventListener('click',function(event){
    try {
        if(document.getElementById(event.target.id).className == 'btn btn-danger bi bi-trash'){
            let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;

            //filter hace una copia...
           clientes = clientes.filter(function(element){
                return String(element.id) != targetId
            } );
            listaClientes(clientes)   
        }
    } catch (error) {
        
    }
});

//Formulario Editar clientes
$formClientesE.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();
    //Creación de objeto cliente
    let editCliente ={};
    editCliente.id= $documentoE.value; 
    editCliente.nombre= $nombreE.value; 
    editCliente.apellidos= $apellidosE.value; 
    editCliente.telefono= $telefonoE.value; 
    editCliente.email= $emailE.value; 
    editCliente.fechaNac= $fechaNacE.value; 
    editCliente.nacionalidad= $nacionalidadE.value; 
    console.log(editCliente);

    clientes.forEach(function(element,index){
        if(String(element.id) == editCliente.id){
            clientes.splice(index,1,editCliente);
        }
    });
    listaClientes(clientes);
    $mClientes.style.filter='none';
    $vEditarCliente.style.display='none';

});
//Función editar
document.addEventListener('click',function(event){
    try {
        if(document.getElementById(event.target.id).className == 'btn btn-warning bi bi-pencil-square'){
            let targetId = document.getElementById(event.target.id).parentNode.parentNode.id;
            
            $mClientes.style.filter='blur(5px)';
            $vEditarCliente.style.display='flex';
      
            //No debería dejar editar la cédula... 
            clientes.forEach(function(element){
                if(targetId == String(element.id)){
                    $documentoE.value = element.id;
                    $nombreE.value = element.nombre;
                    $apellidosE.value = element.apellidos;
                    $telefonoE.value = element.telefono;
                    $emailE.value = element.email;
                    $fechaNacE.value = element.fechaNac;
                    $nacionalidadE.value = element.nacionalidad;
                }
            });      
        }
    } catch (error) {
        
    }
});

//RUTAS
const $botonRutas = document.getElementById('rutas');
const $mRutas = document.getElementById('modulo-rutas');
const $bAgregarRuta = document.getElementById('b-agregar-ruta');
const $vAgregarRuta = document.getElementById('agregar-ruta');

const $tarjetasRutas = document.getElementById('lista-rutas');

const $formAgregarRuta = document.getElementById('form-agregar-ruta');

//Formulario Rutas
let $nombreRuta = document.getElementById('nombre-ruta');
let $valorTRuta = document.getElementById('valorT-ruta');
let $origenRuta = document.getElementById('origen-ruta');
let $destinoRuta = document.getElementById('destino-ruta');
let $puntosRuta = document.getAnimations('puntos-ruta');

$botonRutas.addEventListener('click',function(){
    $main.style.display='none';
    $mRutas.style.display='flex';
});

$bAgregarRuta.addEventListener('click',function(){
    $mRutas.style.filter='blur(5px)';
    $vAgregarRuta.style.display='flex';
});
const $volverRutas = document.getElementById('b-volver-ruta');

$volverRutas.addEventListener('click',function(){
    $vAgregarRuta.style.display='none';
    $mRutas.style.filter='none';
});

//Formulario agregar Rutas
$formAgregarRuta.addEventListener('submit',function(e){
    e.preventDefault(); // Evitar el envío del formulario
    e.stopPropagation();

    //Creación de objeto cliente
    let newRuta ={};
    newRuta.id = uuid.v1(); //ID aleatorio
    newRuta.nombreRuta= $nombreRuta.value; 
    newRuta.valorTiquete= $valorTRuta.value; 
    newRuta.ciudadOrigen= $origenRuta.value; 
    newRuta.ciudadDestino= $destinoRuta.value; 
    newRuta.puntosRuta = $puntosRuta.value;
    //Asignación a Rutas
    rutas.push(newRuta);

    //Función para visualizar las rutas 
    //pendientee
    listaRutas(rutas);

    $mRutas.style.filter='none';
    $vAgregarRuta.style.display='none';
});

//Función lista de rutas+
function listaRutas(rutas){
    $tarjetasRutas.innerHTML = "";

    rutas.forEach(e =>{
        let html= `<div id="${e.id}" class="tarjetaRuta">
                <h4>${e.nombreRuta}</h4>
                <img src="img/ruta.png" alt="destino" class="img">
                <p><b>Ciudad de origen: </b>${e.ciudadOrigen}</p>
                <p><b>Ciudad de destino:</b> ${e.ciudadDestino}</p>
                <p>$${e.valorTiquete}</p>
                <div class="estrella"><img src="img/estrella2.png" alt="Puntos" class="img-puntos"></div>
                <p><b>Puntos:</b>${e.puntosRuta}</p>
                
                <button class="eliminarRuta">
                    <img src="img/eliminar.png" alt="eliminar" class="imgBorrarRuta">
                </button>
            </div>`
        console.log(html);
        $tarjetasRutas.insertAdjacentHTML("beforeend", html);

    });


}

