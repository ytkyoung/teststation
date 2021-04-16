function secret(text) {
  const el = text.split('.');
  return `<${el[0]} class="${el.slice(1).join(' ')}"></${el[0]}>`;
}

const result = secret('p.one.two.three');
console.log(result);

// function secret(text) {
//     const [tag, ...className] = text.split(".");
//     return `<${tag} class="${className.join(" ")}"></${tag}>`;
//   }

// const secret = (s, [e, ...c] = s.split('.')) =>
// 	`<${e} class="${c.join(' ')}"></${e}>`;

// const secret = text => text.replace(/^(\w+)\.(.+)$/, (_, t, c) => `<${t} class="${c.replace(/\./g, " ")}"></${t}>`);
