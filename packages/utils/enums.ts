import type { CSSProperties } from 'vue';

export enum SizeEnum {
  DEFAULT = 'default',
  SMALL = 'small',
  LARGE = 'large',
}

export type StyleValue = string | CSSProperties | Array<StyleValue>;
