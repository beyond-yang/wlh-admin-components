module.exports = {
  extends: [
    'stylelint-config-standard', // 标准规则
    'stylelint-config-recommended-vue', // Vue文件规则
    'stylelint-config-standard-scss', // SCSS规则（如果使用SCSS）
  ],
  plugins: ['stylelint-scss'],
  rules: {
    // 自定义规则
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
