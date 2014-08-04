require.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'libs/jquery/dist/jquery',
        mustache: 'libs/mustache/mustache'

    },
    shim: {
        jQuery: {
            exports: '$'
        },
        mustache: 'Mustache'
    }
});


// Load the main app module to start the app
requirejs(["app/app"]);
