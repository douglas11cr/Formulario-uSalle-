<?php
$conexion = new mysqli("localhost", "root", "", "contactos_lasalle");
$resultado = $conexion->query("SELECT * FROM mensajes");

echo "<h2>Mensajes recibidos</h2>";
while($fila = $resultado->fetch_assoc()) {
    echo "<p><strong>{$fila['nombre']}</strong>: {$fila['mensaje']} (<em>{$fila['correo']}</em>)</p>";
}
$conexion->close();
?>