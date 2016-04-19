<?php 
//header('Content-type:application/json; charset=UTF-8');

$conn = new mysqli("localhost","root","");

if ($conn->connect_error) {
	die("Conexion fallida: " . $conn->connect_error);
}
	//echo "Bien conectao";
$sql="SELECT * FROM newrest.categoria";
//$rs=$conn->query($sql);
$result=$conn->query($sql);		
$rows=array();
/*if($rs->num_rows>0){
	while ($row=$rs->fetch_assoc()) {
		$rows[]=$row;
	}
}
*/
$outp="[";
while($rs = $result->fetch_array()) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"nombre":"'   . $rs["nombre"] . '"}'; 
}
$outp .="]";

	//echo json_encode($rows);
	echo($outp);
	//echo json_encode($rows);
	//echo "ñoño";

	if (mysqli_close($conn)) {
		# code...
		//echo "Desconectado";
	}
?>
