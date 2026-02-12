const translations = {
    en: {
        "hero-title": "Laptop Lag? <br><span class='glow'>Fixed for $5.</span>",
        "hero-desc": "SSD Swaps & Windows Setup. Expert service, budget price.",
        "btn-book": "Book Now",
        "service-title": "What I Do",
        "ssd-head": "SSD Swapping",
        "ssd-text": "Upgrade to high-speed storage. I handle hardware swap and cloning for a flat <span class='price'>$5</span> labor fee.",
        "win-head": "Windows Setup",
        "win-text": "Professional Windows 10/11 installation. No bloat, no errors, just pure speed. — <span class='price'>$10</span>",
        "mac-head": "MacBook Setup",
        "mac-text": "Factory resets and software troubleshooting for MacBooks. Get back to work fast. — <span class='price'>$10</span>",
        "pricing-title": "SSD & Labor Rates",
        "labor-label": "Labor (Any Service)",
        "ssd-128": "128GB SSD + Service",
        "ssd-256": "256GB SSD + Service",
        "ssd-512": "512GB SSD + Service",
        "ssd-1tb": "1TB SSD + Service",
        "disclaimer": "*SSD prices are estimates based on market rates.",
        "form-title": "Request a Repair",
        "opt-select": "Select Service",
        "opt-ssd": "SSD Swapping ($5 + Parts)",
        "opt-win": "Windows Setup ($10)",
        "opt-mac": "MacBook Setup ($10)",
        "btn-send": "Send to Telegram Bot",
        "lang-btn": "ភាសាខ្មែរ 🇰🇭"
    },
    kh: {
        "hero-title": "កុំព្យូទ័រដើរយឺត? <br><span class='glow'>ជួសជុលត្រឹមតែ $5។</span>",
        "hero-desc": "ប្តូរ SSD និងដំឡើង Windows។ សេវាកម្មច្បាស់លាស់ តម្លៃសមរម្យ។",
        "btn-book": "កក់សេវាកម្ម",
        "service-title": "សេវាកម្មរបស់ខ្ញុំ",
        "ssd-head": "ការផ្លាស់ប្តូរ SSD",
        "ssd-text": "តម្លើងល្បឿនកុំព្យូទ័រ។ ខ្ញុំប្តូរគ្រឿងបន្លាស់ និងចម្លងទិន្នន័យក្នុងតម្លៃឈ្នួលត្រឹមតែ <span class='price'>$5</span>។",
        "win-head": "ការដំឡើង Windows",
        "win-text": "ការដំឡើង Windows 10/11 បែបអាជីព។ ដើរលឿន គ្មានមេរោគ និងគ្មានបញ្ហា។ — <span class='price'>$10</span>",
        "mac-head": "ការរៀបចំ MacBook",
        "mac-text": "ដំឡើងឡើងវិញ និងដោះស្រាយបញ្ហាកម្មវិធីសម្រាប់ MacBook។ ជួយឱ្យអ្នកប្រើប្រាស់បានលឿនវិញ។ — <span class='price'>$10</span>",
        "pricing-title": "តម្លៃ SSD និងឈ្នួល",
        "labor-label": "តម្លៃឈ្នួល (គ្រប់សេវាកម្ម)",
        "ssd-128": "128GB SSD + សេវាកម្ម ($40)",
        "ssd-256": "256GB SSD + សេវាកម្ម ($60)",
        "ssd-512": "512GB SSD + សេវាកម្ម ($80)",
        "ssd-1tb": "1TB SSD + សេវាកម្ម ($94)",
        "disclaimer": "*តម្លៃ SSD អាចប្រែប្រួលតាមទីផ្សារជាក់ស្តែង។",
        "form-title": "ស្នើសុំការជួសជុល",
        "opt-select": "ជ្រើសរើសសេវាកម្ម",
        "opt-ssd": "ប្តូរ SSD ($5 + តម្លៃគ្រឿង)",
        "opt-win": "ដំឡើង Windows ($10)",
        "opt-mac": "ដំឡើង MacBook ($10)",
        "btn-send": "ផ្ញើទៅកាន់ Telegram",
        "lang-btn": "English 🇺🇸"
    }
};

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const serviceForm = document.getElementById('serviceForm');
    const langBtn = document.getElementById('lang-switch');

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'kh' : 'en';
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
        langBtn.innerText = translations[currentLang]["lang-btn"];
    });

    if (serviceForm) {
        serviceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const telegram = document.getElementById('telegram').value;
            const service = document.getElementById('serviceType').value;
            const issue = document.getElementById('issue').value;
            const botUsername = 'NightTech_Repair_Bot'; 
            const text = `🚀 *New Request*%0A👤: ${name}%0A📱: ${telegram}%0A🛠: ${service}%0A📝: ${issue}`;
            window.open(`https://t.me/${botUsername}?text=${text}`, '_blank');
        });
    }
});