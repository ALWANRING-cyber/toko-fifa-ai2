// DATA PRODUK (12 Produk)
const products = [
    // E-BOOKS
    { name: "E-book AI Super Pemula", category: "ebook", price: "Rp49.000", desc: "Panduan lengkap AI dari nol. 150 halaman + bonus prompt.", icon: "fas fa-book", link: "http://lynk.id/toko_fifa/28542w50kg4r/checkout" },
    { name: "E-book ChatGPT Mastery", category: "ebook", price: "Rp69.000", desc: "Cara jadi power user ChatGPT, prompt lanjutan.", icon: "fas fa-robot", link: "https://lynk.id/toko_fifa/chatgpt-master" },
    { name: "E-book AI untuk UMKM", category: "ebook", price: "Rp59.000", desc: "Strategi AI untuk bisnis kecil menengah.", icon: "fas fa-store", link: "https://lynk.id/toko_fifa/ai-umkm" },
    
    // TEMPLATE PROMPT
    { name: "Template Prompt 200+", category: "prompt", price: "Rp79.000", desc: "Koleksi prompt untuk marketing, coding, content creator.", icon: "fas fa-magic", link: "https://lynk.id/toko_fifa/prompt-200" },
    { name: "Prompt Copywriting Hero", category: "prompt", price: "Rp49.000", desc: "50 prompt khusus copywriting iklan & sales.", icon: "fas fa-pen-fancy", link: "https://lynk.id/toko_fifa/prompt-copy" },
    { name: "Prompt Coding Helper", category: "prompt", price: "Rp59.000", desc: "Prompt untuk bantu coding Python, JS, HTML.", icon: "fas fa-code", link: "https://lynk.id/toko_fifa/prompt-coding" },
    
    // JASA SETUP AI
    { name: "Setup Chatbot WA + AI", category: "jasa", price: "Rp299.000", desc: "Instalasi chatbot AI di WA, auto reply + analisis.", icon: "fab fa-whatsapp", link: "https://lynk.id/toko_fifa/chatbot-wa" },
    { name: "Jasa Custom GPTs", category: "jasa", price: "Rp199.000", desc: "Bikin GPT custom sesuai kebutuhan bisnis kamu.", icon: "fas fa-cogs", link: "https://lynk.id/toko_fifa/custom-gpt" },
    { name: "Automation Make.com + AI", category: "jasa", price: "Rp349.000", desc: "Setup otomatisasi kerja pakai AI + Make.", icon: "fas fa-chart-line", link: "https://lynk.id/toko_fifa/automation" },
    
    // TOOLS DIGITAL
    { name: "Paket Tools AI Pro", category: "tools", price: "Rp129.000", desc: "Kumpulan link tools AI premium + bonus akses.", icon: "fas fa-tools", link: "https://lynk.id/toko_fifa/tools-pro" },
    { name: "Template Canva AI", category: "tools", price: "Rp39.000", desc: "30 template Canva siap pakai + prompt AI image.", icon: "fas fa-palette", link: "https://lynk.id/toko_fifa/canva-ai" },
    { name: "Data Set AI Training", category: "tools", price: "Rp89.000", desc: "Dataset siap pakai untuk training AI basic.", icon: "fas fa-database", link: "https://lynk.id/toko_fifa/dataset-ai" }
];

// FUNCTION: Render Produk
function renderProducts(category = "all") {
    const grid = document.getElementById("productGrid");
    if (!grid) return;
    
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    
    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <i class="${p.icon}"></i>
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">${p.price}</div>
            <a href="${p.link}" target="_blank" class="btn-small">Beli di Lynk →</a>
        </div>
    `).join("");
}

// FUNCTION: Filter
function setupFilters() {
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProducts(btn.getAttribute("data-cat"));
        });
    });
}

// FUNCTION: Form Request WA
function setupRequestForm() {
    const form = document.getElementById("requestForm");
    if (!form) return;
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const name = document.getElementById("reqName").value.trim();
        const wa = document.getElementById("reqWa").value.trim();
        const msg = document.getElementById("reqMsg").value.trim();
        
        if (name === "" || wa === "" || msg === "") {
            alert("Harap isi semua field!");
            return;
        }
        
        const text = `Halo%20Toko%20AFIFA%20AI%0A%0A*Request Produk AI Custom*%0A%0ANama%3A%20${encodeURIComponent(name)}%0ANo%20WA%3A%20${encodeURIComponent(wa)}%0ARequest%3A%20${encodeURIComponent(msg)}`;
        window.open(`https://wa.me/6282146423256?text=${text}`, "_blank");
        form.reset();
        alert("Request terkirim! Silakan lanjutkan chat di WhatsApp.");
    });
}

