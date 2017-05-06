
window.addEventListener('load', function() {
    console.log('In loadingIconAction.js');
    document.getElementById('loading-icon').style.visibility = 'hidden';
    document.getElementById('submit-button').addEventListener('click', () => {
        document.getElementById('loading-icon').style.visibility = 'visible';
        console.log('Loading...');
    });
});

