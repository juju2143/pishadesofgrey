var s = self;
var Module = {"_main": function()
{
  π = Module.cwrap('pi', 'number', ['number']);

  s.addEventListener('message', function(e) {
    self.postMessage({n:e.data,pi:π(e.data)});
  }, false);
}
}
importScripts("pi.js");
