function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(showNotification);
  } else {
    let textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showNotification();
  }
}

function showNotification() {
  let note = document.getElementById("notification");
  note.classList.add("show");
  setTimeout(() => note.classList.remove("show"), 2000);
}


const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    
    if (e.target.tagName.toLowerCase() === 'a') return;

    const url = card.getAttribute('data-url'); 
    if (url) {
      window.open(url, '_blank'); 
    }
  });
});

