//regular expression (regex for short) is a pattern that describes text
// - it is used to test if a string matches a pattern
// - find parts of a string
// - replace parts of a string
// - split a string based off that pattern

//there is two ways to write a regular expression:
//  one: literal - const re1 = /abc/;
//  two: constructor - const re2 = new RegExp("abc");

//how to use regex in JS
// [1] yes or no
// - re.test(str);
// [2] match or get matches
// - str.match(re);
// [3] replace or swap
// - str.replace(re, "...");
// [4] search index of first match
// - str.search(re);
// [5] split / break string
// - str.split(re);

//basic pattern: /abc/
// - test by matching anywhere in the string /hello/.test("Hello world"); => true

//character classes: meaning any of these characters
// - /[abc]/ => any vowel
// - /[a-z]/ => any lowercase
// - /[A-Z]/ => any uppercase
// - /[0-9]/ => any digit
// these can also be combined => /[a-zA-Z]/

//negated character classes (like !)
// - /[^a-z]/ => any character that is NOT lowercase
// - /[0-9]/ => any character that is NOT a digit
