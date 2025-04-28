// EmailJS 初始化
emailjs.init('NHM9EKQZQF8xQP8tP');

// 表單送出
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('service_0q9d9vr', 'template_pyk2ixi', this)
    .then(function() {
      status.style.color = 'green';
      status.innerText = (currentLang === 'en') ? 'Message sent successfully! ✅' : '訊息已成功發送！✅';
      status.style.display = 'block';
      form.reset();
    }, function(error) {
      status.style.color = 'red';
      status.innerText = (currentLang === 'en') ? 'Failed to send message. ❌ Please try again later.' : '發送失敗，請稍後再試 ❌';
      status.style.display = 'block';
      console.error('EmailJS Error:', error);
    });
});

// 語言切換
let currentLang = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en][data-zh]');
  const button = document.querySelector('.language-switcher');

  elements.forEach(el => {
    if (el.placeholder !== undefined) {
      el.placeholder = (currentLang === 'en') ? el.getAttribute('data-zh') : el.getAttribute('data-en');
    } else {
      el.innerText = (currentLang === 'en') ? el.getAttribute('data-zh') : el.getAttribute('data-en');
    }
  });

  currentLang = (currentLang === 'en') ? 'zh' : 'en';
  if (button) {
    button.innerText = (currentLang === 'en') ? '中文 / EN' : 'EN / 中文';
  }
}

// 導覽列滾動時加陰影效果
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
