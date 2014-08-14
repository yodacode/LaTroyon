<header class="hero contact">
    <div class="navbar navbar-static-top bs-docs-nav navbar-inverse">
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
                <li class="hidden-xs"><a href="/" class="mpc-btn">Retour à l'accueil</a></li>
                <li class="divider"></li>
            </ul>
        </nav>
      </div>
    </div>
</header>
<div class="container">
    <div class="page-header">
        <h1>Contactez-nous !</h1>
    </div>
    <?php
        require_once("api/api.php");
        $api = new HearthisApi('array');
        $descr = $api->getDescription('latroyon');
     ?>
    <div class="col-md-6">
        <p><?php echo $descr; ?></p>
    </div>
    <div class="col-md-6 text-center">
        <img src="../img/logo-latroyon.png">
    </div>
</div>