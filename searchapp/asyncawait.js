const search = document.getElementById('search');
const matchList = document.getElementById('match-list');
const counter = document.getElementById('counter');



search.addEventListener('input', () => searchStates(search.value));


// search the states_cities.json and filter it
// ...fetching the json using async await
const searchStates = async searchText => {
    const res = await fetch('../samples/states_cities.json');
    const states = await res.json();

    // Get matches to current search input
    let matches = states.filter(state => {
        // create a regular expression to match
        const regex = new RegExp(`^${searchText}`, 'gi');
        
        // return an array of these matches
        return state.state.match(regex) || state.name.match(regex);
    });
    if (searchText.length == 0) {
        matches = [];
        matchList.innerHTML = '';
        counter.innerHTML = ''
    } else {

    // we got the Data now we stich it in the html! 
    outputHtml(matches);

    counter.innerHTML = `found <span> ${matches.length} </span>  ${matches.length == 1 ? 'result' : 'results'}`
    }
};

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card">
            <h3>${match.name}</h3>
            <h4>State: <span> ${match.state}</span> - District: <span>${match.district}</span></h4>
            <small>Area: ${match.area} | Population: ${match.population} | Latitude: ${match.coords.lat} / Longitude: ${match.coords.lon}</small>
        </div>
        ` ).join('');

        matchList.innerHTML = html;
    }
}


