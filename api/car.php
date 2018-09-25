<?php

	require_once __DIR__ . '/../config.php';

	if ( !isset($_GET['name']) || !isset($_GET['time']) || !isset($_GET['lat']) || !isset($_GET['lng']) ) {
		echo "Params incomplete.";
		exit();
	}


	$name = urldecode($_GET["name"]);
	$time = $_GET["time"];
	$lat = $_GET["lat"];
	$lng = $_GET["lng"];
	
	
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	$finalResult = "";

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		// Check if we already have stored this name
        $storedNameQuery = $db->query("SELECT name FROM cars WHERE name = '$name'");
        $storedName = '';
        while ($result = $storedNameQuery ->fetch_object()) {
            $storedName = $result->name;
        }

        if($storedName != '') {
        	
			$result = $db->query("UPDATE cars SET time = '$time', lat = '$lat', lng = '$lng' WHERE name = '$name'");
			if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}
			
			$finalResult = "{ 'Result' : 'CarUpdated' }";
			
        } else {
        	$result = $db->query("INSERT INTO cars (name, time, lat, lng) VALUES ('$name', '$time', '$lat', '$lng')");
        	if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}

			$finalResult = "{ 'Result' : 'CarAdded' }";
        }
	}
	
	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo $finalResult;

?>