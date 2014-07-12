<!DOCTYPE html>
<html>
	<head>
		<!--CSS-->
        <link rel="stylesheet" type="text/css" href="js/libs/bootswatch/simplex/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/app.css">
		<title>LATROYON</title>
	</head>
    <body>
        <!-- <header class="navbar navbar-static-top bs-docs-nav navbar-inverse">
          <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="../" class="navbar-brand">LATROYON</a>
            </div>
                <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Mpc</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
          </div>
        </header> -->
        <div class="hero">
            <div class="logo"></div>
        </div>

        <audio id="player" controls class="hidden">
            <source id="source" src="http://htstream4.net/f8d45af14216f424a37f457b28203337.mp3" type="audio/mpeg">
            Your browser does not support this audio format.
        </audio>

        <div class="container tracks">
            <div class="page-header text-center">
                <h1>Va y kiff ma gueule</h1>
            </div>
            <div id="tpl-track" class="hidden">
                <div class="col-md-2 tracks-item" data-id="{{id}}" data-stream="{{stream}}">
                    <img src="{{img}}" class="img-circle"/>
                </div>
            </div>
        </div>
        
        
        <div class="mpc" id="mpc">          
            
        </div>
        

        <div class="container">
            <div class="round">
                <input type="text" name="round" class="round" data-min="0" data-max="50" value="30" />
            </div>
        </div>



        <!--SCRIPT-->
        <!--Bower-->
        <script type="text/javascript" src="js/libs/jquery/dist/jquery.min.js"></script>
        <script type="text/javascript" src="js/libs/bootstrap/dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/libs/mustache/mustache.js"></script>

        <!--Custom-->
        <script type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript">
            $(function () {
                $('input.round').each(function () {
                    var $input = $(this);
                    var $div = $input.parent();

                    $circle = $('<canvas width="200px" height="200px"/>')
                    $div.append($circle);
                    var ctx = $circle[0].getContext('2d');


                    ctx.beginPath();
                    ctx.moveTo(0,0);
                    ctx.lineTo(50, 50);
                    ctx.lineTo(0, 150);

                    ctx.stroke();
                });
            });
        </script>

    </body>
</html>