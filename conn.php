<?php 
$conn = new mysqli("localhost","root","","newrest");

if ($conn->connect_error) {
	die("Conexion fallida: " . $conn->connect_error);
}
$conn2 = new mysqli("localhost","root","","newrest");

if ($conn2->connect_error) {
	die("Conexion fallida: " . $conn->connect_error);
}
 ?>