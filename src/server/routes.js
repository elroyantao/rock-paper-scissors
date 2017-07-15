import serverSideRenderer from './handlers/server-side-renderer'

export default [
  {
    method: 'GET',
    path: '/',
    handler: serverSideRenderer
  }
]
