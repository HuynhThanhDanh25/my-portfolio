document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio của Huỳnh Thanh Danh đã load xong!');

    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');

    const projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(function() {
                project.style.transform = '';
            }, 200);
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert('Cảm ơn ' + name + ' đã gửi tin nhắn! Tôi sẽ liên hệ với bạn qua email: ' + email);
            
            contactForm.reset();
        });
    }
    
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.backgroundColor = '#333';
            nav.style.boxShadow = 'none';
        }
    });
});