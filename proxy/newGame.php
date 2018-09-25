<?php

	require_once __DIR__ . '/../config.php';

	$password = $_POST["password"];
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		if($password == "newgame") {
			
			$result = $db->query("DELETE FROM coordinates");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			$result = $db->query("DELETE FROM hunts");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			echo "Nieuwe spelronde gestart";
		} else if($password == "clearall") {
			
			$result = $db->query("DELETE FROM cars");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			$result = $db->query("DELETE FROM coordinates");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			$result = $db->query("DELETE FROM hunts");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			echo "Alles is weg";
		} else {
			echo "Fout wachtwoord";
		}

	}

?>