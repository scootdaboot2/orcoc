<?php
	// Include goodies
	include('config.php');

	// Set page title
	$title = 'Login';

	// Process form
	if($_POST)
	{
		if(!$logged_in = locations_login($_POST['password']))
			echo '<p class="form_error">Invalid password provided. Please try again.</p>';
	}
?>
<center>
	<a href="location-report.php">Location Reports</a>
	<br />
	<br />
	<form method="post" action="<?php echo $_SERVER['REQUEST_URI']; ?>">
		<input type="password" name="password" id="password" value="" /> 
		<input type="submit" value="Login" class="button" />
	</form>
</center>
