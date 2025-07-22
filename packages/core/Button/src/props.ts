import { PropType } from 'vue';
import { propTypes } from '../../../utils/propTypes';
import { StyleValue } from '@/utils/enums';

export const buttonProps = {
  radius: { type: String, default: '8px 0' }, //圆角
  size: propTypes.oneOf(['default', 'small', 'mini']).def('default'), // 按钮尺寸
  preIcon: { type: String }, //文字前图标
  postIcon: { type: String }, //文字后图标
  iconSize: { type: Number, default: 14 }, //图标大小
  onClick: propTypes.func,
  iconStyle: {
    type: Object as PropType<StyleValue>,
    default: () => ({})
  }
};
