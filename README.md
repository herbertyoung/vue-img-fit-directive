# vue-img-fit-directive
A Vue.js directive to resize img to fit its container.

## Installation

```bash
npm install vue-img-fit-directive -S
```

Or:

```bash
yarn add vue-img-fit-directive
```

## Initialization

For global use:

```javascript
// main.js
import Vue from 'vue';
import { imgFit } from 'vue-img-fit-directive';

Vue.directive('imgFit', imgFit);
```

For Vue Single-File Component (SFC) use:

```javascript
// component.vue
import { imgFit } from 'vue-img-fit-directive';

export default {
  name: 'ComponentName',
  // ...
  directives: { imgFit }
};
```

## Usage

```html
<img v-img-fit:cover src="your_image.png">
```

### Modifiers

What is modifiers? [See here](https://vuejs.org/v2/guide/syntax.html#Modifiers).

#### Values

`contain`

The image is scaled to maintain its aspect ratio and fit its container.

`cover`

The image is scaled to maintain its aspect ratio while filling its entire container.

## Example

```html
<style>
  .img-container {
    width: 200px;
    height: 200px;
  }
</style>
<div class="img-container">
  <img v-img-fit:cover src="test.png">
</div>
```

## License

MIT