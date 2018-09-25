<?php

	require_once __DIR__ . '/../config.php';
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	
	$finalResult = "";

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		if( isset($_POST['hint_id']) ) {
			// Retrieve single coordinate
			$hint_id = $_POST['hint_id'];

			$storedDataQuery = $db->query("SELECT update_date, data FROM coordinates WHERE hint_id = '$hint_id'");
	        $storedData = new stdClass;
	        while ($result = $storedDataQuery ->fetch_object()) {
				$storedData->update_date = $result->update_date;
				$storedData->data = $result->data;
	        }

	        $finalResult = json_encode($storedData);

		} else {
			// Retrieve all coordinates
			$storedDataQuery = $db->query("SELECT hint_name, hint_date, hint_time, solve_time, data FROM coordinates");
			$storedData = array();
			
			while ($result = $storedDataQuery ->fetch_object()) {
				$obj = new stdClass;
				$obj->hint_name = $result->hint_name;
				$obj = new stdClass;
				$obj->hint_name = $result->hint_name;
				$obj->hint_date = $result->hint_date;

				$obj->hint_date = $result->hint_date;
				$obj->hint_time = $result->hint_time;
				$obj->solve_time = $result->solve_time;
				$obj->data = $result->data;
	            array_push($storedData, $obj);
	        }

	        $finalResult = json_encode($storedData);
		}
	}

	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo $finalResult;

?>