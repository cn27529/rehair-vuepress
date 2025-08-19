import { CodeTabs } from "D:/Git/repository/rehair-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-t_70b41b5fb52a1723dafa5590fcb0aa02/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Git/repository/rehair-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-t_70b41b5fb52a1723dafa5590fcb0aa02/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Git/repository/rehair-vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-t_70b41b5fb52a1723dafa5590fcb0aa02/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
