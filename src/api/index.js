const proxyApi = {
  '/cros': {
    target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/cros/, ''),
  },
}

export default proxyApi
