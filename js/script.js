/* ==========================================
   SCRIPT LOVEKPOP.ID
   Dibuat untuk:
   - Validasi Form
   - Pesan Berhasil Dikirim
   - Navbar Active Saat Scroll
   - Animasi Scroll
========================================== */


/* ==========================================
   VALIDASI FORM KONTAK
========================================== */

// mengambil form "hubungi kami" berdasarkan id
const contactForm = document.getElementById("contactForm");

// menjalankan fungsi saat tombol kirim ditekan
contactForm.addEventListener("submit", function(event){

    // mencegah form langsung dikirim/ halaman ter-refresh otomatis
    event.preventDefault();

    // mengambil semua input dan textarea
    const inputs = contactForm.querySelectorAll("input, textarea");

    // status awal form dianggap valid
    let valid = true;

    // memeriksa setiap input sudah terisi
    inputs.forEach(function(input){

        // jika kosong
        if(input.value.trim() === ""){

            valid = false;

            // memberi border merah
            input.style.border = "2px solid red";

        }else{

            // mengembalikan border normal
            input.style.border = "none";

        }

    });

    // jika semua input terisi
    if(valid){

        alert("Terimakasih telah menghubungi LoveKpop.Id 💙");

        // mengosongkan form
        contactForm.reset();

    }else{

        alert("Mohon lengkapi semua data terlebih dahulu.");

    }

});


/* ==========================================
   EFEK ACTIVE MENU SAAT SCROLL
========================================== */

// mengambil semua menu navbar
const navLinks = document.querySelectorAll(".nav-link");

// mengambil semua section yang memiliki id
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    // mengecek posisi scroll
    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            currentSection = section.getAttribute("id");

        }

    });

    // mengubah menu aktif sesuai section
    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") === "#" + currentSection
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   ANIMASI SAAT HALAMAN DIMUAT
========================================== */

// mengambil hero section
const heroSection = document.querySelector(".hero-section");

// memberi efek muncul saat halaman dibuka
window.addEventListener("load", () => {

    heroSection.style.opacity = "0";

    setTimeout(() => {

        heroSection.style.transition = "1s";

        heroSection.style.opacity = "1";

    }, 200);

});


/* ==========================================
   EFEK HOVER CARD PRODUK
========================================== */

// mengambil semua card produk
const productCards = document.querySelectorAll(".product-card");

// menambahkan event ke setiap card
productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/* ==========================================
   TOMBOL KEMBALI KE ATAS
========================================== */

// membuat tombol secara otomatis
const topButton = document.createElement("button");

// isi tombol
topButton.innerHTML = "↑";

// menambahkan ke halaman
document.body.appendChild(topButton);

// memberi style dasar
topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.backgroundColor = "#0b2d5e";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

// menampilkan tombol saat scroll
window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

// kembali ke atas saat diklik
topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   PESAN SELAMAT DATANG
========================================== */

// menampilkan pesan di console browser
console.log("Selamat datang di LoveKpop.Id");


/* ==========================================
   MENAMPILKAN TAHUN OTOMATIS DI FOOTER
========================================== */

// mengambil elemen footer
const footer = document.querySelector("footer");

// mengambil tahun sekarang
const year = new Date().getFullYear();

// mengubah isi footer otomatis
footer.innerHTML =
`© ${year} LoveKpop.Id. All Rights Reserved.`;