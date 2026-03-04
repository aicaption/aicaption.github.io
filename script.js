// script.js
import Header from './header.js';
import Footer from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header
    const headerContainer = document.querySelector('#header-placeholder');
    if (headerContainer) {
        headerContainer.innerHTML = Header();
        // Initialize mobile menu logic after injection
        initNavigation();
    }

    // Inject Footer
    const footerContainer = document.querySelector('#footer-placeholder');
    if (footerContainer) {
        footerContainer.innerHTML = Footer();
    }

    // Initialize Theme Toggle (Dark Mode)
    initTheme();
});

function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
