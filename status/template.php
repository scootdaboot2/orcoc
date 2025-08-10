<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title>%title%</title>
		<style type="text/css">
			html,body{
				font-family: Tahoma, sans-serif;
				font-size:13px;
			}
			form{
				margin: 0;
				padding: 0;
			}
			fieldset{
				border: 0;
				margin: 5px 0;
				padding: 0;
			}
			fieldset div{
				margin-bottom: 5px;
			}
			label{
				cursor: pointer;
			}
			label.left{
				float: left;
				width: 125px;
				font-size: 14px;
				font-family: sans-serif;
			}
			.center{
				text-align: center;
			}
			.form_error{
				text-align: center;
				font-weight: bold;
				color: #FF0000;
			}
			/*.input{
				height: 16px;
			}*/
			.input, textarea, select {
				font-family: sans-serif;
				font-size: 12px;
				background-color: #F6F6F6;
				padding: 3px;
				border-color: #CCCCCC #333333 #333333 #CCCCCC;
				border-style: solid;
				border-width: 1px;
			}
			.button{
				font-family: sans-serif;
				font-size: 12px;
				background-color: #F6F6F6;
				padding: 2px;
				border-color: #CCCCCC #333333 #333333 #CCCCCC;
				border-style: solid;
				border-width: 1px;
				cursor: pointer;
			}
			.input:focus, .select:focus, .button:focus, textarea:focus, select:focus {
				border-color: #333333 #CCCCCC #CCCCCC #333333;
			}
			.medium{
				/*width: 90%;*/
			}
			.bold{
				font-weight: bold;
			}
			.location_heading {
				font-size: 18px;
				text-transform: uppercase;
			}
		</style>
	</head>
	<body>
		<h1>%title%</h1>
		<p>%logout_link% |  <a href="location-report.php">View All Reports</a> | <a href="index.php">Update
		  Reports</a> </p>
		<!--<table width="100%" border="1" cellspacing="0" cellpadding="5" style="border-collapse: collapse; border:1px solid #ccc;">
          <tr>
            <td bgcolor="#dbe3eb"><strong>A</strong> - Available, <strong>AZ</strong> - Available On Zone, <strong>AO</strong> - Available Off Zone, <strong>C</strong> - Committed, <strong>U</strong> - Unavailable, <strong>NR</strong> - No Report</td>
          </tr>
    </table>-->
		<p>%content%</p>
</body>
</html>
