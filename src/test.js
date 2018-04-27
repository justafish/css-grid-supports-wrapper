import assert from 'assert';
// eslint-disable-next-line import/no-extraneous-dependencies
import stylis from 'stylis';
import stylisPlugin from './stylis';

stylis.use(stylisPlugin);

// eslint-disable-next-line quotes
const output = stylis(``, `
  div {
    display: grid;
  }

  h1 {
    width: 100px;
    font-style: italic;
    grid-column-start: span 12;
  }

  h2.class {
    grid-column-start: span 10;
  }

  .some-stuff, .more-stuff {
    grid-column-start: span 8;
    color: red;
  }
`);

let expectedOutput = `
div{}
@supports(display:grid){
  div{
    display:grid;
  }
}
h1{
  width:100px;
  font-style:italic;
}
@supports(display:grid) {
  h1{
    grid-column-start:span 12;
  }
}
h2.class{}
@supports(display:grid) {
  h2.class{
    grid-column-start:span 10;
  }
}
.some-stuff,.more-stuff {
  color:red;
}
@supports(display:grid) {
  .some-stuff,.more-stuff{
    grid-column-start:span 8;
  }
}`;

expectedOutput = expectedOutput
  .replace(/\n|\r/g, '')
  .replace(/\s*{\s*/g, '{')
  .replace(/\s*}\s*/g, '}')
  .replace(/;\s*/g, ';');

assert.equal(output, expectedOutput, `Outputted CSS was not correct:$\n${output}\n\nExpected:\n${expectedOutput}`);
