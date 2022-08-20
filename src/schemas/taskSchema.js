
const findAll = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          content: { type: 'string' }
        }
      }
    }
  },
  querystring: {
    limit: { type: 'integer' },
    offset: { type: 'integer' }
  }
}


const insertOne = {
  body: {
    type: 'object',
    properties: {
      content: { type: 'string' }
    },
    required: ['content']
  }
}

const updateOne = {
  body: {
    type: 'object',
    properties: {
      content: { type: 'string' },
      completed: {type: 'boolean'}
    },
  },
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id']
  }
}

const deleteOne = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id']
  }
}

module.exports = { findAll, insertOne, updateOne, deleteOne }
