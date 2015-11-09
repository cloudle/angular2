Component = ng.Component
  selector: 'wings-app'
  templateUrl: 'templates/wingsApp.html'
  directives: [ng.NgFor]

.Class
  constructor: ->
    name: 'Wings'
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

module.exports = Component