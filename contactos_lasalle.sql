CREATE DATABASE IF NOT EXISTS contactos_lasalle;
USE contactos_lasalle;

CREATE TABLE IF NOT EXISTS mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    correo VARCHAR(100),
    mensaje TEXT
);