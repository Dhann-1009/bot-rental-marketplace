const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    productCards.forEach((card) => {
      const showAll = filter === 'all';
      const matchesCategory = card.dataset.category === filter;
      card.style.display = showAll || matchesCategory ? 'block' : 'none';
    });
  });
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    faqItems.forEach((faq) => faq.classList.remove('active'));
    item.classList.add('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
