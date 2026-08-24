// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}

// Handle call button clicks
document.addEventListener('DOMContentLoaded', function() {
    const callButtons = document.querySelectorAll('a[href^="tel:"]');
    
    callButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Allow default behavior (tel: protocol)
            console.log('Call button clicked: ' + this.href);
        });
    });
});