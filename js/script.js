// ===================================
// PIN - PERJUANGAN INSPIRASI NYATA
// Portfolio Website JavaScript
// ===================================

/* ===== Language System ===== */
const translations = {
    id: {
        // Navbar
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Kontak',
        'tagline': 'PERJUANGAN INSPIRASI NYATA',
        
        // Hero
        'adminTitle': 'Login Admin',
        'loginBtn-id': 'Login',
        'uploadPhotoLabel': 'Upload Foto Profil:',
        'editHeroTitle': 'Edit Bagian Hero',
        'editNameLabel': 'Nama:',
        'editSubtitleLabel': 'Subtitle:',
        'editMotivationLabel': 'Teks Motivasi:',
        'editBibleVerseLabel': 'Referensi Ayat:',
        'editBibleTextLabel': 'Teks Ayat:',
        'saveHeroBtn': 'Simpan Perubahan Hero',
        'managePortfolioTitle': 'Kelola Portfolio',
        'projectCoverLabel': 'Gambar Cover Proyek:',
        'projectTitleLabel': 'Judul Proyek:',
        'projectSubtitleLabel': 'Subtitle Proyek:',
        'projectDescLabel': 'Deskripsi Proyek:',
        'projectCategoryLabel': 'Kategori Proyek:',
        'projectFilesLabel': 'Upload File Proyek:',
        'filesHint': 'Pilih multiple file dari tipe apapun',
        'addProjectBtn': 'Tambah Proyek Baru',
        'editExistingTitle': 'Edit Proyek yang Sudah Ada:',
        'deleteProjectBtn': 'Hapus Proyek Terpilih',
        'aboutTitle': 'Tentang Saya',
        'aboutText1': 'Saya adalah seorang <span class="highlight">pejuang inspirasi nyata</span> yang percaya bahwa setiap tantangan adalah kesempatan untuk tumbuh. Perjalanan saya dimulai dari nol, dengan determinasi dan <span class="highlight">disiplin</span> sebagai fondasi.',
        'aboutText2': 'Melalui <span class="highlight">perjuangan konsisten</span>, saya telah belajar bahwa <span class="highlight">iman, kerja keras, dan konsistensi</span> adalah kunci kesuksesan. Setiap produk dan proyek yang saya buat adalah bukti nyata dari usaha dan dedikasi.',
        'aboutText3': 'Saya percaya pada <span class="highlight">inspirasi yang lahir dari usaha nyata</span>, bukan sekadar mimpi. Filosofi PIN adalah mengubah perjuangan menjadi power, dan power menjadi inspirasi untuk orang lain.',
        'skillsTitle': 'Keahlian',
        'skillTech': 'Keahlian Teknis',
        'skillSoft': 'Soft Skills',
        'portfolioTitle': 'Portfolio',
        'noProjectsText': 'Belum ada proyek. Admin dapat menambah proyek dari admin panel.',
        'contactTitle': 'Hubungi Saya',
        'emailLabel': 'Email',
        'whatsappLabel': 'WhatsApp',
        'linkedinLabel': 'LinkedIn',
        'githubLabel': 'GitHub',
        'instagramLabel': 'Instagram',
        'facebookLabel': 'Facebook',
        'tiktokLabel': 'TikTok',
        'locationLabel': '📍 Jakarta, Indonesia',
        'footerName': 'Pinsensius Andreas',
        'footerQuote': '"Perjuangan hari ini adalah inspirasi besok."',
        'projectFilesHeading': 'File Proyek',
        'downloadProjectBtn': 'Download File',
        'loginHint': 'Hint: password = "pin2024"',
    },
    en: {
        // Navbar
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'tagline': 'STRUGGLE INSPIRATION REALITY',
        
        // Hero
        'adminTitle': 'Admin Login',
        'loginBtn-id': 'Login',
        'uploadPhotoLabel': 'Upload Profile Photo:',
        'editHeroTitle': 'Edit Hero Section',
        'editNameLabel': 'Name:',
        'editSubtitleLabel': 'Subtitle:',
        'editMotivationLabel': 'Motivation Text:',
        'editBibleVerseLabel': 'Bible Verse Reference:',
        'editBibleTextLabel': 'Bible Verse Text:',
        'saveHeroBtn': 'Save Hero Changes',
        'managePortfolioTitle': 'Manage Portfolio',
        'projectCoverLabel': 'Project Cover Image:',
        'projectTitleLabel': 'Project Title:',
        'projectSubtitleLabel': 'Project Subtitle:',
        'projectDescLabel': 'Project Description:',
        'projectCategoryLabel': 'Project Category:',
        'projectFilesLabel': 'Upload Project Files:',
        'filesHint': 'Select multiple files of any type',
        'addProjectBtn': 'Add New Project',
        'editExistingTitle': 'Edit Existing Projects:',
        'deleteProjectBtn': 'Delete Selected Project',
        'aboutTitle': 'About Me',
        'aboutText1': 'I am a <span class="highlight">real inspiration fighter</span> who believes every challenge is an opportunity to grow. My journey started from zero, with determination and <span class="highlight">discipline</span> as the foundation.',
        'aboutText2': 'Through <span class="highlight">consistent struggle</span>, I have learned that <span class="highlight">faith, hard work, and consistency</span> are keys to success. Every product and project I create is proof of real effort and dedication.',
        'aboutText3': 'I believe in <span class="highlight">inspiration born from real effort</span>, not just dreams. The PIN philosophy is to transform struggle into power, and power into inspiration for others.',
        'skillsTitle': 'Skills',
        'skillTech': 'Technical Skills',
        'skillSoft': 'Soft Skills',
        'portfolioTitle': 'Portfolio',
        'noProjectsText': 'No projects yet. Admin can add projects from the admin panel.',
        'contactTitle': 'Contact Me',
        'emailLabel': 'Email',
        'whatsappLabel': 'WhatsApp',
        'linkedinLabel': 'LinkedIn',
        'githubLabel': 'GitHub',
        'instagramLabel': 'Instagram',
        'facebookLabel': 'Facebook',
        'tiktokLabel': 'TikTok',
        'locationLabel': '📍 Jakarta, Indonesia',
        'footerName': 'Pinsensius Andreas',
        'footerQuote': '"Today\'s struggle is tomorrow\'s inspiration."',
        'projectFilesHeading': 'Project Files',
        'downloadProjectBtn': 'Download Files',
        'loginHint': 'Hint: password = "pin2024"',
    }
};

