const plugin = (context, content) => {
  const regex = /grid-.+?:.+?;/g;
  const gridItems = [];
  switch (context) {
    case 2: {
      let m;

      // eslint-disable-next-line no-cond-assign
      while ((m = regex.exec(content)) !== null) {
        if (m.index === regex.lastIndex) {
          // eslint-disable-next-line no-plusplus
          regex.lastIndex++;
        }

        m.forEach((match) => {
          gridItems.push(match);
        });
      }
      let processedContent = content.replace(/grid-.+?:.+?;/g, '');
      processedContent = `${processedContent}}@supports(display:grid){${gridItems.join('')}`;
      return processedContent;
    }
    default: {
      return content;
    }
  }
};

export default plugin;
