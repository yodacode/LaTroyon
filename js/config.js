require.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'libs/jquery/dist/jquery',
        mustache: 'libs/mustache/mustache',
        bootstrap: 'libs/bootstrap/dist/js/bootstrap.min',
        rangeslider: 'libs/rangeslider/dist/rangeslider.min',

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
        rangeslider: {
            deps: ["jQuery"]
        }        
    }
});


