<!DOCTYPE html>
<html>
	<head>
		<!--CSS-->
        <link rel="stylesheet" type="text/css" href="js/libs/bootswatch/simplex/bootstrap.min.css">
        <link rel="stylesheet" href="js/libs/rangeslider/dist/rangeslider.css">
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <link rel="stylesheet" type="text/css" href="css/player.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

		<title>LATROYON</title>

	</head>
    <body class="page-<?php echo $_GET['page']; ?>">

        <?php if (isset($_GET['page']) && file_exists('pages/' . $_GET['page'] . '.php')): ?>
            <?php include 'pages/' . $_GET['page'] . '.php'; ?>
        <?php else: ?>
            <?php include 'pages/index.php'; ?>
        <?php endif ?>


        <script data-main="js/config.js" src="js/libs/requirejs/require.js"></script>
    </body>
</html>
