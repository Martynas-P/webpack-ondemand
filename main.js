var $ = require('jquery');

$('#button-a').click(function() {
    require.ensure(['./module-a'], function(require) {
        var moduleA = require('./module-a');

        $('#content').html(moduleA.module_a);
    });
});

$('#button-b').click(function() {
    require.ensure(['./module-b'], function(require) {
       var moduleB = require('./module-b');

        $('#content').html(moduleB.module_b);
    });
});

$('#button-b-c').click(function() {
    require.ensure(['./module-b', './module-c'], function(require) {
        var moduleB = require('./module-b');
        var moduleC = require('./module-c');

        $('#content').html(moduleB.module_b + ' ' + moduleC.module_c);
    });
});

$('#button-a-b-c-d').click(function() {
    require.ensure(['./module-a', './module-b', './module-c', './module-d'], function(require) {
        var moduleA = require('./module-a');
        var moduleB = require('./module-b');
        var moduleC = require('./module-c');
        var moduleD = require('./module-d');

        $('#content').html(moduleA.module_a + ' ' + moduleB.module_b + ' ' + moduleC.module_c + ' ' + moduleD.module_d);
    });
});
