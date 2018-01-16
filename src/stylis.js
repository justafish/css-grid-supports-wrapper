const plugin = (context, content, selectors) => {
  const gridItemsRegex = /grid-.+?:.+?;/g;
  const displayGridRegex = /display:grid;/g;
  const gridItems = [];
  let processedContent = content;
  const runRegex = (regex) => {
    let m;
    // eslint-disable-next-line no-cond-assign
    while ((m = regex.exec(content)) !== null) {
      if (m.index === regex.lastIndex) {
        // eslint-disable-next-line no-plusplus, no-param-reassign
        regex.lastIndex++;
      }

      m.forEach((match) => {
        gridItems.push(match);
      });
    }
    processedContent = processedContent.replace(regex, '');
  };
  switch (context) {
    case 2: {
      runRegex(gridItemsRegex);
      runRegex(displayGridRegex);
      processedContent = `${processedContent}}@supports(display:grid){${selectors.join(',')}{${gridItems.join('')}}`;
      return processedContent;
    }
    default: {
      return content;
    }
  }
};

export default plugin;
