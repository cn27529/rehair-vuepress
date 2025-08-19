export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"麗絲假髮髮片館"} }],
  ["/README%20copy%202.html", { loader: () => import(/* webpackChunkName: "README copy 2.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/README copy 2.html.js"), meta: {"title":"Rehair妝髮設計"} }],
  ["/README%20copy.html", { loader: () => import(/* webpackChunkName: "README copy.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/README copy.html.js"), meta: {"title":"Home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Rehair專業妝髮設計"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"聯絡我們"} }],
  ["/experience/", { loader: () => import(/* webpackChunkName: "experience_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/experience/index.html.js"), meta: {"title":""} }],
  ["/gallery/", { loader: () => import(/* webpackChunkName: "gallery_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/gallery/index.html.js"), meta: {"title":""} }],
  ["/products/", { loader: () => import(/* webpackChunkName: "products_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/products/index.html.js"), meta: {"title":"產品介紹"} }],
  ["/social/", { loader: () => import(/* webpackChunkName: "social_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/social/index.html.js"), meta: {"title":"社群"} }],
  ["/technology/", { loader: () => import(/* webpackChunkName: "technology_index.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/technology/index.html.js"), meta: {"title":"產品製作技術"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
