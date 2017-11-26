var gordon = {
  name: 'Gordon',
  sayName: function() {
      // this method will call on the object itself within the object
      console.log(this.name);
  }
}

console.log(gordon.sayName())