
var filterTag = "everything"
var filterList = ["everything", "acting", "animation", "code"]

var portfolio_items =
{

	"Sketches": {
		name: "Sketches",
		image: "agendaballs.png",
		tags: ["acting"],
		link: "sketches",
	},
	"Bumpers and Transitions for TV2": {
		name: "Bumpers and Transitions for TV2",
		image: "corntexture.jpg",
		tags: ["animation"],
		link: "tv2-bumpers",
	},
	"Browser Games": {
		name: "Browser Games",
		image: "browsergames.png",
		tags: ["code"],
		link: "browser-games",
	},
	"Web Design": {
		name: "Web Design",
		image: "webdesigncode.png",
		tags: ["code"],
		link: "web-design",
	},

}

function add_portfolio_items()
{
	for (var item in portfolio_items) {
		var new_block = document.createElement("a")
		new_block.classList.add("portfolio-grid-item")
		new_block.innerText = portfolio_items[item].name
		new_block.style.backgroundImage = "url(" + portfolio_items[item].image + ")"
		for (var tag in portfolio_items[item].tags) {
			new_block.classList.add(portfolio_items[item].tags[tag])
		}

		// new_block.onclick = function() {on_portfolio_item_click(new_block)}

		new_block.href = portfolio_items[item].link + "/index.html"

		document.getElementById("portfolio-grid").appendChild(new_block)
	}

	setInterval(update_portfolio_scale, 1000)

}

function update_portfolio_scale()
{
	var width

	if (document.getElementById("portfolio-grid").width / 2 <= 350)
	{

		width = document.getElementById("portfolio-grid").width / 2
	}
	else if (document.getElementById("portfolio-grid").width / 3 <= 350)
	{
		width = document.getElementById("portfolio-grid").width / 3
	}
	else if (document.getElementById("portfolio-grid").width / 4 <= 350)
	{
		width = document.getElementById("portfolio-grid").width / 4
	}
	else if (document.getElementById("portfolio-grid").width / 5 <= 350)
	{
		width = document.getElementById("portfolio-grid").width / 5
	}

	document.getElementById("portfolio-item-stylesheet").innerHTML = ".portfolio-grid-item {width: " + width + "px; height: " + width + "px;}"
}



function filter(tagName) {
	filterTag = tagName
	document.querySelector(':root').style.setProperty('--chosen-filter', tagName);

	var oldButton = document.getElementById("chosen-filter")
	if (oldButton != null) {oldButton.id = ""}
	document.getElementById("portfolio-filters").children[filterList.indexOf(tagName)].id = "chosen-filter"


	for (var itemIndex in document.getElementsByClassName("portfolio-grid-item"))
	{
		item = document.getElementsByClassName("portfolio-grid-item")[itemIndex]

		// alert(item.classList.contains("portfolio-grid-item"))
		if (item.classList.contains(filterTag) || filterTag == "everything")
		{
			item.style.display = "inline-flex"
		}
		else
		{
			item.style.display = "none"
		}
	}


	// for (var filterButtonIndex in document.getElementsByClassName("filter-button"))
	// {
	// 	filterButton = document.getElementsByClassName("portfolio-grid-item")[filterButtonIndex]
	// 	alert(filterButton.name)
	// 	if (filterButton.name == tagName)
	// 	{
	// 		filterButton.style.backgroundColor = "green"
	// 	}
	// 	else
	// 	{
	// 		filterButton.style.backgroundColor = "#eeeeee"
	// 	}
	// }

}

function on_portfolio_item_click(item)
{

}
