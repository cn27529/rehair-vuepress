import comp from "D:/Git/repository/rehair-vuepress/docs/.vuepress/.temp/pages/gallery/index.html.vue"
const data = JSON.parse("{\"path\":\"/gallery/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1755054343000,\"contributors\":[{\"name\":\"cn27529\",\"username\":\"cn27529\",\"email\":\"cn27529@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/cn27529\"}],\"changelog\":[{\"hash\":\"e582339b3a2ac9f02832b529b9926ac7fc240653\",\"time\":1755054343000,\"email\":\"cn27529@hotmail.com\",\"author\":\"cn27529\",\"message\":\"init rehair\"}]},\"filePathRelative\":\"gallery/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
