function component() {
  var element = document.createElement('div');

  const joinblah = list => list.join(' ');

  element.innerHTML = joinblah(['Hello', 'webpack', 'user']);

  return element;
}

document.body.appendChild(component());
