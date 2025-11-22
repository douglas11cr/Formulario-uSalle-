<?php
$conexion = new mysqli("localhost", "root", "", "contactos_lasalle");

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO mensajes (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
$conexion->query($sql);
$conexion->close();

echo "Datos guardados correctamente.";
?>