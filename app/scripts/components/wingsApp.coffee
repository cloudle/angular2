#Component = ng.Component
#  selector: 'wings-app'
#  templateUrl: 'templates/wingsApp.html'
#  directives: [ng.NgFor]
#
#.Class
#  constructor: ->
#    name: 'Wings'
#    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
#
#module.exports = Component

Component = ->
  @name = 'Wings'
  @nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

  @onClick = -> console.log 'this is clicked!'

  return

Component.annotations = [
  new ng.Component
    selector: 'wings-app'
  new ng.View
    templateUrl: "templates/wingsApp.html"
    directives: [ng.NgFor]
]

module.exports = Component