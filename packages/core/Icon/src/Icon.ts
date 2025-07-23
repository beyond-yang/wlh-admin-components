import { createVNode, defineComponent } from 'vue'
import * as $Icon from '@ant-design/icons-vue'
// import './Icon.scss';

export const Icon = defineComponent({
  name: 'WIcon',
  props: {
    // 图标
    icon: {
      type: String,
      required: true,
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 危险图标，设置为true后图标为红色
    danger: {
      type: Boolean,
      default: false,
    },
    // 尺寸
    size: {
      type: [String, Number],
      default: '14',
    },
  },
  setup(props, { attrs }) {
    const { icon, disabled, size } = props
    let fs = `${size}`
    fs = `${fs.replace('px', '')}px`
    const render = () => {
      return createVNode($Icon[icon as keyof typeof $Icon], {
        ...attrs,
        style: { fontSize: fs, cursor: 'pointer' },
        class: [`icon`, { disabled: disabled, 'danger-icon': props.danger }],
      })
    }
    return render
  },
})
