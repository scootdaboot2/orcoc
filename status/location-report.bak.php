<?php
	// Include goodies
	include('config.php');

	// Are we showing one or all?
	if(!isset($_GET['location_id']) || !location_is_valid($_GET['location_id']))
	{
		$title = 'Daily Resources Status Summary';
		$locations_data	= array();

		foreach($locations as $location_id => $name)
			$locations_data[$location_id] = locations_get_data($location_id);
	}
	else
	{
		$locations_data[$_GET['location_id']] = locations_get_data($_GET['location_id']);
		$title = 'Location report for "'.$locations[$_GET['location_id']].'"';
	}

	// Output location data
	foreach($locations_data as $locations_id => $data)
	{
?>
<p class="location_heading"><?php echo strtoupper($locations[$locations_id]) ?></p>
<table width="100%" cellpadding="5" cellspacing="0" border="1" style="border-collapse: collapse; border:1px solid #ccc; margin-bottom: 25px;">
	<tr style="background: #dbe3eb;" class="bold">
		<td colspan="2">Last Modified: <?php echo $data['updated_date'] == 'Never' ? $data['updated_date'] : date('m/d/Y g:i a',strtotime($data['updated_date'])); ?></td>
		<td colspan="2">Preparedness: <?php echo $data['preparedness']; ?></td>
		<td colspan="2">Fire Danger: <?php echo $data['fire_danger']; ?></td>
	</tr>
	<?php
		$i = 1;
		if(sizeof($data['resources']) == 0)
		{
	?>
	<tr>
		<td colspan="6">No resources were found.</td>
	</tr>
	<?php
		}
		else
		{
	?>
	<tr class="bold">
		<td width="15%">Resource</td>
		<td width="15%">ICS Type</td>
		<td width="15%">Leader Name</td>
		<td width="15%">Status</td>
		<td width="15%">Location</td>
		<td width="*%">Remarks</td>
	</tr>
	<?php
			foreach($data['resources'] as $resource)
			{
				if($i > 2) $i = 1;
	?>
	<tr style="background: <?php echo $i==1?'#f5f0ee':'#ffffff'; ?>;">
		<td><?php echo $resource['resource']; ?></td>
		<td><?php echo $resource['icef_type']; ?></td>
		<td><?php echo $resource['leader_name']; ?></td>
		<td><?php echo $resource['status']; ?></td>
		<td><?php echo $resource['location']; ?></td>
		<td><?php echo $resource['remarks']; ?></td>
	</tr>
	<?php
				++$i;
			}
		}
	?>
</table>
<?php
	}
?>