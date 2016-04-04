<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>jQuery UI Accordion - Default functionality</title>
  <link rel="stylesheet" href="jquery-ui.css">
  <script src="jquery-1.10.2.js"></script>
  <script src="jquery-ui.js"></script>
  <link rel="stylesheet" href="http://jqueryui.com/accordion/resources/demos/style.css">
  <script>
  $(function() {
    $( ".accordion" ).accordion();
  });
  </script>
</head>
<body>

	<?php

  echo  "<div class=\"accordion\">";


	for($i=1;$i<=7;$i++){
	echo "<h3>Titulo".$i."</h3>
  			 <div>
    				<p>
    					".$i."Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
    					ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
    					amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
    					odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
    				</p>
  				</div>
			";
		}
	?>
</div>
 
</body>
</html>