<?php

	require_once __DIR__ . '/../config.php';

	$id = $_POST["id"];
	
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		$result = $db->query("DELETE FROM cars WHERE id = '$id'");
		if (!$result) {
		   printf("%s\n", $mysqli->error);
		   exit();
		}

		echo "SUCCES: Auto verwijderd.";

	}

?>