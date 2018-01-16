Processes CSS to wrap CSS grid usage in `@supports`. This is typically used to have browsers like IE11
fall back to a mobile design instead of trying to render with it's partial CSS Grid implementation.

```
.some-stuff {
  grid-column-start: span 12;
  font-style: italic;
}
```

to:

```
@supports (display: grid) {
  .some-stuff {
    grid-column-start: span 12;
  }
}
.some-stuff {
  font-style: italic;
}
```


## PostCSS Usage
tbd

## Stylis Usage

`npm install css-grid-supports-wrapper`

```
import stylis from 'stylis';
import { stylis } as gridWrapper from 'css-grid-supports-wrapper';

stylis.use(gridWrapper);

const test = stylis(``, `
  h1 {
    width: calc(random() * 10);
    font-style: italic;
    grid-column-start: span 12;
  }

  h2 {
    grid-column-start: span 10;
  }

  h3 {
    grid-column-start: span 8;
    color: red;
  }
`);

console.log(test);
```

This can be used with [emotion](https://github.com/emotion-js/emotion) using the [create-emotion](https://emotion.sh/docs/create-emotion) package.
