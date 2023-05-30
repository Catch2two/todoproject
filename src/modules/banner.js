function banner() {
    const header = document.querySelector('#header')
    const title = document.createElement('div');
    title.textContent = 'To do Header';
    header.appendChild(title);
    console.log('Banner Loaded')
}

banner();