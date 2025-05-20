function status(id){
    game = document.getElementById(`game-${id}`);
    imageGame = game.querySelector('.dashboard__item__img');
    button = game.querySelector('.dashboard__item__button');
    nameGame = game.querySelector('.dashboard__item__name');
    
    if (imageGame.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nameGame.textContent}?`)) {
            imageGame.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
        }
    } else {
        imageGame.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }
} 