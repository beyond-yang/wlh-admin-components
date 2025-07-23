import path from 'path'
import { readdirSync } from 'fs'
import postcss from 'rollup-plugin-postcss'
import { fileURLToPath, URL } from 'node:url'

// 自动收集所有组件的 scss 文件
const components = [
  {
    name: 'Button',
    packageName: 'core',
  },
  {
    name: 'Icon',
    packageName: 'core',
  },
  {
    name: 'default',
    packageName: 'themes',
  },
] // 你可以自动化收集

// const input = {
//   'default': path.resolve(fileURLToPath(new URL('.', import.meta.url)), `packages/themes/style-entry.js`)
// }
// components.forEach(name => {
//   input[name.toLowerCase()] = path.resolve(fileURLToPath(new URL('.', import.meta.url)), `packages/core/${name}/src/style-entry.js`)
// })
// console.log('input', input)
export default components.map(({ name, packageName }) => {
  const inputPath =
    packageName === 'core'
      ? `packages/core/${name}/src/${name}.scss`
      : `packages/themes/${name}.css`
  return {
    input: path.resolve(
      fileURLToPath(new URL('.', import.meta.url)),
      inputPath,
    ),
    output: {
      dir: 'packages/core/dist',
      assetFileNames: `${name.toLowerCase()}.scss`,
    },
    plugins: [
      postcss({
        extract: `${name.toLowerCase()}.css`,
        minimize: true,
        sourceMap: false,
      }),
    ],
  }
})
