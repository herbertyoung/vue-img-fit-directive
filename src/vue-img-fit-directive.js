const css = `
.img-fit-wrapper {
  position: relative;
  overflow: hidden;
}
.img-fit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;
const head = document.head || document.getElementsByTagName('head')[0];
const style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

const strategies = {
  contain: function ({ el, wrapperWidth, wrapperHeight }) {
    const { naturalWidth, naturalHeight, style, classList } = el;
    if (naturalWidth / naturalHeight > wrapperWidth / wrapperHeight) {
      style.width = '100%';
      classList.add('img-fit');
    } else if (naturalWidth / naturalHeight < wrapperWidth / wrapperHeight) {
      style.height = '100%';
      classList.add('img-fit');
    } else {
      style.width = style.height = '100%';
    }
  },
  cover: function ({ el, wrapperWidth, wrapperHeight }) {
    const { naturalWidth, naturalHeight, style, classList } = el;
    if (naturalWidth / naturalHeight > wrapperWidth / wrapperHeight) {
      const height = wrapperHeight;
      style.height = `${height}px`;
      classList.add('img-fit');
    } else if (naturalWidth / naturalHeight < wrapperWidth / wrapperHeight) {
      const width = wrapperWidth;
      style.width = `${width}px`;
      classList.add('img-fit');
    } else {
      style.width = style.height = '100%';
    }
  }
};

function inserted (el, binding) {
  const arg = binding.arg;
  const parentElement = el.parentElement;
  const { width: wrapperWidth, height: wrapperHeight } = parentElement.getBoundingClientRect();
  parentElement.classList.add('img-fit-wrapper');
  if (!Object.prototype.hasOwnProperty.call(strategies, arg)) {
    throw new Error('Argument is wrong.');
  }
  const processor = strategies[arg].bind(null, { el, wrapperWidth, wrapperHeight });
  if (el.complete) {
    processor();
  } else {
    el.addEventListener('load', processor);
  }
  el._processor = processor;
}

function unbind (el, binding) {
  el.removeEventListener('load', el._processor);
}

export default {
  inserted,
  unbind
};
