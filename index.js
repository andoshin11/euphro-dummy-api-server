const museums = require('./dummy/museums')

module.exports = [
  {
    request: {
      path: '/user/:id',
      method: 'GET',
      query: {
        q: '{:someQueryStrings}',
      }
    },
    response: {
      headers: {
        'x-csrf-token': 'csrf-token', 
      },
      body: {
        message: '{:greeting} {:id} {:someQueryStrings}',
        images: '{:images}',
        themes: '{:themes}',
      },
      values: {
        greeting: 'hello',
        images: [
          'http://example.com/foo.jpg',
          'http://example.com/bar.jpg',
        ],
        themes: {
          name: 'green',
        },
      }
    },
  },
  {
    request: {
      path: '/museums',
      method: 'GET'
    },
    response: {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Credentials': true
      },
      body: {
        items: '{:museums}'
      },
      values: {
        museums
      }
    },
  }
]
