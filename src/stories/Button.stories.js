import { linkTo } from '@storybook/addon-links'

export default {
  title: 'Button',
};

export const withText = () => ({
  template: '<my-button>with text</my-button>'
});

export const withEmoji = () => ({
  template: '<my-button :click="action">😀 😎 👍 💯</my-button>',
  methods: { action: linkTo() }
});

export const asAComponent = () => ({
  template: '<my-button :rounded="true">rounded</my-button>'
});