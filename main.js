var portfolio_items =
{
	"Sandbox": {
		name: "Sandbox",
		image: "sandbox.png",
		tags: ["code"],
		link: "sandbox",
	},
	"SDL Chess": {
		name: "SDL\nChess",
		image: "chess.png",
		tags: ["animation"],
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
		tags: ["acting"],
		link: "markdown-reader",
	},

    "Logo Design": {
		name: "Logo\nDesign",
		image: "graphic-design.png",
		tags: ["code"],
		link: "logo-design",
	},
	"TV Bumpers": {
		name: "TV\nBumpers",
		image: "tv-bumps.png",
		tags: ["animation"],
		link: "tv-bumpers",
	},
	"Browser Games": {
		name: "Browser\nGames",
		image: "browsergames.png",
		tags: ["code"],
		link: "games",
	},
	"Sketch Comedy": {
		name: "Sketch\nComedy",
		image: "sketch-comedy.png",
		tags: ["acting"],
		link: "sketches",
	},
};

function add_portfolio_items()
{
	for (var item in portfolio_items) {
		var new_block = document.createElement("a");
		new_block.classList.add("portfolio-grid-item");
		new_block.innerText = portfolio_items[item].name;
		new_block.style.backgroundImage = "url(" + portfolio_items[item].image + ")";
		// for (var tag in portfolio_items[item].tags)
        // {
		// 	new_block.classList.add(portfolio_items[item].tags[tag]);
		// }

		new_block.href = portfolio_items[item].link;

		document.getElementById("portfolio-grid").appendChild(new_block);
	}

	setInterval(update_portfolio_scale, 10);

}

var grid_width;

function update_portfolio_scale()
{
	var width;
    grid_width = document.getElementById("portfolio-grid").offsetWidth;

    if (grid_width <= 350)
    {
        width = grid_width;
    }
	else if (grid_width / 2 <= 350)
	{
		width = grid_width / 2 - 1;
	}
	else if (grid_width / 3 <= 350)
	{
		width = grid_width / 3 - 1;
	}
	else if (grid_width / 4 <= 350)
	{
		width = grid_width / 4 - 1;
	}
	else if (grid_width / 5 <= 350)
	{
		width = grid_width / 5 - 1;
	}
	document.getElementById("portfolio-item-stylesheet").innerHTML = ".portfolio-grid-item {width: " + width + "px; height: " + width + "px;}";
}

// function filter(tagName) {
// 	filterTag = tagName
// 	document.querySelector(':root').style.setProperty('--chosen-filter', tagName);
//
// 	var oldButton = document.getElementById("chosen-filter")
// 	if (oldButton != null) {oldButton.id = ""}
// 	document.getElementById("portfolio-filters").children[filterList.indexOf(tagName)].id = "chosen-filter"
//
// 	for (var itemIndex in document.getElementsByClassName("portfolio-grid-item"))
// 	{
// 		item = document.getElementsByClassName("portfolio-grid-item")[itemIndex]
//
// 		if (item.classList.contains(filterTag) || filterTag == "everything")
// 		{
// 			item.style.display = "inline-flex"
// 		}
// 		else
// 		{
// 			item.style.display = "none"
// 		}
// 	}
// }

function reduce_spam()
{
	let decrypted = "hevmir2shiv@tvsxsrqemp.com"
	let encrypted = "";
	for (let i = 0; i < decrypted.length; i++)
	{
		if (decrypted[i] != "@" && decrypted[i] != "." && decrypted.length - i > 3)
   		encrypted += ((parseInt(decrypted[i], 36) + 36 - 4) % 36).toString(36);
		else
			encrypted += decrypted[i];
	 }
	document.getElementById("mail-link").innerText = encrypted;
	document.getElementById("mail-link").href = "mailto:" + encrypted;
}
