const imagesUrl = "/works/n-pola/04-results/images/metadata.json";
let slideshowContainer = null;
let metadata = null;
let currentImageIndex = 0;

const initImages = () => {
    fetch(imagesUrl).then((res) => {
        res.json().then((json) => {
            metadata = json;
            renderImages();
            rerenderSlideshow();
        });
    });
};

const renderImages = () =>{
    const imageContainer = document.querySelector("[data-image-container]");
    if (imageContainer == null) return;
    imageContainer.innerHTML = metadata.map((image) => {
        return `
            <li>
                <a href="./n-pola/04-results/${image.src}"><img src="./n-pola/04-results/${image.src}" alt="${image.metadata.Description}"></img></a>
            </li>
        `;
    }).join("");
};

const rerenderSlideshow = () => {
    if (slideshowContainer == null) return;
    const currentImage = metadata[currentImageIndex];
    slideshowContainer.innerHTML = `
    <img src="./n-pola/04-results/${currentImage.src}" alt="${currentImage.metadata.Description}"></img>
    `;
};

const nextImage = () => {
    currentImageIndex++;
    if (currentImageIndex >= metadata.length) {
        currentImageIndex = 0;
    }
    rerenderSlideshow();
};

const slideshow = () => {
    slideshowContainer = document.querySelector("[data-slideshow-container]");
    initImages();
    if (slideshowContainer == null) return;

    slideshowContainer.addEventListener("click", () => {
        nextImage();
    });
    window.setInterval(() => {
        nextImage();
    }, 10000);
};


export { slideshow };
