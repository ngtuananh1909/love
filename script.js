    const btnKo = document.getElementById('btn-ko');
    const img = document.getElementById('picture');
    const bubble = document.querySelector('.thought-bubble');

    const imageList = [
        'picture/2.jpg',
        'picture/3.jpg',
        'picture/4.jpg',
        'picture/5.jpg'
    ];

    const thoughtTexts = [
        'Chắc bấm nhầm hoi đúng hk😢',
        'Vẫn còn hi vọng chứ...? 😢',
        'Tại sao lại là không...?',
        'Thôi khỏi cần nữa... tớ ổn mà 🥲'
    ];

    let currentImage = 0;

    btnKo.addEventListener('click', () => {
        img.src = imageList[currentImage];
        bubble.textContent = thoughtTexts[currentImage];
        currentImage = (currentImage + 1) % imageList.length;
    });

