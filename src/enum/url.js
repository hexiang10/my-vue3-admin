// 枚举一些常用的url

const URL = {
  // 系统管理相关
  SYSTEM_MAIN: '/system',
  SYSTEM_HOME: '/system/home',
  SYSTEM_LOGIN: '/login',
  SYSTEM_LOGOUT: '/logout',
  SYSTEM_ROLE: '/system/role/',
  SYSTEM_USER: '/system/user/',
  SYSTEM_TEST: '/system/test',
  // mock相关
  MOCK_ERROR: '/test/error',
  MOCK_DEFAULT: '/test/helloword',
  MOCK_JSONPLACEHOLDER: 'https://jsonplaceholder.typicode.com/todos/1',
  MOCK_PICSUMLIST: 'https://picsum.photos/v2/list',
  MOCK_PICSUMLIST_PAGE: 'https://picsum.photos/v2/list?page=2&limit=20',
  // 错误页面
  ERROR_401: '/error/401',
  ERROR_500: '/error/500',
}

export default URL
