

/*

----------------------------------Scope & Objects-------------------------------
*/

- 3 scope levels
Global Scope ---> Local Scope ---> Block Scope

var name = "Tom"

var nameCaller = function() {
    name = "Jerry"
    console.log(name);
}

nameCaller()


// Global Scope A
var myFunction = function () {
  // Local Scope B
  var myOtherFunction = function () {
    // Local Scope C
  };
  // Local Scope B
};
// Global Scope A



function createSuperHero(name, alias, location){
    var mode = name
    return {
        name: name,
        alias: alias,
        location: location,
        findId: function(){console.log(mode)},
        switchId: function(){
            if(mode == this.name){
                mode = this.alias
            } else {
                mode = this.name
            }
        }
    }
}

var hero = createSuperHero('Bruce Wayne', 'Batman', 'Gothem')
hero.switchId()
hero.findId()
