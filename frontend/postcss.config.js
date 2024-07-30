// Node modules
import postcssNested from "postcss-nested";

/**
 * About:
 * I need PostCSS with the plugin "postcssNested" to un-nest the CSS.
 * Because React Testing Libraty uses CSSDOM, a deprecated CSS parser
 * that does not support native CSS nesting rules.
 */
export default {
  plugins: [postcssNested()],
};
