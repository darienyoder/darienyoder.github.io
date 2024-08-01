
var portfolio_items =
{
	"Crossword Builder": {
		name: "Crossword\nBuilder",
		image: "crossword.png",
		tags: ["code"],
		link: "crossword-builder",
	},
	"Sandbox": {
		name: "Sandbox",
		image: "sandbox.png",
		tags: ["code"],
		link: "sandbox",
	},
	"SDL Chess": {
		name: "SDL\nChess",
		image: "chess.png",
		tags: ["code"],
		link: "sdl-chess",
	},
	"DestroyDog Bookmarklet": {
		name: "DestroyDog\nBookmarklet",
		image: "destroy-dog.png",
		tags: ["code"],
		link: "destroydog",
	},
	"Markdown Reader": {
		name: "Markdown\nReader",
		image: "markdown.png",
		tags: ["code"],
		link: "markdown-reader",
	},

    "Logo Design": {
		name: "Logo\nDesign",
		image: "graphic-design.png",
		tags: ["graphic-design"],
		link: "logo-design",
	},
	"TV Bumpers": {
		name: "TV\nBumpers",
		image: "tv-bumps.png",
		tags: ["video"],
		link: "tv-bumpers",
	},
	"Browser Games": {
		name: "Browser\nGames",
		image: "browsergames.png",
		tags: ["code", "game"],
		link: "games",
	},
	"Sketch Comedy": {
		name: "Sketch\nComedy",
		image: "sketch-comedy.png",
		tags: ["video"],
		link: "sketches",
	},
};

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

addEventListener("load", event => {
    add_header();
});
