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
    const currentText = el.textContent.replace(/\s+/g, '').trim(); // <== 加上這段，去除全部空白
    const enText = el.getAttribute('data-en').replace(/\s+/g, '');
    const zhText = el.getAttribute('data-zh').replace(/\s+/g, '');

    if (currentLang === 'en') {
      el.textContent = el.getAttribute('data-zh');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });

  if (button) {
    button.innerText = (currentLang === 'en') ? 'EN / 中文' : '中文 / EN';
  }

  currentLang = (currentLang === 'en') ? 'zh' : 'en';
}

window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("mobileMenu").style.display = "none";
  });
});


function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
