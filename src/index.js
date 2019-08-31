// import Hangman from './hangman'
import Requests from './Requests'
import UI from './UI';

const heroes = new Requests();
const ui = new UI();

const searchForm = document.getElementById('heroesForm');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchHeroes();
});

const searchHeroes = () => {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput !== '') {
        heroes.getHeroes(searchInput).then(data => {
            if (data) {
                const hero = data.charactersResult.data.results;
                const comics = data.comicsResult.data.results;
                ui.renderHero(hero[0]);
                ui.renderComics(comics);
            } else {
                ui.showAlert('Hero not found', 'alert alert-danger text-center')
            }
        }).catch(e => {
            console.log(e)
        });
    } else {
        ui.showAlert('Please enter hero name in search field', 'alert alert-danger text-center')
    }

}
