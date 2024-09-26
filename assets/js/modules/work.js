const workListUrl = "/works.json";
let currentData = null;

const initWorkList = () => {
    fetch(workListUrl).then((res) => {
        res.json().then((json) => {
            currentData = json;
            renderWorkList();
        })
    });
};

const renderWorkList = () => {
    const finishedWorksList = document.querySelector("[data-js-finished-works]");
    finishedWorksList.innerHTML = currentData.map((work) => {
        const date = new Date(Date.parse(work.date));
        const month = date.toLocaleString('default', { month: 'long' });
        return `
            <li class="work-item">
                <a class="wrap" href="${work.url}">
                    <p class="work-title">${work.title}</p>
                    <p class="work-details">${work.author}, ${work.type}, ${month} ${date.getFullYear()}</p>
                </a>
            </li>
        `
    }).join("");
}

export { initWorkList };