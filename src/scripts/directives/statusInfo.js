/**
 * Created by Pebie on 18/06/15.
 */
angular.module('avengersApp').directive('status', function($interval,dateFilter){
    return {
        templateUrl:'/scripts/directives/statusInfo.html',
        restrict:'A',
        scope:{
            status:'='
        },
        link:link
    };

    function link(scope, element){
        var timeoutId;
        updateTime();
        function updateTime(){
            var date = dateFilter(new Date(),'h:mm:ss');
            scope.date = date;
        }

        element.on('$destroy', function(){
            $interval.cancel(timeoutId);
        })

        timeoutId = $interval(function(){
            updateTime();
        },1000);
    }

});