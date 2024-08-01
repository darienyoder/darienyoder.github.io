function add_header()
{
    let links = "";
    for (item in portfolio_items)
    {
        links += "<a href='/" + portfolio_items[item].link + "'>" + item + "</a>";
    }

    document.getElementById("navbar").innerHTML = `
    <h3><a href="/">Darien Yoder</a></h3>
    <nav>
        <a href="/">Home</a>
        <span class="dropdown">
            <span>My Projects</span>
            <div class="dropdown-content">` + links + `
            </div>
        </span>
        <a href="/about-me">About Me</a>
        <a href="/#contact">Contact</a>
    </nav>
    `;
}

window.addEventListener("load", event => {
    add_header();
});
