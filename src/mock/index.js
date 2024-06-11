export const mock = {
  async request(config) {
    const isLocal = !config?.mock?.startsWith('http') && !(config?.proxy ?? false)
    let url = config.mock
    if (isLocal ) {
      url = import.meta.env.VITE_APP_BASE_API + config.mock
    }
    console.log('mock request', url)
    const response = await fetch(url, config)
    if (response.ok) {
      const res = await response.json()
      console.log('mock response', res)
      return isLocal ? res.data : res
    }
  },
  get(url, proxy = false) {
    return this.request({
      mock: url,
      method: 'GET',
      proxy: proxy,
    })
  },
}
