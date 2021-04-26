let survival_url = 'http://map.adults.craftwick.fun:8123/?mapname=flat&zoom=4&x=933&y=64&z=42';
let creative_url = 'http://map.kids.craftwick.fun:8123/?mapname=flat&zoom=4&x=300&y=64&z=-378';

let survival_link = document.querySelector('#survival');
let creative_link = document.querySelector('#creative');
let iframe = document.querySelector('#iframe-wrapper iframe');

// load survival as default map
iframe.setAttribute('src', survival_url);
window.document.title = 'Minecraft: Craftwick Survival';

// load event listeners for links
survival_link.addEventListener('click', () => {
  if (iframe.getAttribute('src') !== survival_url) {
    iframe.setAttribute('src', survival_url);
    window.document.title = 'Minecraft: Craftwick Survival'
  }

  if (!survival_link.classList.contains('active')) {
    survival_link.classList.toggle('active');
    creative_link.classList.toggle('active');
  }
});
creative_link.addEventListener('click', () => {
  if (iframe.getAttribute('src') !== creative_url) {
    iframe.setAttribute('src', creative_url);
    window.document.title = 'Minecraft: Craftwick Creative'
  }

  if (!creative_link.classList.contains('active')) {
    creative_link.classList.toggle('active');
    survival_link.classList.toggle('active');
  }
});

// update external links
document.querySelector('#survival_ext').setAttribute('href', survival_url);
document.querySelector('#creative_ext').setAttribute('href', creative_url);