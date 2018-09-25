<?php

	if(!isset($_GET['method'])) {
		echo "Parameter 'method' not provided.";
		exit;
	}

	//Cache directory
	$CACHE_DIR = "cache";

	function get_content($file, $url, $minutes = 1) {
		//vars
		$current_time = time();
		$expire_time = $minutes * 60;
		$file_time = filemtime($file);
		
		if(file_exists($file) && ($current_time - $expire_time < $file_time)) {
			
			//echo 'returning from cached file';
			return file_get_contents($file);
		}

		else {
			$content = get_url($url);

			// Remove the first character (always '{')
			$content = substr($content, 1);

			$result = '{"cachetime":"'.date("D M j G:i:s T Y", time()).'",';
			$result .= $content;

			file_put_contents($file,$result);

			//echo 'retrieved fresh from '.$url.':: '.$content;
			return $result;
		}
	}

	function get_url($url) {

		// Root domain API to call
		$ROOTDOMAIN = "https://jotihunt.net/api/1.0/";

		// create curl resource 
		$ch = curl_init(); 

		// set url 
		curl_setopt($ch, CURLOPT_URL, $ROOTDOMAIN.$url);

		//return the transfer as a string 
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

		// $output contains the output string 
		$output = curl_exec($ch); 

		// close curl resource to free up system resources 
		curl_close($ch);

		return $output;	
	}

	// retrieve method call from URL
	$method = $_GET['method'];
	$CACHE_FILE_NAME = $CACHE_DIR."/".$method.".txt";

	$result = get_content($CACHE_FILE_NAME,
		$method,
		1);
	
	// return as JSON
	header('Content-Type: application/json; charset=utf8');
	echo $result;

?>