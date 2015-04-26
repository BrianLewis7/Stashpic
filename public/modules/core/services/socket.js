'use strict';
/* globals io */
//sets up our socket service to manage the connection
angular.module('core').factory('Socket', ['socketFactory',
    function(socketFactory) {
        return socketFactory({
            prefix: '',
            ioSocket: io.connect('http://localhost:3000')
        });
    }
]);