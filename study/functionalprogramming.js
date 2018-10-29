//functional programming
//functions are values!
function triple(x){
	return x * 3
}

//this becomes

var triple = function(x){
	return x * 3
}

var waffle = triple;

waffle(30);//returns 90

//Higher order function: you can pass this values to the other function
//allows to compose a lot of small functions into bigger functions

var animals = [
	{ name: 'Fluffykins', species: 'rabbit'},
	{ name: 'Coro' 		, species: 'dog'}
]

var dogs = animals.filter(function(animal){
	return animal.species === 'dog'
})
/*
var dogs = []
for(var i =0; i< animals.lengt; i++){
	if(animals[i].species === 'dog')
		dogs.push(animals[i])
}
*/
