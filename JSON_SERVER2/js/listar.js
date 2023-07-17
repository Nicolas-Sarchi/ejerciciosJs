export function listarCategorias (categorias){
    const div = document.querySelector('.insights');
    div.innerHTML = '';
    categorias.forEach(categoria => {
        let li = `
        <li >
        <i class='bx bx-category-alt' data-id='${categoria.id}'></i>
        
        <span class="info">
        
        <i class='bx bx-edit btn-editar-categoria btn btn-sm' data-bs-toggle="modal" data-bs-target="#modalModificarCategoria" data-id='${categoria.id}'></i>
        <i class='bx bx-trash btn-eliminar-categoria btn  btn-sm' data-id='${categoria.id}'></i>
            <h3>

            ${categoria.nombre}
            </h3>
            <p>${categoria.id}</p>
        </span>
    </li>
        `;
        div.innerHTML += li;
    })
}