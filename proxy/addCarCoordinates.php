<?php
	
	require_once __DIR__ . '/../config.php';
	
	$id = $_POST["id"];
	$time = $_POST["time"];
	$lat = $_POST["lat"];
	$lng = $_POST["lng"];
	
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		$result = $db->query("UPDATE cars SET time = '$time', lat = '$lat', lng = '$lng' WHERE id = '$id'");
		if (!$result) {
		   printf("%s\n", $mysqli->error);
		   exit();
		}

		echo "SUCCES: Positie van auto aangepast.";

	}

?>