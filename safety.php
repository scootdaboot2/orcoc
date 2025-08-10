<!DOCTYPE html>
<html  lang="en">
<head>
<meta charset="utf-8" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" href="./icons/favicon.ico" type="image/vnd.microsoft.icon" />
<script src="https://code.jquery.com/jquery-3.6.3.min.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@3.4.0/lumen/bootstrap.css">
<link rel="stylesheet" media="all" href="https://cdn.jsdelivr.net/npm/@unicorn-fail/drupal-bootstrap-styles@0.0.2/dist/3.4.0/8.x-3.x/drupal-bootstrap-lumen.css" integrity="sha512-DZjeOrDxfNgzf5Du63D3Se2wCMQrnAPlfnvqqpFXMRK0zCljPMK/RB5WllFw4w1Vm62/jFeNNeY83luff4a7uw==" crossorigin="anonymous" />
<link rel="stylesheet" href="./styles/index.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.js" integrity="sha256-29KjXnLtx9a95INIGpEvHDiqV/qydH2bBx0xcznuA6I=" crossorigin="anonymous"></script>
<script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" defer crossorigin="anonymous"></script>
<script src="https://use.fontawesome.com/releases/v5.0.13/js/v4-shims.js" defer crossorigin="anonymous"></script>
</head>
<body class="path-frontpage has-glyphicons">

<a href="#main-content" class="visually-hidden focusable skip-link">Skip to main content</a>

<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
	<?php include("./include/header.html"); ?>

	<div role="main" class="main-container container-fluid js-quickedit-main-content">
		<div class="row">
			<?php include("./admin/safety.html"); ?>
			<?php include("./include/current.html"); ?>
			<?php include("./include/leftmenu.html"); ?>
		</div>
	</div>

	<?php include("./include/footer.html"); ?>
</div>



</body>
</html>