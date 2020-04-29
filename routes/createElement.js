function h(tag, props, ...children) {
  const element = document.createElement(tag);
  const elementWithProps = Object.assign(element, props);
  elementWithProps.append(...children);
  return elementWithProps;
}

export default h;
