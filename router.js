//router.js Javascript at Scale by Adam Boduch
//http://twitter.com/chemikadaze
import events from 'events.js';
//router component clicking events
export default class Router{
  constructor(){
    this.routes = [];
  }
}
//add 'pattern' of particular
//activated then clicking the "name"
add (pattern,name){
  this.routes.push({
    Pattern.replace(/:\w+/g,'(.*)')),
    name: name
    });
}
//add the routes that 配置，start listen navbar events
start(){
  var onHashChange = () => {
    for(let route of this.routes){
      let result =route.pattern.exec(
        location.hash.substr(1));
        if(result){
          (event.trigger('route:'+route.name,{
            values: result.splice(1)
            });
            break;
    }
  }
};
window.addEventlistener('hashchange',onHashChange);
    onHashChange();
}
}
