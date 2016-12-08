import $ from 'jquery';

const newItem = () => {
  const item = $('<li>').addClass('item direct-pager').append(
    $('<input>').attr('size', 2).on('change', e => {
      const page = Number(e.target.value);
      if ( page > 0 && page <= 50) {
        item.attr('data-page', page);
        item.trigger('click');
      }
    })
  );
  return item;
};

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    const target = $(mutation.target);
    if (target.hasClass('pages') && $('.direct-pager', target).length === 0) {
      target.append(newItem());
    }
  });
});

observer.observe(document.getElementById('videoExplorer'), {
  attributes: false, childList: true, characterData: false,
  subtree: true, attributeOldValue: false, characterDataOldValue: false
});
