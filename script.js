const translations = {
    en: {
        pageTitle: "Swiss Kitchen & Wardrobe | Luxury Kitchens & Bespoke Wardrobes in UAE",
        heroTitle: "Modern kitchens with high-quality materials",
        heroSubtitle: "Custom luxury kitchen designs and bespoke wardrobes tailored for homes across Dubai and Sharjah.",
        heroBtn: "Contact us now",
        kitchensTitle: "Modern Kitchens",
        wardrobesTitle: "Wardrobes & Laundry",
        locationTitle: "Our Location & Contact",
        ctaText1: "Do you like this design? What about contacting us to design a better one?",
        ctaText2: "Looking for custom wardrobes? Let us create them for you",
        ctaBtn: "Contact Us Now",
        locHeading: "Visit Us or Let Us Come to You",
        locDesc: "Contact us to send you our exact location, or let us visit you to measure your kitchen and provide free engineering consultation on-site.",
        locBtn: "Request Measurement Visit",
        downloadPdf: "Download Company Profile (PDF)",
        privacyLink: "Privacy Policy",
        footerRights: "© 2026 Swiss Kitchen & Wardrobe. All rights reserved.",
        modalBtn: "Contact Us"
    },
    ar: {
        pageTitle: "مطابخ وخزائن سويس | مطابخ فاخرة وخزائن مخصصة في الإمارات",
        heroTitle: "مطابخ عصرية بخامات عالية الجودة",
        heroSubtitle: "تصاميم مطابخ فاخرة وخزائن مخصصة تلبي أحدث صيحات الديكور في دبي والشارقة.",
        heroBtn: "تواصل معنا الآن",
        kitchensTitle: "مطابخ حديثة",
        wardrobesTitle: "خزائن وغرف غسيل",
        locationTitle: "موقعنا وتواصل معنا",
        ctaText1: "هل يعجبك هذا المطبخ؟ احصل على تصميم يناسب ذوقك",
        ctaText2: "هل تبحث عن خزائن مخصصة لمنزلك؟ دعنا نبتكرها لك",
        ctaBtn: "تواصل معنا الآن",
        locHeading: "تفضل بزيارتنا أو دعنا نصل إليك",
        locDesc: "تواصل معنا لنرسل لك موقعنا بدقة، أو دعنا نزورك برفع قياسات مطبخك وتقديم الاستشارة الهندسية المجانية في موقعك.",
        locBtn: "اطلب زيارة لرفع القياسات",
        downloadPdf: "تحميل بروفايل الشركة (PDF)",
        privacyLink: "سياسة الخصوصية",
        footerRights: "© 2026 جميع الحقوق محفوظة.",
        modalBtn: "تواصل معنا"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    
    const langTextEl = document.querySelector('#langSwitcher .lang-text');
    if (langTextEl) {
        langTextEl.textContent = currentLang === 'en' ? 'عربي' : 'English';
    }
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');

function openModal(imageSrc) {
    if (modal && modalImg) {
        modalImg.src = imageSrc;
        modal.style.display = 'flex';
    }
}

function closeModal() {
    if (modal && modalImg) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-up').forEach(el => {
        observer.observe(el);
    });
});