<!DOCTYPE html>
<html>
	<head>
		<!--CSS-->
        <link rel="stylesheet" type="text/css" href="js/libs/bootswatch/simplex/bootstrap.min.css">
        <link rel="stylesheet" href="js/libs/rangeslider/dist/rangeslider.css">
        <link rel="stylesheet" type="text/css" href="css/app.css">
        <link rel="stylesheet" type="text/css" href="css/player.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta charset="UTF-8">
        <script data-main="js/config.js" src="js/libs/requirejs/require.js"></script>

        <title>LATROYON</title>

    </head>
    <body class="page-<?php echo $_GET['page']; ?>">

        <?php if (isset($_GET['page']) && file_exists('pages/' . $_GET['page'] . '.php')): ?>
            <?php include 'pages/' . $_GET['page'] . '.php'; ?>
        <?php else: ?>
            <?php include 'pages/index.php'; ?>
        <?php endif ?>

        <div class="container">
            <ul class="social-network">
                <li><a href="http://www.mixcloud.com/latroyonsquare/" class="icon-mixcloud" target="blank"></a></li>
                <li><a href="https://soundcloud.com/latroyon" class="icon-soundcoud" target="blank"></a></li>
                <li><a href="https://www.facebook.com/LaTroyon?fref=ts" class="icon-facebook" target="blank"></a></li>
            </ul>
        </div>

    </body>
</html>
