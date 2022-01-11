console.log('carrito.js connected');

const $ = id => document.getElementById(id);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const valor = document.querySelector(".valor")
const cantidadCompra= document.querySelector(".cantidadCompra")
const boxCarrito = $('carrito');
let cantidadTotal = 0
let precioTotal = 0
const cargarTabla = (carrito) => {

    if (boxCarrito) {

        boxCarrito.innerHTML = '';

        carrito.forEach(producto => {
          cantidadTotal += producto.cantidad
          producto.subtotal = producto.precio * producto.cantidad
          precioTotal += producto.subtotal

            boxCarrito.innerHTML += `
        
            <tr>

            <td><button onClick="removeItem(event,${producto.id},${producto.talles})" class="btn btn-sm btn-danger"><i class="fas fa-trash-alt papelera"></i></button>
            </td>

            <td class="d-flex flex-column">
            <img class="img-fluid" src="/images/articulos/${producto.imagen}" alt="">
                <ul>
                    <li>${producto.nombre}</li>
                    <li>Talle: ${producto.talles}</li>
                </ul>
            </td>

            <td class="h5"><strong>$ ${toThousand(producto.precio)}</strong></td>

            <td class="h5"><span>${producto.cantidad}</span></td>

            <td class="h5"><strong>$ ${toThousand(producto.subtotal)}</strong></td>

        </tr>
            
            `
        })
valor.innerHTML = `$ ${toThousand(precioTotal)}`
precioTotal = 0
cantidadCompra.innerHTML = cantidadTotal 
cantidadTotal = 0
    }

}


const getCarrito = async () => {

    try {

        let response = await fetch('/cart/show');
        let result = await response.json();
        
        console.log(result.data);

        result.ok && cargarTabla(result.data)

    } catch (error) {
        console.error(error)
    }
}

getCarrito()


const addItem = async (e, id) => {
    e.preventDefault()
    let data = new URLSearchParams(new FormData(e.target))
    console.log(data)

    let response = await fetch('/cart/add/' + id, {
        method: 'POST',
        body : data
    })
    let result = await response.json()

    console.log(result)

}

const removeItem = async (e,id,talle) => {
    e.preventDefault();

    let response = await fetch(`/cart/remove/${id}/${talle}`,{method:'DELETE'})
    let result = await response.json();
    result.ok && cargarTabla(result.data)

}
