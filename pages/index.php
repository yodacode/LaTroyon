<header class="hero">
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
                <li class="hidden-xs"><a href="#" class="mpc-btn">Mpc</a></li>
                <li class="divider"></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    </div>
    <div class="logo"></div>
</header>

<div id="player" class="player">
    <input type="range" min="0" max="100" value="0" data-rangeslider>
    <div class="player-info">
        <span class="player-output player-currenttime">0</span>
        <span class="player-output player-totaltime">0</span>
        <h2 class="player-title">Negative attributes</h2>
    </div>
</div>

<div class="container tracks">
    <div class="page-header">


    </div>
    <div id="tpl-track" class="hidden">
        <div class="col-md-2 tracks-item" data-id="{{id}}" data-stream="{{stream}}" data-name="{{name}}" data-img="{{img}}">
            <img src="{{img}}" class="img-circle"/>
        </div>
    </div>
</div>


<div class="mpc" id="mpc">
</div>

<div class="container">
    <ul class="social-network">
        <li><a href="http://www.mixcloud.com/latroyonsquare/" class="icon-mixcloud" target="blank"></a></li>
        <li><a href="https://soundcloud.com/latroyon" class="icon-soundcoud" target="blank"></a></li>
        <li><a href="https://www.facebook.com/LaTroyon?fref=ts" class="icon-facebook" target="blank"></a></li>
    </ul>
</div>