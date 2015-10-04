var shell = require('shelljs')
// echo out the contents of the brawl file
var o = console.log
var brawlr = require(__dirname + '/.brawl.json')

runner(brawlr)


function runner(cmds) {

  // loop all the commands and run them
  for (var cmdName in brawlr) {
    //o(cmdName)
    //o(brawlr[cmdName])
    //o(typeof cmd)
    var cmd = brawlr[cmdName]
    
    if (typeof cmd == 'string') {
      shell.exec(cmd)
      //o(typeof cmd)
      o('RAN!:'+cmd)
    }
    else if (typeof cmd == 'object') {
      runner(cmd)
    }
    //if string
    //if array
    //if obj
  }

}


