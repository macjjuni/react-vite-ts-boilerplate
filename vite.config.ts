import path from "path";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react-swc";
import { compression } from "vite-plugin-compression2";
import removeAttr from "react-remove-attr";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  const env = loadEnv(mode, process.cwd(), "");
  const isProd = mode === "production";

  // region [Define Plugins]

  const compressPlugin = compression({ include: [/\.(js)$/, /\.(scss)$/], threshold: 2000 });

  const htmlPlugin = createHtmlPlugin({
    minify: true,
    entry: "/src/main.tsx",
    template: "/src/index.html",
    inject: { data: { title: env.VITE_TITLE } }
  });

  const removeAttrPlugin = isProd && removeAttr({ extensions: ["jsx", "tsx"], attributes: ["data-testid"] });

  const visualizerPlugin = visualizer({
    filename: "./dist/analizer.html",
    title: `${env.VITE_TITLE} Visualizer`,
    open: true,
    gzipSize: true,
    template: "treemap", // sunburst, treemap, network, raw-data, list
    brotliSize: true
  }) as unknown as PluginOption;

  // endregion

  return {
    resolve: { alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }] },
    plugins: [react(), eslint(), compressPlugin, htmlPlugin, removeAttrPlugin, visualizerPlugin],
    css : {
      preprocessorOptions: {
        scss: { additionalData: "@import \"@/style/index\";\n" }
      }
    }
  };
});
