async function load() {
    const results = await fetch('/results.json').then(r => r.json()) || [];

    const tableBody = document.getElementById('results-body');

    let html = '';
    for (const result of results) {
        const date = new Date(result.date);
        const game1 = Number(result['numbers-game']);
        const game2 = Number(result['riddle-game']);
        const game3 = Number(result['geometrical-game']);
        const game4 = Number(result['job-object-association-game']);
        html += `
            <tr>
                <td>${date.getDate()}.${date.getMonth() < 10 ? '0' : ''}${date.getMonth()}.${date.getFullYear()}</td>
                <td>${result.name}</td>
                <td>${game1}</td>
                <td>${game2}</td>
                <td>${game3}</td>
                <td>${game4}</td>
                <td>${game1 + game2 + game3 + game4}</td>
            </tr>
        `
    }
    tableBody.innerHTML = html;
}