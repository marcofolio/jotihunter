<?php

	require_once __DIR__ . '/../config.php';

	$hint_id = $_POST["hint_id"];
	$prev_update_date = $_POST["prev_update_date"];
	$update_date = $_POST["update_date"];
	$hint_name = $_POST["hint_name"];
	$hint_date = $_POST["hint_date"];
	$hint_time = $_POST["hint_time"];
	$solve_time = $_POST["solve_time"];
	$data = $_POST["data"];

	$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

	if(!$db) {
		echo 'ERROR: Could not connect to the database.';
	} else {

		// Check if we already have stored this coordinate
        $storedIdQuery = $db->query("SELECT id, update_date FROM coordinates WHERE hint_id = '$hint_id'");
        $storedId = '0';
        $storedDate = '';
        while ($result = $storedIdQuery ->fetch_object()) {
            $storedId = $result->id;
            $storedDate = $result->update_date;
        }

        if($storedId != '0') {

        	if($storedDate != $prev_update_date) {
        		echo "FAIL: Iemand anders heeft coordinaten al eerder opgeslagen. Bewaar ze, ververs deze pagina en probeer opnieuw.";
        		exit();
        	}

        	$result = $db->query("UPDATE coordinates SET data = '$data', solve_time = '$solve_time', update_date = '$update_date' WHERE hint_id = '$hint_id'");
        	if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}

			echo "SUCCES: Coordinaten aangepast. Ga terug naar de kaart.";
        } else {
        	// We need to store a new coordinate
        	$result = $db->query("INSERT INTO coordinates (hint_id, update_date, hint_name, hint_date, hint_time, solve_time, data) VALUES ('$hint_id', '$update_date', '$hint_name', '$hint_date', '$hint_time', '$solve_time', '$data')");
        	if (!$result) {
			   printf("%s\n", $mysqli->error);
			   exit();
			}

			echo "SUCCES: Coordinaten toegevoegd. Ga terug naar de kaart.";
        }
	}

?>