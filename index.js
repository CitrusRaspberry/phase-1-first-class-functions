const receivesAFunction = callback => callback();
const returnsANamedFunction = () => {
  const newFunction = () => 1 + 1;
  return newFunction;
}
const returnsAnAnonymousFunction = () => () => 1 + 1;
