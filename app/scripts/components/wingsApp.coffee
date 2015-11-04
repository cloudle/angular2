Component = ng.Component({
  selector: 'wings-app'
  templateUrl: 'templates/wingsApp.html'
}).Class({
  constructor: ->
    @name = 'Wings'
})

module.exports = Component