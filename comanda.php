<?php 
include 'conn.php';

	//echo "Bien conectao";
//$datos = json_decode($_POST["prods"],true);
$datos = $_POST["prods"];
$mesa = $_POST["mesa"]+1;
$edo = $_POST["edo"];
$n_cuenta=666;



//echo json_encode($_POST["prods"]);
//echo $datos;
foreach ($datos as $r) {
	$query = "INSERT INTO cuentaproductos(cantidad, idCuenta, idProd ) VALUES ('" . $r['cantidad'] . "', ".$n_cuenta.", '" . $r['id'] . "')";	
	//$query = "INSERT INTO cuentaproductos(cantidad, idCuenta, idProd ) VALUES ('50', '66', '65')";	
	//echo $query;
	if ($r['cantidad']>0){
		if($conn->query($query)=== TRUE){
			echo "a toda maye *";
		}else{
			die('Error : ' . mysql_error());
		}
		$query_up="UPDATE mesa SET edo=2 where id=". $mesa;
		if($conn->query($query_up)=== TRUE){
			echo "a toda maye";
		}else{
			die('Error : ' . mysql_error());
		}
	}
}

if (mysqli_close($conn)) {
		# code...
		//echo "Desconectado";
}
?>
