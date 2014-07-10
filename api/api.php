<?php

	class HearthisApi {

		public $_curl;
		const URL_GET_SOUND = 'http://api.hearthis.at';

		public function __construct(){

			// Get cURL resource
			$this->_curl = curl_init();

		}

		public function getSound($artist) {

			// Set some options - we are passing in a useragent too here
			curl_setopt_array($this->_curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => self::URL_GET_SOUND . '/' . $artist,
			));

			// Send the request & save response to $resp
			$resp = curl_exec($this->_curl);

			// Close request to clear up some resources
			curl_close($this->_curl);

			return $resp;

		}

	}
 ?>