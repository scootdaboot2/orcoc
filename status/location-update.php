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
		<p><table width="100%" border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; border:1px solid #ccc;">
          <tr>
            <td bgcolor="#dbe3eb"><strong>A</strong> - Available, <strong>AZ</strong> - Available On Zone, <strong>AO</strong> - Available Off Zone, <strong>C</strong> - Committed, <strong>U</strong> - Unavailable, <strong>NR</strong> - No Report</td>
          </tr>
    </table></p>

<form method="post" action="<?php echo $_SERVER['REQUEST_URI']; ?>">
	<table>
		<tr>
			<td><strong>Name:</strong></td>
			<td><input type="text" name="name" value="<?php echo $location_data['name']; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td><strong>Planning Level:</strong></td>
			<td><input type="text" name="preparedness" value="<?php echo $location_data['preparedness']; ?>" class="input medium" /></td>
		</tr>
		<tr>
			<td><strong>Duty Officer:</strong></td>
			<td><input type="text" name="fire_danger" value="<?php echo $location_data['fire_danger']; ?>" class="input medium" /></td>
		</tr>
	</table>
	<hr size="1" />
	<p class="bold">Create New Resource:</p>
	<p class="bold">
	  <?php
		$data = isset($location_data['new']) ? $location_data['new'] : false;
	?>
	</p>
	<table width="800" border="1" cellspacing="0" cellpadding="3" style="border-collapse: collapse; border:1px solid #ccc; margin-bottom: 25px;">
      <tr style="background: #dbe3eb;">
        <strong><td>Resource: <span style="color: red;">*</span></td>
        <td width="90">ICS Type:</td>
        <td>Leader Name:</td>
        <td width="150">Status:</td>
        <td>Location:</td>
        <td>Remarks:</td></strong>
      </tr>
      <tr>
        <td><input maxlength="100" type="text" name="resources[new][resource]" value="<?php echo $data ? $data['resource'] : ''; ?>" class="input medium" /></td>
        <td><select name="resources[new][icef_type]" class="select">
					<?php
						foreach($ics_types as $type)
							echo '<option value="'.$type.'"'.(($type == $data['icef_type']) ? ' selected="selected"' : '').'>'.$type.'</option>';
					?>
		</select></td>
        <td><input maxlength="100" type="text" name="resources[new][leader_name]" value="<?php echo $data ? $data['leader_name'] : ''; ?>" class="input medium" /></td>
        <td><select name="resources[new][status]" class="select">
					<option value="">Select one</option>
					<option value="A"<?php echo $data && $data['status'] == 'A' ? ' selected' : ''; ?>>A - Available</option>
					<option value="AZ"<?php echo $data && $data['status'] == 'AZ' ? ' selected' : ''; ?>>AZ - Available On Zone</option>
					<option value="AO"<?php echo $data && $data['status'] == 'AO' ? ' selected' : ''; ?>>AO - Available Off Zone</option>
					<option value="C"<?php echo $data && $data['status'] == 'C' ? ' selected' : ''; ?>>C - Committed</option>
					<option value="U"<?php echo $data && $data['status'] == 'U' ? ' selected' : ''; ?>>U - Unavailable</option>
					<option value="NR"<?php echo $data && $data['status'] == 'NR' ? ' selected' : ''; ?>>NR - No Report</option>
		</select></td>
        <td><input maxlength="150" type="text" name="resources[new][location]" value="<?php echo $data ? $data['location'] : ''; ?>" class="input medium" /></td>
        <td><textarea name="resources[new][remarks]" class="medium" style="height: 35px; width: 150px;"><?php echo $data ? $data['remarks'] : ''; ?></textarea></td>
      </tr>
    </table>
	<p>
	  <input type="submit" value="Create Resource" class="button" />
  </p>
	<p>&nbsp;</p>
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
	<p>
	  <input type="hidden" name="resources[<?php echo $i; ?>][resources_id]" value="<?php echo $data ? $data['resources_id'] : ''; ?>" />
  </p>
	<table width="800" border="1" cellspacing="0" cellpadding="3" style="border-collapse: collapse; border:1px solid #ccc; margin-bottom: 25px;">
      <tr style="background: #dbe3eb;">
        <td><div align="center"><strong>Delete</strong></div></td>
        <td><strong>Resource: <span style="color: red;">*</span></strong></td>
        <td><strong>ICS Type:</strong></td>
        <td><strong>Leader Name:</strong></td>
        <td><strong>Status:</strong></td>
        <td><strong>Location:</strong></td>
        <td><strong>Remarks:</strong></td>
      </tr>
      <tr>
        <td width="50"><div align="center">
          <input type="checkbox" name="resources[<?php echo $i; ?>][delete]" value="1" />
        </div></td>
        <td><input maxlength="100" type="text" name="resources[<?php echo $i; ?>][resource]" value="<?php echo $data ? $data['resource'] : ''; ?>" class="input medium" /></td>
        <td width="90"><select name="resources[<?php echo $i; ?>][icef_type]" class="select">
					<?php
						foreach($ics_types as $type)
							echo '<option value="'.$type.'"'.(($type == $data['icef_type']) ? ' selected="selected"' : '').'>'.$type.'</option>';
					?>
				</select></td>
        <td><input maxlength="100" type="text" name="resources[<?php echo $i; ?>][leader_name]" value="<?php echo $data ? $data['leader_name'] : ''; ?>" class="input medium" /></td>
        <td width="150"><select name="resources[<?php echo $i; ?>][status]" class="select">
					<option value="">Select one</option>
					<option value="A"<?php echo $data && $data['status'] == 'A' ? ' selected' : ''; ?>>A - Available</option>
					<option value="AZ"<?php echo $data && $data['status'] == 'AZ' ? ' selected' : ''; ?>>AZ - Available On Zone</option>
					<option value="AO"<?php echo $data && $data['status'] == 'AO' ? ' selected' : ''; ?>>AO - Available Off Zone</option>
					<option value="C"<?php echo $data && $data['status'] == 'C' ? ' selected' : ''; ?>>C - Committed</option>
					<option value="U"<?php echo $data && $data['status'] == 'U' ? ' selected' : ''; ?>>U - Unavailable</option>
					<option value="NR"<?php echo $data && $data['status'] == 'NR' ? ' selected' : ''; ?>>NR - No Report</option>
				</select></td>
        <td><input maxlength="150" type="text" name="resources[<?php echo $i; ?>][location]" value="<?php echo $data ? $data['location'] : ''; ?>" class="input medium" /></td>
        <td><textarea name="resources[<?php echo $i; ?>][remarks]" class="medium" style="height: 35px; width: 150px;"><?php echo $data ? $data['remarks'] : ''; ?></textarea></td>
      </tr>
    </table>
	<p>
	  <?php
			}
		}
	?>
	  <input type="submit" value="Update Resources" class="button" />
</p>
</form>
