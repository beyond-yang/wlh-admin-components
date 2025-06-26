module.exports = {
  extends: [
    'stylelint-config-standard', // 标准规则
    'stylelint-config-recommended-vue', // Vue SFC 推荐规则
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true, // 属性按字母排序
    'no-empty-source': null, // 允许空样式文件
    // 你可以在这里自定义更多规则
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
