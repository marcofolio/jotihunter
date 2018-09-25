<?php

	require_once __DIR__ . '/../config.php';
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	$finalResult = "";

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		$storedDataQuery = $db->query("SELECT id, name, time, lat, lng FROM hunts");
		$storedData = array();
		
		while ($result = $storedDataQuery ->fetch_object()) {
			$obj = new stdClass;
			$obj->id = $result->id;
			$obj->name = $result->name;
			
			if($result->time != "") {
				$obj->time = $result->time;
				$obj->lat = $result->lat;
				$obj->lng = $result->lng;
			}

            array_push($storedData, $obj);
        }

        $finalResult = json_encode($storedData);
	}

	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo $finalResult;

?>