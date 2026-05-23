//Set() constructor:

//Set() - is a built in constructor function
// - acts like a unique array that only stores unique values. it includes strings, numbers, objects, arrays, and functions
// - while arrays are great they allow duplicates
// - also using methods like includes are slow for large data sets
// - also not index based
// - you can pass an iterable into a Set() to add value
// - ex: const newSet = new Set(["iterable"]);

const carNames = new Set();

carNames.add("Acura NSX");
carNames.add("Honda CRV");
carNames.add("Cevy Impalla");

//set methods:

//carNames.keys (set iterator can use next())
//carNames.entries (set iterator can use next())
//carNames.values (set iterator can use next())
// - keys and values are the same thing
//carNames.add (adds items)
//carNames.delete (delete items)
//carNames.clear (clears the array)
//carNames.has("whatever") lets you search
// - you dont have to loop or map through it
// - can loop through iterables

console.log(carNames);
console.log(carNames.size);

//logs set(3)

//Set example:

const competitors = new Set();

competitors.add("Chris");
competitors.add("John");
competitors.add("Mike");

const competed = competitors.values();
// - turned this into a set iterable

competed.next();
// - you can iterate through it individually
// - it removes one at a time from set iterator

// WeakSet() constructor notes:

// WeakSet() - is a special set that can only store objects. those objects are held weakly meaning if nothing references them anymore theyll be deleted
// - you cannot loop this
// - no .clear method
// - is garbage collected
