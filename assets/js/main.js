function ingresarProducto() {
    let tituloProducto = document.querySelector("#name")
    let cantidadProductos = document.querySelector("#amount").value
    let precioProducto = document.querySelector("#price")
    let valorProducto = precioProducto.innerHTML
    let total = cantidadProductos * valorProducto

    document.querySelector("#title").innerHTML = tituloProducto.innerHTML;
    document.querySelector("#cantidad").innerHTML = cantidadProductos;
    document.querySelector("#precio").innerHTML = "$" + total;
}

function colorSelect() {
    let selectColor = document.querySelector("#color-selector").value
    let colorPicker = document.querySelector(".color-picked")
    let imagenMostrada = document.querySelector(".img-product")

    if (selectColor == "white"){
        colorPicker.style.backgroundColor = "#FFFFFF";
        imagenMostrada.setAttribute("src","./assets/img/case-white1.png");
    } else{
        colorPicker.style.backgroundColor = "#FFC0CB";
        imagenMostrada.setAttribute("src","./assets/img/case-pink1.png");
    }
}

