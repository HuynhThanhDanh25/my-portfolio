document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio của Huỳnh Thanh Danh đã load xong!');
    
    alert('Chào mừng bạn đến với portfolio của Huỳnh Thanh Danh! Website này đã được deploy lên GitHub Pages và Netlify.');
    
    const projects = document.querySelectorAll('.project');
    if (projects.length > 0) {
        projects.forEach(function(project) {
            project.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(function() {
                    project.style.transform = '';
                }, 200);
            });
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert('Cảm ơn ' + name + ' đã gửi tin nhắn! Chúng tôi sẽ liên hệ với bạn qua email: ' + email);
            
            contactForm.reset();
        });
    }
    
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.backgroundColor = '#2c3e50';
            nav.style.boxShadow = 'none';
        }
    });
    
    const footer = document.querySelector('footer');
    if (footer) {
        const date = new Date();
        const dateElement = document.createElement('p');
        dateElement.textContent = 'Hôm nay là: ' + date.toLocaleDateString('vi-VN');
        dateElement.style.fontSize = '0.9rem';
        dateElement.style.marginTop = '0.5rem';
        dateElement.style.opacity = '0.8';
        footer.appendChild(dateElement);
    }
});
