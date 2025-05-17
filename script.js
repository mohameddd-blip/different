// تأثير بسيط لتغيير الخلفية عند التمرير - هنفعّله لاحقًا
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // إزالة الـ active من كل الأزرار
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // إضافة active للزر اللي اتضغط
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    products.forEach(product => {
      if(filter === 'all' || product.getAttribute('data-category') === filter) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
