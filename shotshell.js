var shelljs = require('shelljs')
var is = require('is')

// echo out the contents of the shotshell file
var o = console.log
var casing = require(__dirname + '/shotshell.json')

// methods:
//   sh: "shell command"
var methods = ['sh']


fire(casing)


function fire(casing) {
  for (var alias in casing) {
    var casing2 = casing[alias]
    if (is.object(casing2)) {

      if (methods.indexOf(alias) == -1) { 
        o('Fire '+alias+"'s shot:")
        var sh = casing2.sh
        shelljs.exec(sh)
        o('Fired!: ' + sh)

        o('Fire subshot.')
        fire(casing2)

      }
    }
  }
}




