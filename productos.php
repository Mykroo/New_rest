<?php 
//header('Content-type:application/json');

$conn = new mysqli("localhost","root","");

if ($conn->connect_error) {
	die("Conexion fallida: " . $conn->connect_error);
}
	//echo "Bien conectao";
$sql="SELECT * FROM newrest.productos";
$rs=$conn->query($sql);	
$result=$conn->query($sql);	
$rows=array();
if($rs->num_rows>0){
	while ($row=$rs->fetch_array()) {
		$rows[]=$row;
		//echo implode(" ",$row);
		//echo "<br>";
	}
}

$outp="[";
while($rs = $result->fetch_array()) {
    if ($outp != "[") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"nombre":"'   . $rs["nombre"] . '",';
    $outp .= '"precio":"'   . $rs["precio"] . '",';
    $outp .= '"idCategoria":"'   . $rs["idCategoria"] . '",';
    $outp .= '"desc":"'. $rs["desc"]     . '"}'; 
}
$outp .="]";

	//echo json_encode($rows);
	echo($outp);
	//print_r($rows);


	if (mysqli_close($conn)) {
		# code...
		//echo "Desconectado";
	}
?>
