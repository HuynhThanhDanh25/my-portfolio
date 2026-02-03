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

    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ liên hệ lại sớm.');
            form.reset();
        });
    });
});