<?php 
header('Content-type:application/json');
include 'conn.php';

if ($conn->connect_error) {
	die("Conexion fallida: " . $conn->connect_error);
}
	//echo "Bien conectao";
$sql="SELECT * FROM newrest.MESA";
$rs=$conn->query($sql);	
$rows=array();
if($rs->num_rows>0){
	while ($row=$rs->fetch_assoc()) {
		$rows[]=$row;
	}
}
	echo json_encode($rows);
	

	if (mysqli_close($conn)) {
		# code...
		//echo "Desconectado";
	}
?>
