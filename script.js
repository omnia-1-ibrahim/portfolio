// Load profile picture
window.onload = function() {
    let profilePic = document.getElementById('profilePic');
    profilePic.src = 'C://Users//Dell//Pictures//WhatsApp Image 2024-10-16 at 18.38.18_63cbd4c1.jpg'; // استبدلي المسار بالمسار الصحيح لصورتك
};

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

