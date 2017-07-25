import path from 'path'

import serverSideRenderer from './handlers/server-side-renderer'

export default [
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, '../..')
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: serverSideRenderer
  }
]
