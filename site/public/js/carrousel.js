const fila = document.querySelector('.contenedor-carousel');
const zapatillas = document.querySelectorAll('#zapatilla-img');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const fila2 = document.querySelector("#contenedor-carousel2");
const zapatillas2 = document.querySelectorAll('#zapatilla-img2');
const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;	
});

// ? ----- ----- Hover ----- -----
zapatillas.forEach((zapatilla) => {
	zapatilla.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			zapatillas.forEach(zapatilla => zapatilla.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	zapatillas.forEach(zapatilla => zapatilla.classList.remove('hover'));
}); 

/*--------------------------------------------------------------------*/


// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;
});


// ? ----- ----- Hover ----- -----
zapatillas2.forEach((zapatilla) => {
	zapatilla.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			zapatillas2.forEach(zapatilla => zapatilla.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave', () => {
	zapatillas2.forEach(zapatilla => zapatilla.classList.remove('hover'));
}); 