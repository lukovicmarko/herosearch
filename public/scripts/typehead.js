$(document).ready(function () {
    // Sonstructs the suggestion engine
    var heroes = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // The url points to a json file that contains an array of country names
        prefetch: 'https://raw.githubusercontent.com/CoderFoundry/HeroSearch/master/HeroSearch/wwwroot/JsonData/HeroNames.json'
    });

    // Initializing the typeahead with remote dataset
    $('.typeahead').typeahead(null, {
        name: 'heroes',
        source: heroes,
        limit: 10 /* Specify maximum number of suggestions to be displayed */
    });
});