// Get all elements with data-id for translation
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update all elements with data-id attribute
    document.querySelectorAll('[data-id]').forEach(element => {
        const key = element.getAttribute('data-id');
        if (translations[lang] && translations[lang][key]) {
            if (element.id === 'aboutText1' || element.id === 'aboutText2' || element.id === 'aboutText3') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Special handling for year and hero content
    document.getElementById('footerYear').textContent = `© ${new Date().getFullYear()} PIN`;
    
    // Update hero name and other text
    updateHeroDisplay();
    updatePortfolioDisplay();
}

// Initial language setup
let currentLanguage = localStorage.getItem('language') || 'id';
document.querySelectorAll('[data-id]').forEach(element => {
    const key = element.getAttribute('data-id');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        if (element.id === 'aboutText1' || element.id === 'aboutText2' || element.id === 'aboutText3') {
            element.innerHTML = translations[currentLanguage][key];
        } else {
            element.textContent = translations[currentLanguage][key];
        }
    }
});

/* ===== Language Toggle ===== */
document.getElementById('langToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
    setLanguage(currentLanguage);
});

/* ===== Navigation & Scrolling ===== */
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ===== Admin System ===== */
const ADMIN_PASSWORD = 'pin2024';
let isAdminMode = false;

const adminToggleBtn = document.getElementById('adminToggleBtn');
const adminModal = document.getElementById('adminModal');
const closeAdminModal = document.getElementById('closeAdminModal');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const adminPassword = document.getElementById('adminPassword');

// Admin toggle
adminToggleBtn.addEventListener('click', () => {
    adminModal.style.display = 'flex';
});

// Close modal
closeAdminModal.addEventListener('click', () => {
    adminModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === adminModal) {
        adminModal.style.display = 'none';
    }
});

// Admin login
loginBtn.addEventListener('click', () => {
    if (adminPassword.value === ADMIN_PASSWORD) {
        isAdminMode = true;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadAdminData();
        loadProjectsToSelect();
    } else {
        alert('Password salah!');
    }
});

// Admin logout
logoutBtn.addEventListener('click', () => {
    isAdminMode = false;
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    adminPassword.value = '';
    adminModal.style.display = 'none';
});

