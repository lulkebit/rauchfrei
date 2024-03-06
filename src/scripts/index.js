const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.getAttribute('name') === 'smokeFreeTime') {
            let cardText = card.querySelector('.card-text').innerText;
            cardText = cardText.replace('HH', '12');
            cardText = cardText.replace('MM', '34');
            cardText = cardText.replace('SS', '56');
            card.querySelector('.card-text').innerText = cardText;
        }
    });