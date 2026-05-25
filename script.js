const productos = [
  { codigo: "P001", nombre: "Arroz 500g", categoria: "Alimentos", precio: "$3.500", existencia: 40 },
  { codigo: "P002", nombre: "Aceite 1L", categoria: "Alimentos", precio: "$9.000", existencia: 18 },
  { codigo: "P003", nombre: "Jabón líquido", categoria: "Aseo", precio: "$7.500", existencia: 8 },
  { codigo: "P004", nombre: "Galletas", categoria: "Snacks", precio: "$2.800", existencia: 60 },
  { codigo: "P005", nombre: "Café 250g", categoria: "Bebidas", precio: "$12.000", existencia: 15 }
];

function cargarProductos() {
  const tabla = document.getElementById("tablaProductos");
  tabla.innerHTML = "";

  productos.forEach((producto) => {
    const fila = document.createElement("tr");
    const estado = producto.existencia <= 10 ? "Bajo stock" : "Disponible";
    const claseEstado = producto.existencia <= 10 ? "estado-bajo" : "estado-ok";

    fila.innerHTML = `
      <td>${producto.codigo}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>${producto.precio}</td>
      <td>${producto.existencia}</td>
      <td class="${claseEstado}">${estado}</td>
    `;

    tabla.appendChild(fila);
  });
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function registrarVenta(event) {
  event.preventDefault();

  const producto = document.getElementById("productoVenta").value;
  const cantidad = Number(document.getElementById("cantidadVenta").value);
  const precio = Number(document.getElementById("precioVenta").value);
  const total = cantidad * precio;

  const resultado = document.getElementById("resultadoVenta");
  resultado.textContent = `Venta registrada: ${producto} - Cantidad: ${cantidad} - Total: $${total.toLocaleString("es-CO")}`;
}

document.addEventListener("DOMContentLoaded", cargarProductos);