// FUNCTION: Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href === "#") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

// ========== STAFF MODAL FUNCTIONS (sudah diubah ke AFIFA) ==========
function openStaffModal(person) {
    const modal = document.getElementById("staffModal");
    const modalBody = document.getElementById("staffModalBody");
    
    let content = "";
    if (person === "afifa") {
        content = `
            <h2 style="color:#a855f7;">AFIFA</h2>
            <p><strong>Owner & AI Specialist</strong></p>
            <p>👋 Halo! Saya AFIFA, pendiri Toko AFIFA AI. Saya memiliki pengalaman lebih dari 5 tahun di bidang AI dan otomatisasi bisnis. Saya bertanggung jawab mengembangkan strategi produk AI, menjalin kemitraan, dan memastikan setiap produk yang kami jual berkualitas tinggi. Saya juga langsung menangani konsultasi untuk klien premium.</p>
            <p>📞 <i class="fab fa-whatsapp"></i> <a href="https://wa.me/6282146423256" style="color:#a855f7;">+62 821-4642-3256</a></p>
            <p>📧 <a href="mailto:tokoafifaai@gmail.com" style="color:#a855f7;">tokoafifaai@gmail.com</a></p>
        `;
    } else if (person === "alwan") {
        content = `
            <h2 style="color:#a855f7;">Alwan</h2>
            <p><strong>Co-Founder & Developer</strong></p>
            <p>💻 Saya Alwan, co-founder yang juga bertanggung jawab di bagian teknis. Saya membuat website ini, mengembangkan sistem chatbot, dan memastikan semua produk digital berjalan lancar. Saya juga yang mengajarkan coding dan AI kepada tim. Kalau ada masalah teknis, hubungi saya!</p>
            <p>📞 <i class="fab fa-whatsapp"></i> <a href="https://wa.me/6285218682038" style="color:#a855f7;">+62 852-1868-2038</a></p>
            <p>📧 <a href="mailto:alwanring@gmail.com" style="color:#a855f7;">alwanring@gmail.com</a></p>
        `;
    } else if (person === "rina") {
        content = `
            <h2 style="color:#a855f7;">Rina</h2>
            <p><strong>Customer Support</strong></p>
            <p>😊 Halo, saya Rina! Saya di sini untuk membantu pelanggan. Saya akan menjawab pertanyaan seputar produk, proses pembelian, dan setelah pembelian. Saya berusaha merespon dalam waktu kurang dari 10 menit di jam kerja. Jangan ragu chat saya ya!</p>
            <p>📞 <i class="fab fa-whatsapp"></i> <a href="https://wa.me/6282146423256" style="color:#a855f7;">+62 821-4642-3256</a></p>
            <p>📧 <a href="mailto:rina@tokoafifa.ai" style="color:#a855f7;">rina@tokoafifa.ai</a></p>
        `;
    } else if (person === "andi") {
        content = `
            <h2 style="color:#a855f7;">Andi</h2>
            <p><strong>AI Trainer & Prompt Engineer</strong></p>
            <p>🧠 Saya Andi, spesialis dalam pembuatan prompt dan pelatihan AI. Saya yang membuat semua template prompt dan melatih tim cara menggunakan AI secara efektif. Saya juga memberikan sesi coaching untuk klien yang ingin jago pakai AI.</p>
            <p>📞 <i class="fab fa-whatsapp"></i> <a href="https://wa.me/6282146423256" style="color:#a855f7;">+62 821-4642-3256</a></p>
            <p>📧 <a href="mailto:andi@tokoafifa.ai" style="color:#a855f7;">andi@tokoafifa.ai</a></p>
        `;
    }
    modalBody.innerHTML = content;
    modal.style.display = "flex";
}

function closeStaffModal() {
    document.getElementById("staffModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("staffModal");
    if (event.target === modal) {
        closeStaffModal();
    }
}

// INIT
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    setupFilters();
    setupRequestForm();
    setupSmoothScroll();
});
