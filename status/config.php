<?php
	#############################
	# CONSTANTS					#
	#############################

	define('TABLE_LOCATIONS','locations');
	define('TABLE_LOCATIONS_RESOURCES','locations_resources');
	define('SESSION_LOGGED_IN','logged_in');
	define('DIR_ROOT','/srv/www/htdocs/gacc/gbcc/dispatch/id-eic/status/');
	define('WS_ROOT','//gacc.nifc.gov/gbcc/dispatch/id-eic/status/');

	#############################
	# GLOBAL VARIABLES			#
	#############################

	$location_pass	= 'EIIFC2016';

	$public_pages	= array(
						'login.php',
						'location-report.php'
					);

	$ics_types		= array(
						'Overhead',
						'Helicopter T1',
						'Helicopter T2',
						'Helicopter T3',
						'Aircraft (Other)',
						'Engine T3',
						'Engine T4',
						'Engine T6',
						'Equipment (Other)',
						'IA Module',
						'Crew T1',
						'Crew T2IA',
						'Crew T2',
						'Crew (Other)',
					);

	#############################
	# LOCATION FUNCTIONS		#
	#############################

	function location_is_valid($location_id=0)
	{
		global $locations;

		return isset($locations[$location_id]);

	}

	function locations_all_get_data()
	{
global $dbc;
		$qr = mysqli_query($dbc,'SELECT 
							* 
						FROM 
							'.TABLE_LOCATIONS);

		while($rs = mysqli_fetch_assoc($qr))
			$locations[$rs['location_id']] = $rs;

		foreach($locations as $location_id => $data)
		{
			$data['resources'] = locations_get_resources($location_id);
			$locations[$location_id] = $data;
		}

		return $locations;
	}

	function locations_get_data($location_id=0)
	{
global $dbc;
		if(!location_is_valid($location_id))
			return array();

		$qr = mysqli_query($dbc,'SELECT 
							* 
						FROM 
							'.TABLE_LOCATIONS.' 
						WHERE 
							location_id = '.(int)$location_id);

		if(mysqli_num_rows($qr) == 0)
			return array('updated_date' => 'Never');

		$data = mysqli_fetch_assoc($qr);
		$data['resources'] = locations_get_resources($data['location_id']);

		return $data;
	}

	function locations_get_resources($location_id=0)
	{
global $dbc;
		$resources = array();

		$qr = mysqli_query($dbc,'SELECT 
								* 
							FROM 
								'.TABLE_LOCATIONS_RESOURCES.' 
							WHERE 
								location_id = '.(int)$location_id.' 
							ORDER BY 
								icef_type ASC');

		while($rs = mysqli_fetch_assoc($qr))
		{
			if(!isset($data['resources'][strtolower($rs['icef_type'])]))
				$data['resources'][strtolower($rs['icef_type'])] = array();

			$resources[strtolower($rs['icef_type'])][] = $rs;
		}

		return $resources;
	}

	function locations_get_updated_date($location_id=0,$format='m/d/Y g:i a')
	{
global $dbc;
		$qr = mysqli_query($dbc,'SELECT 
								updated_date 
							FROM 
								'.TABLE_LOCATIONS.' 
							WHERE 
								location_id = '.(int)$location_id);

		if(mysqli_num_rows($qr) == 0)
			return 'Never';

		$rs = mysqli_fetch_assoc($qr);

		return date($format,strtotime($rs['updated_date']));

	} # End function locations_get_updated_date()

	function locations_update_data($location_id=0,$data=array())
	{
global $dbc;
		// Validate location
		if(!location_is_valid($location_id))
			return array('result' => 'error', 'message' => 'Invalid location.');

		// Check for existing record
		$qr = mysqli_query($dbc,'SELECT 
								location_id 
							FROM 
								'.TABLE_LOCATIONS.' 
							WHERE 
								location_id = '.(int)$location_id.' 
							LIMIT 
								1');

		// Create new record
		if(mysqli_num_rows($qr) == 0)
		{
			mysqli_query($dbc,'INSERT INTO 
							'.TABLE_LOCATIONS.' 
						(
							location_id,
							name,
							preparedness,
							fire_danger,
							updated_date
						) 
						VALUES(
							'.(int)$location_id.',
							"'.mysqli_real_escape_string($dbc,$data['name']).'",
							"'.mysqli_real_escape_string($dbc,$data['preparedness']).'",
							"'.mysqli_real_escape_string($dbc,$data['fire_danger']).'",
							NOW()
						)');
		}
		// Update existing record
		else
		{
			mysqli_query($dbc,'UPDATE 
							'.TABLE_LOCATIONS.' 
						SET 
							name = "'.mysqli_real_escape_string($dbc,$data['name']).'",
							preparedness = "'.mysqli_real_escape_string($dbc,$data['preparedness']).'",
							fire_danger = "'.mysqli_real_escape_string($dbc,$data['fire_danger']).'",
							updated_date = NOW()
						WHERE 
							location_id = '.(int)$location_id.' 
						LIMIT 
						1');
		}

		// Manage resources
		foreach($data['resources'] as $resource)
		{
			if($resource['resource'] == '')
				continue;

			if(isset($resource['delete']) && is_numeric($resource['resources_id']))
			{
				mysqli_query($dbc,'DELETE FROM 
								'.TABLE_LOCATIONS_RESOURCES.' 
							WHERE 
								resources_id = '.(int)$resource['resources_id'].' 
								AND 
								location_id = '.(int)$location_id.' 
							LIMIT 
								1');
			}
			else if(is_numeric($resource['resources_id']))
			{
				mysqli_query($dbc,'UPDATE 
								'.TABLE_LOCATIONS_RESOURCES.' 
							SET 
								resource = "'.mysqli_real_escape_string($dbc,$resource['resource']).'",
								icef_type = "'.mysqli_real_escape_string($dbc,$resource['icef_type']).'",
								leader_name = "'.mysqli_real_escape_string($dbc,$resource['leader_name']).'",
								status = "'.mysqli_real_escape_string($dbc,$resource['status']).'",
								location = "'.mysqli_real_escape_string($dbc,$resource['location']).'",
								remarks = "'.mysqli_real_escape_string($dbc,$resource['remarks']).'",
								updated_date = NOW()
							WHERE 
								resources_id = '.(int)$resource['resources_id'].' 
								AND 
								location_id = '.(int)$location_id.' 
							LIMIT 
								1');
			}
			else
			{
				mysqli_query($dbc,'INSERT INTO 
								'.TABLE_LOCATIONS_RESOURCES.' 
							(
								location_id,
								resource,
								icef_type,
								leader_name,
								status,
								location,
								remarks,
								updated_date
							) 
							VALUES(
								'.(int)$location_id.',
								"'.mysqli_real_escape_string($dbc,$resource['resource']).'",
								"'.mysqli_real_escape_string($dbc,$resource['icef_type']).'",
								"'.mysqli_real_escape_string($dbc,$resource['leader_name']).'",
								"'.mysqli_real_escape_string($dbc,$resource['status']).'",
								"'.mysqli_real_escape_string($dbc,$resource['location']).'",
								"'.mysqli_real_escape_string($dbc,$resource['remarks']).'",
								NOW()
							)');
			}
		}

		// Return successful
		return array('result' => 'success', 'message' => 'Location was updated.');

	}

	function locations_login($password='')
	{
		global $location_pass;

		if(trim($password) == '' || $password !== $location_pass)
			return false;

		$_SESSION[SESSION_LOGGED_IN] = true;

		// Push to index (select location)
		die(header('Location: '.WS_ROOT.'index.php'));
		exit;

	}

	function locations_logout()
	{
		unset($_SESSION[SESSION_LOGGED_IN]);

		// Push to login
		die(header('Location: '.WS_ROOT.'login.php'));
		exit;

	}

	#############################
	# MISCELEANOUS FUNCTIONS	#
	#############################

	function template_wrap($buffer='')
	{
		// Global template variables are set in the content files
		global $title;

                chdir(dirname($_SERVER['SCRIPT_FILENAME']));
		// Give user logout link
		$logout_link = isset($_SESSION[SESSION_LOGGED_IN]) ? '<a href="logout.php" onclick="return confirm(\'Are you sure you want to logout?\');">Logout</a>' : '';

		// Replace variable place hoders in template and return
		return str_replace(array('%title%','%content%','%logout_link%'),array($title,$buffer,$logout_link),file_get_contents(DIR_ROOT.'template.php'));

	}

	#############################
	# INITIALIZATION			#
	#############################

	session_start();
	ob_start('template_wrap');

	// Make sure user is logged in where required
	if(!in_array(basename($_SERVER['PHP_SELF']),$public_pages) && !isset($_SESSION[SESSION_LOGGED_IN]))
		die(header('Location: login.php'));

	$dbc = mysqli_connect('nn550db001.nwcg.gov','gb_id_eic','sh0UldB3f*n!','gb_ideic') or die('Failed to connect to database server.');
	// Get all locations
	$qr = mysqli_query($dbc,'SELECT 
						location_id, 
						name 
					FROM 
						'.TABLE_LOCATIONS.' 
					ORDER BY 
						location_id');

	$locations = array();
	
	while($rs = mysqli_fetch_assoc($qr))
		$locations[$rs['location_id']] = $rs['name'];

	// Make sure locations table is setup
	mysqli_query($dbc,'CREATE TABLE IF NOT EXISTS 
					'.TABLE_LOCATIONS.' 
				(
					location_id SMALLINT(2) NOT NULL DEFAULT \'0\',
					preparedness VARCHAR(100) NULL DEFAULT \'\',
					fire_danger VARCHAR(100) NULL DEFAULT \'\',
					updated_date DATETIME NOT NULL,
					PRIMARY KEY (`location_id`)
				) 
				ENGINE=MyISAM DEFAULT CHARSET=latin1');

	// Make sure locations table is setup
	mysqli_query($dbc,'CREATE TABLE IF NOT EXISTS 
					'.TABLE_LOCATIONS_RESOURCES.' 
				(
					resources_id INT(6) NOT NULL AUTO_INCREMENT,
					location_id SMALLINT(2) NOT NULL DEFAULT \'0\',
					resource VARCHAR(100) NULL DEFAULT \'\',
					icef_type VARCHAR(100) NULL DEFAULT \'\',
					leader_name VARCHAR(100) NULL DEFAULT \'\',
					status CHAR(2) NULL DEFAULT \'\',
					location VARCHAR(150) NULL DEFAULT \'\',
					remarks text NULL DEFAULT \'\',
					updated_date DATETIME NOT NULL,
					PRIMARY KEY (`resources_id`)
				) 
				ENGINE=MyISAM DEFAULT CHARSET=latin1');
?>