/* ===== Local Storage System ===== */
const defaultHeroData = {
    name: 'Pinsensius Andreas',
    subtitle: 'Pejuang Inspirasi Nyata - Mengubah Perjuangan Menjadi Inspirasi',
    motivation: '"Dalam setiap perjuangan ada disiplin, dalam setiap disiplin ada iman, dan dalam setiap iman ada inspirasi nyata."',
    bibleVerse: 'Roma 5:3–4',
    bibleText: 'Tidak hanya itu saja, kita juga bergembira dalam berbagai pencobaan, karena kita tahu bahwa pencobaan itu menghasilkan ketekunan; dan ketekunan menghasilkan pengalaman hidup yang matang; dan pengalaman hidup yang matang menghasilkan pengharapan yang tidak membuahkan kekecewaan.',
    profilePhoto: null
};

// Get data from localStorage
function getHeroData() {
    const stored = localStorage.getItem('pinHeroData');
    return stored ? JSON.parse(stored) : defaultHeroData;
}

function saveHeroData(data) {
    localStorage.setItem('pinHeroData', JSON.stringify(data));
    updateHeroDisplay();
}

function getProjects() {
    const stored = localStorage.getItem('pinProjects');
    return stored ? JSON.parse(stored) : [];
}

function saveProjects(projects) {
    localStorage.setItem('pinProjects', JSON.stringify(projects));
    updatePortfolioDisplay();
}

// Update hero section display
function updateHeroDisplay() {
    const heroData = getHeroData();
    document.getElementById('heroName').textContent = heroData.name;
    document.getElementById('heroSubtitle').textContent = heroData.subtitle;
    document.getElementById('heroMotivation').textContent = heroData.motivation;
    document.getElementById('heroBibleVerse').textContent = heroData.bibleVerse;
    document.getElementById('heroBibleText').textContent = heroData.bibleText;
    
    if (heroData.profilePhoto) {
        document.getElementById('profilePhoto').src = heroData.profilePhoto;
    }
}

// Update portfolio display
function updatePortfolioDisplay() {
    const projects = getProjects();
    const portfolioGrid = document.getElementById('portfolioGrid');
    const emptyMsg = document.getElementById('emptyPortfolioMsg');
    
    portfolioGrid.innerHTML = '';
    
    if (projects.length === 0) {
        emptyMsg.style.display = 'block';
        return;
    }
    
    emptyMsg.style.display = 'none';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.innerHTML = `
            <img src="${project.coverImage}" alt="${project.title}" class="portfolio-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22200%22%3E%3Crect fill=%22%23333%22 width=%22280%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23666%22 font-size=%2214%22%3EProject Image%3C/text%3E%3C/svg%3E'">
            <div class="portfolio-info">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-subtitle">${project.subtitle}</p>
                <button class="btn btn-primary view-project-btn" onclick="viewProject(${index})">View Project</button>
            </div>
        `;
        portfolioGrid.appendChild(card);
    });
}

// View project detail
function viewProject(index) {
    const projects = getProjects();
    const project = projects[index];
    
    document.getElementById('projectDetailTitle').textContent = project.title;
    document.getElementById('projectDetailSubtitle').textContent = project.subtitle;
    document.getElementById('projectDetailCategory').textContent = `Category: ${project.category}`;
    document.getElementById('projectDetailDescription').textContent = project.description;
    document.getElementById('projectDetailImage').src = project.coverImage;
    
    const filesList = document.getElementById('projectFilesList');
    filesList.innerHTML = '';
    
    if (project.files && project.files.length > 0) {
        project.files.forEach((file, fileIndex) => {
            const li = document.createElement('li');
            const fileName = file.name || `File ${fileIndex + 1}`;
            li.innerHTML = `
                <a href="${file.data}" download="${fileName}">📄 ${fileName}</a>
            `;
            filesList.appendChild(li);
        });
    } else {
        filesList.innerHTML = '<li>No files available</li>';
    }
    
    // Store current project for downloading
    window.currentProjectIndex = index;
    
    document.getElementById('projectModal').style.display = 'flex';
}

// Close project modal
document.getElementById('closeProjectModal').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
});

/* ===== Admin Functions ===== */
function loadAdminData() {
    const heroData = getHeroData();
    document.getElementById('heroName').value = heroData.name;
    document.getElementById('heroSubtitle').value = heroData.subtitle;
    document.getElementById('heroMotivation').value = heroData.motivation;
    document.getElementById('heroBibleVerse').value = heroData.bibleVerse;
    document.getElementById('heroBibleText').value = heroData.bibleText;
}

