import comp from "D:/Git/repository/vuepress-rehair/docs/.vuepress/.temp/pages/technology/index.html.vue"
const data = JSON.parse("{\"path\":\"/technology/\",\"title\":\"產品製作技術\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"docs/contact/index.md\",\"slug\":\"docs-contact-index-md\",\"link\":\"#docs-contact-index-md\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"technology/index.md\"}")
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
