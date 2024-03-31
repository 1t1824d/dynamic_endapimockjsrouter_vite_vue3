// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { fetchRoutes } from '../api/routes';
// 自动导入views目录下的所有.vue文件
const modules = import.meta.glob('/src/views/*.vue');
console.log(`import.meta,glob('./index.js')`, modules);
const AllRoutesList = Object.keys(modules).map((path) => {
  const componentName = path.split('/').pop().split('.')[0];
  return {
    path: `/${componentName == 'HomeView' ? '' : componentName}`,
    component: modules[`${path}`].default || modules[`${path}`],
    name: componentName
  };
});
console.log(`AllRoutesList`, AllRoutesList);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/HomeView'
    }
  ], // 初始时不包含任何路由
});

// 递归函数，用于处理子路由
function processRoutes(routes) {
  routes.forEach((route) => {
    // 如果路由有子路由，递归处理
    if (route.children) {
      route.children = processRoutes(route.children);
    }
    // 注册路由
    route.component = AllRoutesList.find(item => route.component === item.name).component
    console.log(`route`, route);
    router.addRoute(route);
  });
}

// 动态注册路由的函数
export async function registerDynamicRoutes() {
  try {
    const backendRoutes = await fetchRoutes();
    console.log(`backendRoutes`, backendRoutes);
    processRoutes(backendRoutes.data);
    console.log('Dynamic routes registered successfully.');
  } catch (error) {
    console.error('Failed to register dynamic routes:', error);
  }
}
export default router;
