// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
    
    // Header Scroll State
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Nav Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.setAttribute("data-lucide", "x");
            } else {
                icon.setAttribute("data-lucide", "menu");
            }
            lucide.createIcons();
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                icon.setAttribute("data-lucide", "menu");
                lucide.createIcons();
            });
        });
    }

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const portfolioGrid = document.getElementById("portfolioGrid");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(button => button.classList.remove("active"));
            // Add active class to clicked button
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");
                
                // Trigger transition
                item.style.opacity = "0";
                item.style.transform = "scale(0.95) translateY(10px)";
                
                setTimeout(() => {
                    if (filterValue === "all" || category === filterValue) {
                        item.style.display = "flex";
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transform = "scale(1) translateY(0)";
                        }, 50);
                    } else {
                        item.style.display = "none";
                    }
                }, 200);
            });
        });
    });

    // Portfolio Detail Modal Database
    const projectDatabase = {
        "mtc20": {
            title: "MTC20 - SBI Maintenance",
            category: "Sistem Industri",
            client: "Solusi Bangun Indonesia (SBI)",
            price: "Range Rp 18.000.000",
            image: "../sbi.jpg",
            icon: "settings",
            description: "MTC20 adalah aplikasi utama berbasis web yang dirancang untuk mendukung manajemen maintenance dan pengelolaan data teknis secara terintegrasi dalam lingkungan industri. Sistem ini menggabungkan beberapa modul seperti Work Order System (WOS20) untuk pengelolaan perintah kerja, Overhaul Data System (OVH24) untuk pencatatan dan monitoring perawatan mesin, Drawing Data System (DWG23) untuk manajemen dokumen dan gambar teknik, serta Bridging Management System (BMS24) untuk integrasi data antar sistem. Dengan dashboard monitoring dan laporan real-time, MTC20 membantu meningkatkan efisiensi operasional.",
            features: [
                "Work Order System (WOS20) - Pengelolaan perintah kerja teknisi",
                "Overhaul Data System (OVH24) - Pencatatan & monitoring overhaul mesin",
                "Drawing Data System (DWG23) - Manajemen gambar & dokumen teknik",
                "Bridging Management System (BMS24) - Integrasi data antar sistem internal",
                "Dashboard monitoring visual dengan status update real-time"
            ]
        },
        "shell": {
            title: "M3S - Marunda Shell App Checksheet",
            category: "Sistem Industri",
            client: "Shell Indonesia",
            price: "Range Rp 24.000.000",
            image: "../shell.webp",
            icon: "check-square",
            description: "Marunda Maintenance Management System (M3S) adalah aplikasi yang dirancang untuk mendukung manajemen pemeliharaan fasilitas di lingkungan kerja Shell, khususnya dalam pengelolaan komponen penting seperti spare parts, logbook operasional harian, checksheet reports, dan peralatan perbaikan. Aplikasi ini memastikan setiap proses pemeliharaan terdokumentasi dengan transparan untuk kelancaran operasional.",
            features: [
                "Digital Checksheet Report - Inspeksi harian bebas kertas",
                "Spare Part Inventory - Pelacakan stok komponen kritis",
                "Equipment Repair Logging - Rekam jejak servis peralatan",
                "Daily Logbook - Catatan pergantian shift dan isu penting",
                "Export PDF & Excel - Untuk kebutuhan audit keselamatan kerja"
            ]
        },
        "awanjaya": {
            title: "Awan Jaya - Warehouse Management",
            category: "Manajemen Gudang",
            client: "Awan Jaya",
            price: "Range Rp 8.000.000",
            image: "../awan.png",
            icon: "database",
            description: "Aplikasi ini adalah sistem manajemen gudang komprehensif yang membantu admin mengelola stok, transaksi, dan memproses perhitungan refaksi pelanggan. Dengan tampilan yang bersih dan alur kerja yang jelas, sistem ini meminimalkan kesalahan manusia dalam mencatat material keluar masuk serta balancing stok fisik gudang.",
            features: [
                "Stock In & Stock Out - Catatan pembelian dan penjualan real-time",
                "Balancing Material - Pencocokan data sistem dengan stok fisik",
                "Sistem Refaksi Pelanggan - Perhitungan potongan harga otomatis",
                "Broker Service - Layanan penghubung transaksi penjualan",
                "Manajemen Data Pelanggan & Mitra Supplier secara terpusat"
            ]
        },
        "freezy": {
            title: "Freezy - AC Marketplace & Service",
            category: "Marketplace",
            client: "Freezy AC",
            price: "Range Rp 27.300.000",
            image: null,
            icon: "snowflake",
            description: "Freezy adalah platform e-commerce dan marketplace jasa layanan pendingin ruangan (AC). Aplikasi ini menyediakan kemudahan bagi pelanggan untuk membeli unit AC baru, mencari sparepart AC asli, sekaligus memesan jasa pemasangan, servis rutin, serta perbaikan AC langsung dari teknisi bersertifikat terdekat.",
            features: [
                "E-Commerce Catalog - Penjualan suku cadang dan unit AC",
                "Sistem Pemesanan Servis AC - Booking jadwal kunjungan teknisi",
                "Aplikasi Teknisi - Manajemen order masuk untuk mitra teknisi",
                "Review & Rating - Transparansi kualitas pelayanan",
                "Multi Payment Gateway - Pembayaran aman via transfer & e-wallet"
            ]
        },
        "hipam": {
            title: "HIPAM Digital - Water Management System",
            category: "Profil & Lainnya",
            client: "Himpunan Penduduk Pemakai Air Minum (HIPAM)",
            price: "Range Rp 10.500.000",
            image: null,
            icon: "droplet",
            description: "HIPAM Digital adalah platform inovatif yang dirancang untuk mendukung tata kelola air bersih desa yang mandiri dan profesional. Aplikasi ini menyederhanakan proses administrasi, pencatatan angka meter air pelanggan bulanan, pencetakan tagihan otomatis, hingga monitoring kas dan keluhan operasional secara real-time.",
            features: [
                "Pencatatan Angka Meteran - Melalui foto & input digital oleh petugas",
                "Billing Otomatis - Kalkulasi tarif per kubik secara presisi",
                "Manajemen Pelanggan - Pencatatan status sambungan aktif/nonaktif",
                "Laporan Keuangan Terpadu - Kas masuk dan keluar yang transparan",
                "Portal Warga - Pengecekan riwayat penggunaan air bulanan"
            ]
        },
        "haloternak": {
            title: "HaloTernak - Pet Care & Cattle Marketplace",
            category: "Marketplace",
            client: "HaloTernak",
            price: "Range Rp 10.500.000",
            image: null,
            icon: "dog",
            description: "HaloTernak mengintegrasikan teknologi digital ke sektor peternakan dengan memfasilitasi komunikasi dan transaksi antara peternak lokal, dokter hewan, dan masyarakat umum. Peternak dapat memantau kandang, memanggil dokter hewan ke lokasi jika ternak sakit, dan memasarkan hewan ternak secara luas.",
            features: [
                "On-Demand Vet Service - Panggilan darurat dokter hewan terdekat",
                "Manajemen Kesehatan Ternak - Jadwal vaksin dan rekam medis digital",
                "Marketplace Ternak - Jual beli sapi, kambing, dan unggas aman",
                "Edukasi Peternakan - Artikel & panduan praktis memelihara ternak",
                "Forum Diskusi Komunitas - Ruang berbagi tips antarpeternak"
            ]
        }
    };

    // Modal Elements
    const modal = document.getElementById("portfolioModal");
    const modalBody = document.getElementById("modalBody");
    const modalClose = document.getElementById("modalClose");
    const modalBackdrop = document.getElementById("modalBackdrop");

    // Open Modal
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", () => {
            const projectId = item.getAttribute("data-project");
            const data = projectDatabase[projectId];

            if (data) {
                renderModalContent(data);
                modal.classList.add("active");
                document.body.style.overflow = "hidden"; // Prevent background scroll
            }
        });
    });

    // Close Modal Function
    const closeModal = () => {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // Restore background scroll
        setTimeout(() => {
            modalBody.innerHTML = ""; // Clear content
        }, 300);
    };

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);
    
    // Close on Escape Key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // Render Modal HTML
    function renderModalContent(data) {
        let mediaHTML = "";
        
        if (data.image) {
            mediaHTML = `<div class="modal-hero"><img src="${data.image}" alt="${data.title}"></div>`;
        } else {
            mediaHTML = `
                <div class="modal-hero">
                    <div class="modal-hero-placeholder">
                        <i data-lucide="${data.icon}" style="width: 64px; height: 64px;"></i>
                    </div>
                </div>`;
        }

        const featuresListHTML = data.features.map(f => `<li><i data-lucide="check" style="width:16px; height:16px; color:#10b981; margin-right:8px; display:inline-block; vertical-align:middle;"></i>${f}</li>`).join("");

        modalBody.innerHTML = `
            ${mediaHTML}
            <div class="modal-details">
                <span class="modal-cat">${data.category}</span>
                <h3 class="modal-title">${data.title}</h3>
                
                <div class="modal-meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Klien</span>
                        <span class="meta-value">${data.client}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Estimasi Harga Proyek</span>
                        <span class="meta-value" style="color: #0066ff;">${data.price}</span>
                    </div>
                </div>
                
                <div style="margin-bottom: 24px;">
                    <h4 class="modal-desc-heading">Tentang Proyek</h4>
                    <p class="modal-desc">${data.description}</p>
                </div>
                
                <div>
                    <h4 class="modal-desc-heading" style="margin-bottom: 12px;">Fitur & Modul Utama</h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.95rem; color: #475569;">
                        ${featuresListHTML}
                    </ul>
                </div>
                
                <div style="margin-top: 36px; display: flex; justify-content: flex-end;">
                    <a href="https://wa.me/6288235697734?text=Halo%20Gresik%20Web%2C%20saya%20tertarik%20dengan%20proyek%20seperti%20${encodeURIComponent(data.title)}" target="_blank" class="btn btn-primary btn-sm">
                        <i data-lucide="message-square" style="width:16px; height:16px; margin-right:8px;"></i> Buat Web Seperti Ini
                    </a>
                </div>
            </div>
        `;
        
        // Re-run Lucide to render icons inside the modal
        lucide.createIcons();
    }

    // FAQ Accordion Toggle
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");

        questionBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Close all other active items
            faqItems.forEach(faq => faq.classList.remove("active"));

            // Toggle active state for current item
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // Page Loader
    window.addEventListener("load", () => {
        setTimeout(() => {
            document.body.classList.add("loaded");
        }, 1200); // Allow loading animation to complete
    });

    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll(".reveal");
    
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px"
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    observer.unobserve(entry.target); // Reveal once
                }
            });
        }, observerOptions);
        
        revealElements.forEach(el => observer.observe(el));
    }

    // Nav Click Scroll Effect with Spotlight Flash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Add a subtle highlight flash when scroll finishes
                setTimeout(() => {
                    targetSection.classList.add('section-highlight');
                    setTimeout(() => {
                        targetSection.classList.remove('section-highlight');
                    }, 1200);
                }, 800);
            }
        });
    });
});
