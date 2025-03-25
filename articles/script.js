document.addEventListener('DOMContentLoaded', function() {
    // Находим все секции
    const sections = document.querySelectorAll('.section');
    
    // Сворачиваем все секции при загрузке страницы
    sections.forEach(section => {
        const content = section.querySelectorAll('p, img, pre');
        content.forEach(element => {
            element.style.display = 'none';
        });
        
        // Добавляем обработчик клика на заголовок h2
        const header = section.querySelector('h2');
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            content.forEach(element => {
                if (element.style.display === 'none') {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    });
});