// Smooth Scroll Function for "Scroll Down" Button
document.querySelector('.scroll-btn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('memes-section').scrollIntoView({
    behavior: 'smooth'
  });
});
