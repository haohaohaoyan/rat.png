function replaceImages() {
    chrome.storage.local.get(['ok']).then((result) => {
        if (result['ok'] == true) {
            for (const image of document.querySelectorAll('img, iframe')) {
                chrome.storage.local.get(['usecustomimage']).then((result) => {
                    if (result['usecustomimage'] == true) {
                        chrome.storage.local.get(['customimage']).then((result) => {
                            image.src = result['customimage'];
                        });
                    } else {
                        image.src = 'https://lh3.googleusercontent.com/d/18XofteYxRGj4_JBrwMETVE3cNhSjo32t'
                    }
                })
                image.style.setProperty('image-rendering', 'pixelated')
                image.style.setProperty('object-fit', 'fill')
                image.style.setProperty('margin', '0')
            }
        }
    });
};

//i am so bad at js
const observer = new MutationObserver((mutations) => {
    replaceImages();
})
observer.observe(document.body, { childList: true, subtree: true });
replaceImages();