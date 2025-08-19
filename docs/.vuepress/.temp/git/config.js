import { GitContributors } from "D:/Git/repository/rehair-vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_7289056959c34182cd3afca58d16c86c/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/Git/repository/rehair-vuepress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_7289056959c34182cd3afca58d16c86c/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
