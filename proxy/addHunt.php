<?php

	require_once __DIR__ . '/../config.php';

	$name = $_POST["name"];
	$time = $_POST["time"];
	$lat = $_POST["lat"];
	$lng = $_POST["lng"];
	
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		$result = $db->query("INSERT INTO hunts (lat, lng, name, time) VALUES ('$lat', '$lng', '$name', '$time')");
		if (!$result) {
		   printf("%s\n", $mysqli->error);
		   exit();
		}

		echo "SUCCES: Hunt toegevoegd. Ga terug naar de kaart.";

	}

?>