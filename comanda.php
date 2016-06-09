<?php 
include 'conn.php';

	//echo "Bien conectao";
//$datos = json_decode($_POST["prods"],true);
$datos = $_POST["prods"];
$mesa = $_POST["mesa"]+1;
$edo = $_POST["edo"];
$n_cuenta=666;

if ($edo>0) {
	$query="SELECT MAX(id) FROM cuenta WHERE idMesa=".$mesa;
	$result = $conn->query($query);
	if ($result->num_rows > 0) {
    // output data of each row
		while($row = $result->fetch_assoc()) {
			//echo "id: " . $row["MAX(id)"];
			$n_cuenta = $row["MAX(id)"];
		}
	} else {
		echo "0 results";
	}	
}else{
	$query="INSERT INTO cuenta(idmesa) VALUES (".$mesa.")";
	if($conn->query($query)=== TRUE){
		echo "Cuenta new";
	}else{
		echo "Cuenta nueva no creada :(";
	}
	$query="SELECT MAX(id) FROM cuenta WHERE idMesa=".$mesa;
	$result = $conn->query($query);
	if ($result->num_rows > 0) {
    // output data of each row
		while($row = $result->fetch_assoc()) {
			$n_cuenta=$row["MAX(id)"];
		}
	} else {
		echo "0 results";
	}
}


//echo json_encode($_POST["prods"]);
//echo $datos;
foreach ($datos as $r) {
	$query = "INSERT INTO cuentaproductos(cantidad, idCuenta, idProd ) VALUES ('" . $r['cantidad'] . "', ".$n_cuenta.", '" . $r['id'] . "')";	
	//$query = "INSERT INTO cuentaproductos(cantidad, idCuenta, idProd ) VALUES ('50', '66', '65')";	
	//echo $query;
	if ($r['cantidad']>0){
		if($conn->query($query)=== TRUE){
			echo " A_A toda maye *";
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
