var people = [
    {
        firstname: 'Nico',
        lastname: 'Deno',
        addresses: [
            '29 Liberty Street',
            '2 Inradji Street'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Nada',
        addresses: [
            '29 Liberty Street',
            '2 Inradji Street'
        ]
    },
    {
        firstname: 'Will',
        lastname: 'Not',
        addresses: [
            '29 Liberty Street',
            '2 Inradji Street'
        ],
        greet: function() {
            return 'Hello';
        }
    }
]

// JS Engine throw error like "Unexpected token" with syntax error, like missing semicolon, colon, braces, brackets, etc...
// Don't be intimidated by large initialization
console.log(people)
/*
[
  {
    firstname: 'Nico',
    lastname: 'Deno',
    addresses: [ '29 Liberty Street', '2 Inradji Street' ]
  },
  {
    firstname: 'Jane',
    lastname: 'Nada',
    addresses: [ '29 Liberty Street', '2 Inradji Street' ]
  },
  {
    firstname: 'Will',
    lastname: 'Not',
    addresses: [ '29 Liberty Street', '2 Inradji Street' ],
    greet: [Function: greet]
  }
]
 */
