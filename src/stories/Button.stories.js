export default {
  title: 'Button',
};

export const withText = () => ({
  template: '<my-button>with text</my-button>'
});

export const withEmoji = () => ({
  template: '<my-button>😀 😎 👍 💯</my-button>'
});

export const asAComponent = () => ({
  template: '<my-button :rounded="true">rounded</my-button>'
});