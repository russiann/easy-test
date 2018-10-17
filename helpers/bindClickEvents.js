const bindClickEvents = (query, handlers) => {
  const parentElement = document.querySelector(query);
  const elements = parentElement.querySelectorAll('[bindClick]');
  elements.forEach(el => {
    Array
      .from(el.attributes)
      .filter(attr => attr.name === 'bindclick')
      .forEach(attr => {
        if (handlers[attr.value]) {
          el.addEventListener('click', (ev) => handlers[attr.value](ev, el));
        }
      })
  });
};

export default bindClickEvents;
