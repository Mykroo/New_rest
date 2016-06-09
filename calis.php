<?php 
$json= file_get_contents('dat.json');
$datos= json_decode($json, true);

foreach ($datos as $rows) {
	# code...
	#echo $rows['name'];
	#echo $rows['gender'];
	echo $rows['id'];
	echo $rows['nombre'];
	echo $rows['precio'];

}

echo "<br> ";
echo json_encode($datos); 
?>