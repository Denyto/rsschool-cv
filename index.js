let game = document.createElement('div');
game.classList.add('game');
for (let i = 0; i < 6; i++) {
    hole = document.createElement('div');
    mole = document.createElement('div');
    hole.classList.add('hole');
    mole.classList.add('mole');
    hole.append(mole);
    game.append(hole);
};
document.body.append(game);