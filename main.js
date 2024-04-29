//Bailey Simons, April 29, 2024, Array Basics

const countries = ['Ireland', 'France', 'Switzerland', 'Austria'];

const name = 'Bailey Simons';

const school = 'West Senior High School';

console.log('Script written by ' + name + ' of ' + school);

console.log('My countries array: ' + countries );
console.log('Length of countries array: ' + countries.length + ' elements');

countries.push('Spain');

console.log('Adding Spain using the push() method:');
console.log('Updated countries array: ' + countries);

countries.unshift("Germany");

console.log('Using unshift() method to add Germany to start of countries array:')
console.log('Updated countries array: ' + countries);