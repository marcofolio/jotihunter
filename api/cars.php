<?php
	
	require_once __DIR__ . '/../config.php';
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	$finalResult = array();

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		// Check if we already have stored this name
        $storedNameQuery = $db->query("SELECT name, time, lat, lng FROM cars ORDER BY id");
        while ($result = $storedNameQuery ->fetch_object()) {
        	array_push($finalResult, $result);
        }
	}
	
	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo json_encode($finalResult);

?>