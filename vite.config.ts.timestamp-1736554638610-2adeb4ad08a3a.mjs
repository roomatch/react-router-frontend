// vite.config.ts
import { reactRouter } from "file:///C:/Users/giiio/Documents/Roomatch/react-router-frontend/node_modules/.pnpm/@react-router+dev@7.1.1_@types+node@20.17.11_react-router@7.1.1_react-dom@19.0.0_react@19.0.0_2jvq535d5gstgilg7t4ynrqt64/node_modules/@react-router/dev/dist/vite.js";
import autoprefixer from "file:///C:/Users/giiio/Documents/Roomatch/react-router-frontend/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///C:/Users/giiio/Documents/Roomatch/react-router-frontend/node_modules/.pnpm/tailwindcss@3.4.17_ts-node@10.9.1_@types+node@20.17.11_typescript@5.7.2_/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///C:/Users/giiio/Documents/Roomatch/react-router-frontend/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.11/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/giiio/Documents/Roomatch/react-router-frontend/node_modules/.pnpm/vite-tsconfig-paths@5.1.4_typescript@5.7.2_vite@5.4.11_@types+node@20.17.11_/node_modules/vite-tsconfig-paths/dist/index.js";
var vite_config_default = defineConfig(({ isSsrBuild, command }) => ({
  build: {
    rollupOptions: isSsrBuild ? {
      input: "./server/app.ts"
    } : void 0
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  ssr: {
    noExternal: command === "build" ? true : void 0
  },
  plugins: [reactRouter(), tsconfigPaths()]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnaWlpb1xcXFxEb2N1bWVudHNcXFxcUm9vbWF0Y2hcXFxccmVhY3Qtcm91dGVyLWZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnaWlpb1xcXFxEb2N1bWVudHNcXFxcUm9vbWF0Y2hcXFxccmVhY3Qtcm91dGVyLWZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9naWlpby9Eb2N1bWVudHMvUm9vbWF0Y2gvcmVhY3Qtcm91dGVyLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVhY3RSb3V0ZXIgfSBmcm9tIFwiQHJlYWN0LXJvdXRlci9kZXYvdml0ZVwiO1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGlzU3NyQnVpbGQsIGNvbW1hbmQgfSkgPT4gKHtcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczogaXNTc3JCdWlsZFxyXG4gICAgICA/IHtcclxuICAgICAgICAgIGlucHV0OiBcIi4vc2VydmVyL2FwcC50c1wiLFxyXG4gICAgICAgIH1cclxuICAgICAgOiB1bmRlZmluZWQsXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW3RhaWx3aW5kY3NzLCBhdXRvcHJlZml4ZXJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNzcjoge1xyXG4gICAgbm9FeHRlcm5hbDogY29tbWFuZCA9PT0gXCJidWlsZFwiID8gdHJ1ZSA6IHVuZGVmaW5lZCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtyZWFjdFJvdXRlcigpLCB0c2NvbmZpZ1BhdGhzKCldLFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxtQkFBbUI7QUFDL1gsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxZQUFZLFFBQVEsT0FBTztBQUFBLEVBQ3hELE9BQU87QUFBQSxJQUNMLGVBQWUsYUFDWDtBQUFBLE1BQ0UsT0FBTztBQUFBLElBQ1QsSUFDQTtBQUFBLEVBQ047QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxhQUFhLFlBQVk7QUFBQSxJQUNyQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFlBQVksWUFBWSxVQUFVLE9BQU87QUFBQSxFQUMzQztBQUFBLEVBQ0EsU0FBUyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDMUMsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
