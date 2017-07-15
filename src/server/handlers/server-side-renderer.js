
export default function serverSideRenderer(request, reply) {
  return reply.view('index', {
    title: 'Demo - app'
  })
}
