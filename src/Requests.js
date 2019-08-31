
class Requests {

    async getHeroes(word) {
        //http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
        const publicKey = '30bc2474662df8b00df980326bc073da';
        const privateApi = '57bc04d14fada5714996ba322fecf0e408bd5b3a';
        const hash = 'ebddc81b03af77a61ab96002df1d036c';

        try {
            const responseCharacters = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}&name=${word}`)

            if (responseCharacters.status === 200) {
                const charactersResult = await responseCharacters.json();

                if (charactersResult.data.results.length > 0) {

                    const characterId = charactersResult.data.results[0].id;

                    const responseComics = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?apikey=30bc2474662df8b00df980326bc073da&hash=ebddc81b03af77a61ab96002df1d036c&ts=1&limit=100&offset=100`)

                    const comicsResult = await responseComics.json();

                    return {
                        charactersResult,
                        comicsResult
                    }
                }
            } else {
                throw new Error('Unable to get hero')
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default Requests