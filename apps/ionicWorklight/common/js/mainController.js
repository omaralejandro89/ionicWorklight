/**
 * Created by Omar on 11/7/14.
 */
(function () {
    'use strict';

    angular
        .module('App')
        .controller('MainController', MainController);


    /* @ngInject */
    function MainController() {        
        var vm = this;

        vm.activate = activate;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {
        }


    }


})();