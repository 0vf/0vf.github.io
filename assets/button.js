const copyButton = document.querySelectorAll('.copy-button');

copyButton.forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.parentNode.querySelector('code');
        navigator.clipboard.writeText(codeBlock.innerText);
        button.style.color = '#a6e3a1';
        setTimeout(() => {
        button.style.color = '#cdd6f4';
        }, 2000);
    });
});