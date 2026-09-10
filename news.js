const items = Array.from(document.querySelectorAll('.news-item'));
const container = document.querySelector('.news-container');


items.sort((a, b) => {
  return new Date(b.dataset.date) - new Date(a.dataset.date);
});


items.forEach(item => {
  const dateDiv = document.createElement('div');
  dateDiv.className = 'news-date';
  dateDiv.textContent = new Date(item.dataset.date).toDateString();
  item.prepend(dateDiv);
  container.appendChild(item);
});

