require.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'libs/jquery/dist/jquery',
        mustache: 'libs/mustache/mustache',
        bootstrap: 'libs/bootstrap/dist/js/bootstrap.min',

        mpc: 'mpc'
    },
    shim: {
        jQuery: {
            exports: '$'
        },
        mustache: {
            exports: 'Mustache'
        },
        bootstrap: {
            deps: ["jQuery"]
        },
    }
});


// Load the main app module to start the app
require(["app/App"]);

