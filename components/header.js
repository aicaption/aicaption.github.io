// header.js
const Header = () => {
  return `
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <div class="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white animate-pulse-glow">
                    <i class="fas fa-stars text-xl"></i>
                </div>
                <span class="text-xl font-bold">AI<span class="gradient-text"> Caption Generator</span></span>
            </div>
            
            <nav class="hidden md:flex space-x-6">
                <a href="/" class="font-medium hover:text-primary dark:hover:text-secondary transition">Home</a>
                <a href="/about" class="font-medium hover:text-primary dark:hover:text-secondary transition">About Us</a>
                <a href="/contact" class="font-medium hover:text-primary dark:hover:text-secondary transition">Contact Us</a>
            </nav>
            
            <div class="flex items-center space-x-4">
                <button id="theme-toggle" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i class="fas fa-moon dark:hidden"></i>
                    <i class="fas fa-sun hidden dark:block"></i>
                </button>
                <a href="/#chat" class="gradient-bg hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition">
                    Start Chat
                </a>
                <button id="mobileMenuBtn" class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <div id="mobileMenu" class="md:hidden hidden bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-700">
            <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
                <a href="/" class="text-left py-2 font-medium hover:text-primary transition">Home</a>
                <a href="/about" class="text-left py-2 font-medium hover:text-primary transition">About Us</a>
                <a href="/contact" class="text-left py-2 font-medium hover:text-primary transition">Contact Us</a>
            </div>
        </div>
    </header>
  `;
};
export default Header;
