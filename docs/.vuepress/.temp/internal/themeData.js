export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"navbar\":[{\"text\":\"首頁\",\"link\":\"/\"},{\"text\":\"產品介紹\",\"link\":\"/products/\"},{\"text\":\"設計實例\",\"link\":\"/gallery/\"},{\"text\":\"製作技術\",\"link\":\"/technology/\"},{\"text\":\"親臨體驗\",\"link\":\"/experience/\"},{\"text\":\"社群\",\"link\":\"/social/\"},{\"text\":\"聯絡我們\",\"link\":\"/contact/\"}],\"sidebar\":false,\"footer\":\"© 2025 Rehair Wig Salon — 專業妝髮設計 | 版權所有\",\"displayFooter\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
