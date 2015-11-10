var shelljs = require('shelljs')
var is = require('is')
var o = console.log
var casing = require(__dirname + '/shotshell.json')
var methods = ['sh']
var recommended = ['start', 'stop', 'install', 'build', 'restart']
var colors = require('colors')
var debug = true // or false if pass -d

fire(casing, 0)

function fire(casing, tabs) {
  
  var indent = ''
  for (var i = 0; i <= tabs; i++) {
    indent = indent + '  ';
  }

  for (var alias in casing) {
    var casing2 = casing[alias]
    if (is.object(casing2)) {

      if (methods.indexOf(alias) == -1) {
        var msg =  alias+":"
        if (recommended.indexOf(alias) != -1) {
          o(indent + colors.white.bgBlack(msg))
      	}
      	else {
          o(indent + colors.cyan.bgBlack(msg))
      	}

        var sh = casing2.sh
        shelljs.exec(sh)
        var hrTime = process.hrtime()
        var microtime = (hrTime[0] * 1000000 + hrTime[1] / 1000)
        o(indent + '  sh: ' + sh)
        if (debug) o(indent + '    started: ' + microtime)

        ///o(indent + 'Fire subshot.')
        newtabs = tabs+1
        fire(casing2, newtabs)

      }
    }
  }
}




