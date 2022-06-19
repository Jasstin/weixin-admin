export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './user/Login'},
      {component: './404'},
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/weixin_admin',
    name: '微信公众号管理',
    icon: 'crown',
    routes: [
      {path: 'diy_menu', name: '自定义菜单', component: './weixin/List'},
      {path: 'diy_replay', name: '自定义回复', component: './Welcome'},
      {path: 'message', name: '用户留言管理', component: './Welcome'},
    ],
  },
  {
    path: '/article_admin',
    name: '文章管理',
    icon: 'crown',
    component: './Admin',
    routes: [
      {path: 'list', name: '文章列表', component: './Welcome'},
      {path: 'list', name: '发布源管理', component: './Welcome'},
      {path: 'add', name: '写文章', component: './Welcome'},
    ],
  },
  {
    path: '/material_admin',
    name: '素材管理',
    icon: 'crown',
    component: './Admin',
    routes: [
      {path: 'list', name: '常用地址', component: './Welcome'},
      {path: 'add', name: '常用文案', component: './Welcome'},
      {path: 'add', name: '图片素材', component: './Welcome'},
      {path: 'add', name: '音频素材', component: './Welcome'},
      {path: 'add', name: '视频素材', component: './Welcome'},
      {path: 'add', name: '图文消息', component: './Welcome'},
    ],
  },
  {
    path: '/works_admin',
    name: '作品集管理',
    icon: 'crown',
    component: './Admin',
    routes: [
      {path: 'list', name: '作品集列表', component: './Welcome'},
      {path: 'add', name: '上传新作品', component: './Welcome'},
    ],
  },
  {path: '/', redirect: '/welcome'},
  {component: './404'},
];
