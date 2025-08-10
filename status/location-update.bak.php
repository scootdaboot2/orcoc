<?php
	// Include goodies
	include('config.php');

	// Validate location
	if(!isset($_GET['location_id']) || !location_is_valid($_GET['location_id']))
	{
		die('here');
		die(header('Location: '.WS_ROOT.'index.php?error=Invalid+location+id.'));
	}

	// Process form
	if($_POST)
	{
		$updated = locations_update_data($_GET['location_id'],$_POST);

		if($updated['result'] == 'error')
			$location_data = $_POST;

		echo '<p class="form_error">'.$updated['message'].'</p>';
	}

	// Pull location data
	if(!isset($location_data))
		$location_data = locations_get_data($_GET['location_id']);

	// Set page title
	$title = 'Update location "'.$locations[$_GET['location_id']].'"';
?>
<form method="post" action="<?php echo $_SERVER['REQUEST_URI']; ?>">
	<table>
		<tr>
			<td><strong>Name:</strong></td>
			<td><input type="text" name="name" value="<?php echo $location_data['name']; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td><strong>Preparedness:</strong></td>
			<td><input type="text" name="preparedness" value="<?php echo $location_data['preparedness']; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td><strong>Fire Danger:</strong></td>
			<td><input type="text" name="fire_danger" value="<?php echo $location_data['fire_danger']; ?>" class="input medium" /></td>
		</tr>
	</table>
	<hr size="1" />
	<p class="bold">Create New Resource:</p>
	<?php
		$data = isset($location_data['new']) ? $location_data['new'] : false;
	?>
	<table>
		<tr>
			<td width="120">Resource: <span style="color: red;">*</span></td>
			<td><input maxlength="100" type="text" name="resources[new][resource]" value="<?php echo $data ? $data['resource'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td>ICS Type:</td>
			<td>
				<select name="resources[new][icef_type]" class="select">
					<?php
						foreach($ics_types as $type)
							echo '<option value="'.$type.'"'.(($type == $data['icef_type']) ? ' selected="selected"' : '').'>'.$type.'</option>';
					?>
				</select>
			</td>
		</tr>
		<tr>
			<td>Leader Name:</td>
			<td><input maxlength="100" type="text" name="resources[new][leader_name]" value="<?php echo $data ? $data['leader_name'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td>Status:</td>
			<td>
				<select name="resources[new][status]" class="select">
					<option value="">Select one</option>
					<option value="A"<?php echo $data && $data['status'] == 'A' ? ' selected' : ''; ?>>A - Available</option>
					<option value="AZ"<?php echo $data && $data['status'] == 'AZ' ? ' selected' : ''; ?>>AZ - Available On Zone</option>
					<option value="AO"<?php echo $data && $data['status'] == 'AO' ? ' selected' : ''; ?>>AO - Available Off Zone</option>
					<option value="C"<?php echo $data && $data['status'] == 'C' ? ' selected' : ''; ?>>C - Committed</option>
					<option value="U"<?php echo $data && $data['status'] == 'U' ? ' selected' : ''; ?>>U - Unavailable</option>
					<option value="NR"<?php echo $data && $data['status'] == 'NR' ? ' selected' : ''; ?>>NR - No Report</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Location:</td>
			<td><input maxlength="150" type="text" name="resources[new][location]" value="<?php echo $data ? $data['location'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td valign="top">Remarks:</td>
			<td><textarea name="resources[new][remarks]" class="medium" style="height: 75px;"><?php echo $data ? $data['remarks'] : ''; ?></textarea></td>
		</tr>
	</table>
	<hr size="1" />
	<input type="submit" value="Create Resource" class="button" />
	<hr size="1" />
	<?php
		# Output resources fields
		$i = 0;
		foreach($location_data['resources'] as $icf_type => $resources)
		{			
			foreach($resources as $key => $data)
			{
				$i = !isset($i) ? 1 : $i+1;
			
	?>
	<p class="bold">Update Resources:</p>
	<input type="hidden" name="resources[<?php echo $i; ?>][resources_id]" value="<?php echo $data ? $data['resources_id'] : ''; ?>" />
	<table>
		<?php if($data) { ?>
		<!--<tr>
			<td>Last Updated:</td>
			<td><?php echo date('m/d/Y g:i a',strtotime($data['updated_date'])); ?></td>
		</tr>-->
		<tr>
			<td>Delete</td>
			<td><input type="checkbox" name="resources[<?php echo $i; ?>][delete]" value="1" /></td>
		</tr>
		<?php } ?>
		<tr>
			<td width="120">Resource: <span style="color: red;">*</span></td>
			<td><input maxlength="100" type="text" name="resources[<?php echo $i; ?>][resource]" value="<?php echo $data ? $data['resource'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td>ICS Type:</td>
			<td>
				<select name="resources[<?php echo $i; ?>][icef_type]" class="select">
					<?php
						foreach($ics_types as $type)
							echo '<option value="'.$type.'"'.(($type == $data['icef_type']) ? ' selected="selected"' : '').'>'.$type.'</option>';
					?>
				</select>
				<!--<input maxlength="100" type="text" name="resources[<?php echo $i; ?>][icef_type]" value="<?php echo $data ? $data['icef_type'] : ''; ?>" class="input medium" />-->
			</td>
		</tr>
		<tr>
			<td>Leader Name:</td>
			<td><input maxlength="100" type="text" name="resources[<?php echo $i; ?>][leader_name]" value="<?php echo $data ? $data['leader_name'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td>Status:</td>
			<td>
				<select name="resources[<?php echo $i; ?>][status]" class="select">
					<option value="">Select one</option>
					<option value="A"<?php echo $data && $data['status'] == 'A' ? ' selected' : ''; ?>>A - Available</option>
					<option value="AZ"<?php echo $data && $data['status'] == 'AZ' ? ' selected' : ''; ?>>AZ - Available On Zone</option>
					<option value="AO"<?php echo $data && $data['status'] == 'AO' ? ' selected' : ''; ?>>AO - Available Off Zone</option>
					<option value="C"<?php echo $data && $data['status'] == 'C' ? ' selected' : ''; ?>>C - Committed</option>
					<option value="U"<?php echo $data && $data['status'] == 'U' ? ' selected' : ''; ?>>U - Unavailable</option>
					<option value="NR"<?php echo $data && $data['status'] == 'NR' ? ' selected' : ''; ?>>NR - No Report</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>Location:</td>
			<td><input maxlength="150" type="text" name="resources[<?php echo $i; ?>][location]" value="<?php echo $data ? $data['location'] : ''; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td valign="top">Remarks:</td>
			<td><textarea name="resources[<?php echo $i; ?>][remarks]" class="medium" style="height: 75px;"><?php echo $data ? $data['remarks'] : ''; ?></textarea></td>
		</tr>
	</table>
	<hr size="1" />
	<?php
			}
		}
	?>
	<input type="submit" value="Update Resources" class="button" />
</form>