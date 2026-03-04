// footer.js
const Footer = () => {
  return `
    <footer class="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="col-span-1 lg:col-span-1">
                    <div class="flex items-center space-x-2 mb-6">
                        <div class="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white">
                            <i class="fas fa-stars"></i>
                        </div>
                        <span class="text-xl font-bold">AI<span class="gradient-text"> Caption Generator</span></span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        Empowering creativity and productivity with advanced AI assistance powered by Google's Gemini models.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Quick Links</h4>
                    <ul class="space-y-4">
                        <li><a href="/" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Home</a></li>
                        <li><a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">About Us</a></li>
                        <li><a href="/contact" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Contact Us</a></li>
                        <li><a href="/#features" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Features</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Legal</h4>
                    <ul class="space-y-4">
                        <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary transition">Cookie Policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6">Newsletter</h4>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">Subscribe to get the latest AI news and updates.</p>
                    <form id="newsletter-form" class="flex flex-col space-y-2">
                        <input type="email" id="newsletter-email" placeholder="Your email address" required class="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary">
                        <button type="submit" class="gradient-bg text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
                            Subscribe
                        </button>
                    </form>
                    <div id="newsletter-status" class="mt-2 text-sm hidden"></div>
                </div>
            </div>
            
            <div class="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    &copy; 2026 AI Caption Generator. Powered by Google Gemini. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  `;
};

export default Footer;
