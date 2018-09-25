<?php
	
	require_once __DIR__ . '/../config.php';
	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	$finalResult = "";

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		// Check if we already have stored this name
        $storedNameQuery = $db->query("SELECT hint_id, hint_name, hint_time, data FROM coordinates ORDER BY id DESC LIMIT 1");
        while ($result = $storedNameQuery ->fetch_object()) {
            $finalResult = json_encode($result);
			break;
        }
	}
	
	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo $finalResult;

?>