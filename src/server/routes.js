import path from 'path'

import serverSideRenderer from './handlers/server-side-renderer'

export default [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: (req, reply) => {
      reply.file(path.resolve(__dirname, '../../public/', req.params.param))
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: serverSideRenderer
  }
]
