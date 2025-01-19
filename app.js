// Fucionalidades:

// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

// Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

// Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

let amigos = [];

//funcion agregar amigos
function agregarAmigo() {
  const capturaNombre = document.getElementById("amigo");
  const nombre = capturaNombre.value.trim(); //captura y limpia

  //verifica si el campo esta vacio
  if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return; //detiene para que no siga el codigo
  }
  //verifica si existe el nombre
  if (amigos.includes(nombre)) {
    alert("Ya existe este nombre");
    return;
  }

  amigos.push(nombre);

  //agregar amigos a la lista del DOM
  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nombre;

  //extra - eliminar nombre con clic
  li.addEventListener("click", () => {
    const index = nombre.indexOf(nombre);
    amigos.splice(index, 1);
    li.remove();
  });

  lista.appendChild(li);
  capturaNombre.value = "";
}

//actualizar lista de amigos
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");

  //limpiar lista en el DOM
  lista.innerHTML = "";

  //recorre el array
  for (let index = 0; index < amigos.length; index++) {
    const li = document.createElement("li"); //nuevo elemento en lista
    li.textContent = amigos[index]; //asigna nombre
    lista.appendChild(li); //agrega al DOM
  }
}
