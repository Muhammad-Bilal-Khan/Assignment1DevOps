document.getElementById('filter').addEventListener('change', function() {
    var selectedTech = this.value;
    var projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(function(card) {
        if (selectedTech === 'all' || card.getAttribute('data-tech') === selectedTech) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
