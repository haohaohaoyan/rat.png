replaceToggle = document.querySelector('#replacetoggle')
imageToggle = document.querySelector('#imagetoggle')
customUrl = document.querySelector('#customurl')
display = document.querySelector('#placeholder')


//please tell me if there's a more efficient way to do this
chrome.storage.local.get(['ok']).then((result) => {
    replaceToggle.checked = result['ok'];
})
chrome.storage.local.get(['customimage']).then((result) => {
    customUrl.value = result['customimage'];
    if (result['customimage']) {
        display.src = result['customimage'];
        display.style.setProperty('scale', '1');
    }
})
chrome.storage.local.get(['usecustomimage']).then((result) => {
    imageToggle.checked = result['usecustomimage'];
});

replaceToggle.addEventListener('change', function() {
    chrome.storage.local.set({'ok': this.checked})
});
customUrl.addEventListener('change', function() {
    chrome.storage.local.set({'customimage': this.value})
});
imageToggle.addEventListener('change', function() {
    chrome.storage.local.set({'usecustomimage': this.checked})
});