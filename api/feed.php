<?php
	require_once("api.php");
	header('Content-Type: application/json');

	$api = new HearthisApi();
	$data = $api->getSound('latroyon');

	echo $data;
 ?>