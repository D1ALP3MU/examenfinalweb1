//Funcion para llenar dinamicamente
//la tienda

let productos = [

    { 
        nombre: "Batimovil a escala", 
        precio: 400000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batimovilEscala.jpg?alt=media&token=bdff996b-fb38-44d2-8035-ac9ef9702973", 
        descripcion: "Batimovil a escala de la ultima pelicula" 
    },
    { 
        nombre: "Camiseta Batman", 
        precio: 80000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/camisetaBatman1.jpg?alt=media&token=0f7dece6-2619-4805-bc6e-ad2179503723", 
        descripcion: "Camiseta original DC" 
    },
    { 
        nombre: "Gorra Batman", 
        precio: 50000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/gorraBatman.jpg?alt=media&token=a8434d75-79d1-4ca0-90e7-8a420b0bc483", 
        descripcion: "Gorra original DC" 
    },
    { 
        nombre: "Bati termo DC", 
        precio: 35000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batiTermo1.jpg?alt=media&token=30b61544-3b54-48c5-ac1a-ce6867167050", 
        descripcion: "Termo para bati chocolate" 
    },
    { 
        nombre: "Batmav v Superman", 
        precio: 300000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batmanVsuperman.jpg?alt=media&token=ed524359-6057-4926-be56-33c3aa61af3c", 
        descripcion: "Imagen a escala de la pelicula Batman v Superman" 
    },
    { 
        nombre: "Bati morral Totto", 
        precio: 80000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batiMorral.jpg?alt=media&token=f2eb0d51-e988-4025-8da4-6a1a99dc6e1b", 
        descripcion: "Bolso original DC" 
    },
    { 
        nombre: "Silla Gaming Batman", 
        precio: 2000000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/sillaBatman.jpg?alt=media&token=dd618c8c-df44-4543-89ac-8572dca303c6", 
        descripcion: "Silla comoda y original DC" 
    },
    { 
        nombre: "caja de comics Batman", 
        precio: 300000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/cajaComics.jpg?alt=media&token=b1ee244d-11dc-423b-96c2-49acd0eeca7f", 
        descripcion: "comics Batman originales" 
    },
    { 
        nombre: "Bati caja sorpresa", 
        precio: 250000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batiCajaSorpresa.jpg?alt=media&token=c70b8b66-62b8-4157-811e-d6b7022ff21d", 
        descripcion: "Caja sorpresa con productos de batman" 
    },
    { 
        nombre: "Bati lonchera totto", 
        precio: 80000, 
        foto: "https://firebasestorage.googleapis.com/v0/b/examenwebidap.appspot.com/o/batiLonchera.jpg?alt=media&token=43b2c28b-a0a3-4e33-86f1-2ed53fc6c67e", 
        descripcion: "Lonchera para llevar tus bati alimentos" 
    }

]

//Rutina para recorrer el arreglo y crear las tarjetas de cada producto

//1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
let fila = document.getElementById("fila")

//2. Necesito recorrer un arreglo
productos.forEach(function (producto) {

    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna = document.createElement("div")
    columna.classList.add("col")

    //Se crea la tarjeta
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card", "shadow", "text-center", "h-100", "p5", "mt-5", "h-100")

    //se crea la imagen
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src = producto.foto

    //se crea separador 
    let separador = document.createElement("hr")
    separador.classList.add("w-50", "mx-auto", "d-block")

    //Se crea el nombre
    let nombre = document.createElement("h5")
    nombre.classList.add("fw-bold", "text-center", "mx-3")
    nombre.textContent = producto.nombre

    //Se crea precio
    let precio = document.createElement("h6")
    precio.classList.add("text-center", "text-muted")
    precio.textContent = producto.precio

    //Se crea boton
    let botonAmpliarInfo = document.createElement("button")
    botonAmpliarInfo.setAttribute("type", "button")
    botonAmpliarInfo.classList.add("btn", "btn-outline-dark", "mx-3", "mb-3")
    botonAmpliarInfo.textContent = "Ver producto"


    //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})