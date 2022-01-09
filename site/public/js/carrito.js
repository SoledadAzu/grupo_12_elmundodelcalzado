console.log('carrito.js connected');

const $ = id => document.getElementById(id);
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const boxCarrito = $('carrito');


const cargarTabla = (carrito) => {

    if (boxCarrito) {

        boxCarrito.innerHTML = '';

        carrito.forEach(producto => {


            boxCarrito.innerHTML += `
        
            <tr>

            <td><button onClick="removeItem(event,${producto.id},${producto.talles})" class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>
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
