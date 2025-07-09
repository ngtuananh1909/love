const btnKo = document.getElementById('btnko');
const btnco = document.getElementById('btnco');
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

const img_yes = 'https://cdn.tech24.vn/upload/tech24_vn/post/images/2024/03/02/405/anh-meo-cute-trai-tim-1.jpg';

let currentImage = 0;
let scaleKo = 1;
let scaleCo = 1;

// Setup cố định cho nút "Có"
btnco.style.position = 'absolute';
btnco.style.left = '50px';
btnco.style.top = '79%';
btnco.style.transform = `translateY(-50%) scale(${scaleCo})`;
btnco.style.transition = 'all 0.3s ease';

// Setup cho nút "Không"
btnKo.style.position = 'absolute';
btnKo.style.transition = 'all 0.3s ease';

btnKo.addEventListener('click', () => {
    // 1. Cập nhật hình và lời thoại
    img.src = imageList[currentImage];
    bubble.textContent = thoughtTexts[currentImage];
    currentImage = (currentImage + 1) % imageList.length;

    // 2. Scale
    scaleKo -= 0.1;
    btnKo.style.transform = `scale(${scaleKo})`;
    scaleCo += 0.1;
    btnco.style.transform = `translateY(-50%) scale(${scaleCo})`;

    // 3. Random vị trí (tránh đè btnco)
    const koWidth = btnKo.offsetWidth * scaleKo;
    const koHeight = btnKo.offsetHeight * scaleKo;
    const coRect = btnco.getBoundingClientRect();
    const padding = 30;
    let randomX, randomY, tries = 0;

    do {
        randomX = Math.random() * (window.innerWidth - koWidth);
        randomY = Math.random() * (window.innerHeight - koHeight);
        tries++;
    } while (
        randomX + koWidth > coRect.left - padding &&
        randomX < coRect.right + padding &&
        randomY + koHeight > coRect.top - padding &&
        randomY < coRect.bottom + padding &&
        tries < 100
    );

    btnKo.style.left = `${randomX}px`;
    btnKo.style.top = `${randomY}px`;
});

btnco.addEventListener('click', () => {
    img.src = img_yes;
    bubble.textContent = 'Cảm ơn cậu, tớ cũng thích cậu lắm luôn 🥰';
    img.style.display = 'block';
    bubble.style.display = 'block';

    // Ẩn các phần tử không cần
    btnKo.style.display = 'none';
    btnco.style.display = 'none';
    document.querySelector('.question').style.display = 'none';
});
