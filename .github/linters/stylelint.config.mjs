import postcssScss from "postcss-scss";

export default {
  extends: ["stylelint-config-standard"],
  overrides: [{
    "files" : "*.css",
    "rules" : {
        "declaration-block-single-line-max-declarations" : null,
        "media-feature-range-notation" : "prefix"
    }
    }],
};