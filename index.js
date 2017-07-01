function asyncRandom(cb){
  console.log('Running async random');
  setTimeout(function(){
    console.log('async random callback');
    cb(Math.random());
  }, 2000);
}

function runSync(generator){
  var g = generator();

  var fn = g.next().value;
  console.log('Running function from runSync');

  fn(function(data){
    console.log('Passing data back');
    g.next(data);
  });
}

runSync(function* (){
  console.log('Start this generator');
  var number = yield asyncRandom;
  console.log('Retrieved number', number);
});