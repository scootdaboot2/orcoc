<?php
	// Include goodies
	include('config.php');
	
	$param="";

	// Are we showing one or all?
	if(!isset($_GET['location_id']) || !location_is_valid($_GET['location_id']))
	{
		$title = 'Daily Resources Status Summary';
		$locations_data	= locations_all_get_data();
	}
	else
	{
		$locations_data[$_GET['location_id']] = locations_get_data($_GET['location_id']);
		$title = 'Location report for "'.$locations[$_GET['location_id']].'"';
		 $param="location_id=".$_GET['location_id']."&";
	}
	?>
    
    
                <p>
		<table width="100%" border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; border:1px solid #ccc;">
          <tr>
            <td bgcolor="#dbe3eb"><a href="location-report.php?<?=$param ?>view_status=A"><strong>A</strong> - Available</a>, <a href="location-report.php?<?=$param ?>view_status=AZ"><strong>AZ</strong> - Available On Zone</a>, <a href="location-report.php?<?=$param ?>view_status=AO"><strong>AO</strong> - Available Off Zone</a>, <a href="location-report.php?<?=$param ?>view_status=C"><strong>C</strong> - Committed</a>, <a href="location-report.php?<?=$param ?>view_status=U"><strong>U</strong> - Unavailable</a>, <a href="location-report.php?<?=$param ?>view_status=NR"><strong>NR</strong> - No Report</a>, <a href="location-report.php?<?=$param ?>">Clear Filter</a></td>
          </tr>
    </table>
               </p> 

    
    <?php

	// Output location data
	foreach($locations_data as $locations_id => $data)
		{
		$go_ahead=1;
		if (($_GET['view_status']!="")&&($param=="")){
			$go_ahead=0;
			foreach($data['resources'] as $icef_type => $resource_group)
				{
				foreach($resource_group as $resource)
					{
					if($resource['status']==$_GET['view_status']){
						$go_ahead=1;
					};
				};
			};
		};
		
		if($go_ahead==1){
?>

<p class="location_heading"><?php echo $data['name']; ?></p>
<table width="100%" cellpadding="5" cellspacing="0" border="1" style="border-collapse: collapse; border:1px solid #ccc; margin-bottom: 25px;">
	<tr style="background: #dbe3eb;" class="bold">
		<td colspan="2">Last Modified: <?php echo $data['updated_date'] == 'Never' ? $data['updated_date'] : date('m/d/Y g:i a',strtotime($data['updated_date'])); ?> (Pacific Time)</td>
		<td colspan="2">Planning Level: <?php echo $data['preparedness']; ?></td>
		<td colspan="2">Duty Officer: <?php echo $data['fire_danger']; ?></td>
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
			foreach($data['resources'] as $icef_type => $resource_group)
			{
	?>
	<tr class="bold" style="background: #dbe3eb;">
		<td colspan="6"><?php echo ucwords(strtolower($icef_type)); ?></td>
	</tr>
	<?php
				foreach($resource_group as $resource)
				{
					if(($resource['status']==$_GET['view_status'])||($_GET['view_status']=="")){
						if($i > 2) $i = 1;
	?>
	<tr style="background: <?php echo $i==1?'#f5f0ee':'#ffffff'; ?>;">
		<td><?php echo $resource['resource']; ?></td>
		<td><?php echo ucwords(strtolower($resource['icef_type'])); ?></td>
		<td><?php echo $resource['leader_name']; ?></td>
		<td class="center"><?php echo $resource['status']; ?></td>
		<td><?php echo $resource['location']; ?></td>
		<td><?php echo $resource['remarks']; ?></td>
	</tr>
	<?php
						++$i;
					}/*if(($resource['status']==$_GET['view_status'])||($_GET['view_status']=="")){*/
				}/*foreach($resource_group as $resource)*/
			}/*foreach($data['resources'] as $icef_type => $resource_group)*/
		}/*if(sizeof($data['resources']) == 0)*/
		
		
		
		
	} /*if(go_ahead=1)*/
	?>
</table>
<?php
	}
?>
