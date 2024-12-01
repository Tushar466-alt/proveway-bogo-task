
document.addEventListener("DOMContentLoaded", () => {
    const boxHeader = document.querySelector('.box-header');
    const boxBody = document.querySelector('.box-body');

    boxHeader.addEventListener('click', () => {
        if (boxBody.style.display === 'block') {
            boxBody.style.display = 'none';
        } else {
            boxBody.style.display = 'block';
        }
    });
});
