<?php

	require_once __DIR__ . '/../config.php';

	$car_name = $_POST["car_name"];
	
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		// Check if we already have stored this name
        $storedNameQuery = $db->query("SELECT name FROM cars WHERE name = '$car_name'");
        $storedName = '';
        while ($result = $storedNameQuery ->fetch_object()) {
            $storedName = $result->name;
        }

        if($storedName != '') {
        	echo "FAIL: Naam '".$storedName."' al aanwezig in de database.";
        } else {
        	$result = $db->query("INSERT INTO cars (name) VALUES ('$car_name')");
        	if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}

			echo "SUCCES: Auto toegevoegd.";
        }
	}

?>