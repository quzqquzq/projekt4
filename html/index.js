
images = [];
for (let i = 1; i <= 50; i++) {
    images.push(`image-${i}.jpg`);
}

const container = document.querySelector('.wrapper');

images.forEach(image => {
    const img = document.createElement('img');
    img.src = `./${image}`;
    container.appendChild(img);
});

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam."

const text = document.querySelector('.gibberish');

for (let i = 0; i < 100; i++) {
    const p = document.createElement('p');
    p.textContent = lorem;
    text.appendChild(p);
}