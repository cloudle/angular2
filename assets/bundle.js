!function n(e,t,r){function o(u,s){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!s&&c)return c(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var a=t[u]={exports:{}};e[u][0].call(a.exports,function(n){var t=e[u][1][n];return o(t?t:n)},a,a.exports,n,e,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(n,e,t){var r;r=function(){this.name="Wings",this.nums=[1,2,3,4,5,6,7,8,9,10],this.onClick=function(){return console.log("this is clicked!")},this.changeName=function(n){return function(e){return n.name=e.target.value}}(this)},r.annotations=[new ng.Component({selector:"wings-app"}),new ng.View({templateUrl:"templates/wingsApp.html",directives:[ng.NgFor]})],e.exports=r},{}],2:[function(n,e,t){var r;r=n("./components/wingsApp.coffee"),document.addEventListener("DOMContentLoaded",function(){return ng.bootstrap(r)})},{"./components/wingsApp.coffee":1}]},{},[2]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9jb21wb25lbnRzL3dpbmdzQXBwLmNvZmZlZSIsImJ1bmRsZS5qcyIsImFwcC9zY3JpcHRzL21haW4uY29mZmVlIl0sIm5hbWVzIjpbImUiLCJ0IiwibiIsInIiLCJzIiwibyIsInUiLCJhIiwicmVxdWlyZSIsImkiLCJmIiwiRXJyb3IiLCJjb2RlIiwibCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwxLCJtb2R1bGUiLCJDb21wb25lbnQiLCJ0aGlzIiwibmFtZSIsIm51bXMiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImNoYW5nZU5hbWUiLCJfdGhpcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhbm5vdGF0aW9ucyIsIm5nIiwic2VsZWN0b3IiLCJWaWV3IiwidGVtcGxhdGVVcmwiLCJkaXJlY3RpdmVzIiwiTmdGb3IiLDIsImFwcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvb3RzdHJhcCIsIi4vY29tcG9uZW50cy93aW5nc0FwcC5jb2ZmZWUiXSwibWFwcGluZ3MiOiJDQUFBLFFBQUFBLEdBQUFDLEVBQUFDLEVBQUFDLEdBQUEsUUFBQUMsR0FBQUMsRUFBQUMsR0FBQSxJQUFBSixFQUFBRyxHQUFBLENBQUEsSUFBQUosRUFBQUksR0FBQSxDQUFBLEdBQUFFLEdBQUEsa0JBQUFDLFVBQUFBLE9BQUEsS0FBQUYsR0FBQUMsRUFBQSxNQUFBQSxHQUFBRixHQUFBLEVBQUEsSUFBQUksRUFBQSxNQUFBQSxHQUFBSixHQUFBLEVBQUEsSUFBQUssR0FBQSxHQUFBQyxPQUFBLHVCQUFBTixFQUFBLElBQUEsTUFBQUssR0FBQUUsS0FBQSxtQkFBQUYsRUFBQSxHQUFBRyxHQUFBWCxFQUFBRyxJQUFBUyxXQUFBYixHQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxHQUFBRSxHQUFBRCxFQUFBSSxHQUFBLEdBQUFMLEVBQUEsT0FBQUksR0FBQUYsRUFBQUEsRUFBQUYsSUFBQWEsRUFBQUEsRUFBQUMsUUFBQWQsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxNQUFBRCxHQUFBRyxHQUFBUyxRQUFBLElBQUEsR0FBQUwsR0FBQSxrQkFBQUQsVUFBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxJQUFBRCxFQUFBRCxFQUFBRSxHQUFBLE9BQUFELEtBQUFhLEdBQUEsU0FBQVQsRUFBQVUsRUFBQUosR0NZQSxHQUFBSyxFQUFBQSxHQUFZLFdBQ1ZDLEtBQUNDLEtBQU8sUUFDUkQsS0FBQ0UsTUFBUSxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBSSxJQUVyQ0YsS0FBQ0csUUFBVSxXQ1RULE1EU1lDLFNBQVFDLElBQUkscUJBQzFCTCxLQUFDTSxXQUFhLFNBQUFDLEdDUFosTURPWSxVQUFDQyxHQ05YLE1ETXFCRCxHQUFDTixLQUFPTyxFQUFNQyxPQUFPQyxRQUFoQ1YsT0FJaEJELEVBQVVZLGFBQ0osR0FBQUMsSUFBR2IsV0FDTGMsU0FBVSxjQUNSLEdBQUFELElBQUdFLE1BQ0xDLFlBQWEsMEJBQ2JDLFlBQWFKLEdBQUdLLFVBR3BCbkIsRUFBT0osUUFBVUssT0NEWG1CLEdBQUcsU0FBUzlCLEVBQVFVLEVBQU9KLEdDNUJqQyxHQUFBeUIsRUFBQUEsR0FBTS9CLEVBQVEsZ0NBRWRnQyxTQUFTQyxpQkFBaUIsbUJBQW9CLFdEZ0M1QyxNQ2hDK0NULElBQUdVLFVBQVVILE9Eb0MzREksK0JBQStCLFNBQVMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjQ29tcG9uZW50ID0gbmcuQ29tcG9uZW50XHJcbiMgIHNlbGVjdG9yOiAnd2luZ3MtYXBwJ1xyXG4jICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy93aW5nc0FwcC5odG1sJ1xyXG4jICBkaXJlY3RpdmVzOiBbbmcuTmdGb3JdXHJcbiNcclxuIy5DbGFzc1xyXG4jICBjb25zdHJ1Y3RvcjogLT5cclxuIyAgICBuYW1lOiAnV2luZ3MnXHJcbiMgICAgbnVtczogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkgLCAxMF1cclxuI1xyXG4jbW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnRcclxuXHJcbkNvbXBvbmVudCA9IC0+XHJcbiAgQG5hbWUgPSAnV2luZ3MnXHJcbiAgQG51bXMgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSAsIDEwXVxyXG5cclxuICBAb25DbGljayA9IC0+IGNvbnNvbGUubG9nICd0aGlzIGlzIGNsaWNrZWQhJ1xyXG4gIEBjaGFuZ2VOYW1lID0gKGV2ZW50KSA9PiBAbmFtZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICByZXR1cm5cclxuXHJcbkNvbXBvbmVudC5hbm5vdGF0aW9ucyA9IFtcclxuICBuZXcgbmcuQ29tcG9uZW50XHJcbiAgICBzZWxlY3RvcjogJ3dpbmdzLWFwcCdcclxuICBuZXcgbmcuVmlld1xyXG4gICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3dpbmdzQXBwLmh0bWxcIlxyXG4gICAgZGlyZWN0aXZlczogW25nLk5nRm9yXVxyXG5dXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudCIsbnVsbCwiYXBwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3dpbmdzQXBwLmNvZmZlZScpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICdET01Db250ZW50TG9hZGVkJywgLT4gbmcuYm9vdHN0cmFwKGFwcCkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
