const tidyLink = (url, name, hoverText) =>
  hoverText === undefined ? `[${name}](${url})` : `[${name}](${url} "${hoverText}")`;

const result = tidyLink('https://www.google.com', 'Google');
console.log(result);

// function tidyLink(url, name, hoverText) {
//     return `[${name}](${url}` + (hoverText ? ` "${hoverText}")` : ')')
//   }

// function tidyLink(url, name, hoverText = "") {
//     const check = `${hoverText ? ` "${hoverText}"` : hoverText}`;
//     return `[${name}](${url}${check})`;
//   }

// const tidyLink = (url, name, hoverText = "") => `[${name}](${url}${hoverText && ` "${hoverText}"`})`;
