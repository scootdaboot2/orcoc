<?php
	// Include goodies
	include('config.php');
	// Set page title
	$title = 'Select a Location';
?>
<p class="center"><a href="location-report.php">View All Reports</a></p>
<table width="80%" cellpadding="5" cellspacing="0" border="1" align="center" style="border-collapse:collapse;border:1px solid #d7d7d7;">
	<tr>
	<?php
		// Output locations
		$rows	= 2;
		$i 		= 0;

		foreach($locations as $location_id => $name)
		{
			if($i == $rows)
			{
				echo '</tr><tr>';
				$i = 0;
			}
	?>
		<td width="<?php echo ceil(100/$rows); ?>%" align="center">
			<strong><?php echo $name; ?></strong>
			<br /><br />
			<a href="location-update.php?location_id=<?php echo $location_id; ?>">Update Record</a> &middot; <a href="location-report.php?location_id=<?php echo $location_id; ?>">View Report</a>
			<br /><br />
			Last updated: <?php echo locations_get_updated_date($location_id); ?>
		</td>
	<?php
			++$i;
		}
	?>
	</tr>
</table>