// Upload profile photo
document.getElementById('uploadPhotoBtn').addEventListener('click', () => {
    const input = document.getElementById('profilePhotoInput');
    const file = input.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const heroData = getHeroData();
            heroData.profilePhoto = e.target.result;
            saveHeroData(heroData);
            input.value = '';
            alert('Foto profil berhasil diupload!');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Pilih file terlebih dahulu!');
    }
});

// Save hero changes
document.getElementById('saveHeroBtn').addEventListener('click', () => {
    const heroData = {
        name: document.getElementById('heroName').value || defaultHeroData.name,
        subtitle: document.getElementById('heroSubtitle').value || defaultHeroData.subtitle,
        motivation: document.getElementById('heroMotivation').value || defaultHeroData.motivation,
        bibleVerse: document.getElementById('heroBibleVerse').value || defaultHeroData.bibleVerse,
        bibleText: document.getElementById('heroBibleText').value || defaultHeroData.bibleText,
        profilePhoto: getHeroData().profilePhoto
    };
    
    saveHeroData(heroData);
    alert('Perubahan hero berhasil disimpan!');
});

// Store uploaded files
let uploadedFiles = [];

document.getElementById('projectFilesInput').addEventListener('change', (e) => {
    uploadedFiles = [];
    const files = e.target.files;
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = '';
    
    Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedFiles.push({
                name: file.name,
                data: event.target.result
            });
        };
        reader.readAsDataURL(file);
        
        const li = document.createElement('li');
        li.textContent = `✓ ${file.name}`;
        filesList.appendChild(li);
    });
});

// Upload cover image
let projectCoverImage = null;

document.getElementById('projectCoverInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            projectCoverImage = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Add new project
document.getElementById('addProjectBtn').addEventListener('click', () => {
    const title = document.getElementById('projectTitle').value;
    const subtitle = document.getElementById('projectSubtitle').value;
    const description = document.getElementById('projectDescription').value;
    const category = document.getElementById('projectCategory').value;
    
    if (!title) {
        alert('Judul proyek harus diisi!');
        return;
    }
    
    if (!projectCoverImage) {
        alert('Gambar cover harus diupload!');
        return;
    }
    
    const newProject = {
        title: title,
        subtitle: subtitle,
        description: description,
        category: category,
        coverImage: projectCoverImage,
        files: uploadedFiles
    };
    
    const projects = getProjects();
    projects.push(newProject);
    saveProjects(projects);
    
    // Reset form
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectSubtitle').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectCategory').value = '';
    document.getElementById('projectCoverInput').value = '';
    document.getElementById('projectFilesInput').value = '';
    document.getElementById('filesList').innerHTML = '';
    uploadedFiles = [];
    projectCoverImage = null;
    
    loadProjectsToSelect();
    alert('Proyek berhasil ditambahkan!');
});

// Load projects to select dropdown
function loadProjectsToSelect() {
    const projects = getProjects();
    const projectSelect = document.getElementById('projectSelect');
    projectSelect.innerHTML = '<option value="">-- Pilih proyek --</option>';
    
    projects.forEach((project, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = project.title;
        projectSelect.appendChild(option);
    });
}

// Delete project
document.getElementById('deleteProjectBtn').addEventListener('click', () => {
    const projectSelect = document.getElementById('projectSelect');
    const selectedIndex = projectSelect.value;
    
    if (selectedIndex === '') {
        alert('Pilih proyek terlebih dahulu!');
        return;
    }
    
    if (confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
        const projects = getProjects();
        projects.splice(parseInt(selectedIndex), 1);
        saveProjects(projects);
        loadProjectsToSelect();
        alert('Proyek berhasil dihapus!');
    }
});

// Download project files
document.getElementById('downloadProjectBtn').addEventListener('click', () => {
    const projects = getProjects();
    const project = projects[window.currentProjectIndex];
    
    if (project.files && project.files.length > 0) {
        project.files.forEach(file => {
            const link = document.createElement('a');
            link.href = file.data;
            link.download = file.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    } else {
        alert('Tidak ada file untuk didownload');
    }
});

/* ===== Initialize ===== */
document.addEventListener('DOMContentLoaded', () => {
    updateHeroDisplay();
    updatePortfolioDisplay();
    document.getElementById('footerYear').textContent = `© ${new Date().getFullYear()} PIN`;
    setLanguage(currentLanguage);
});
