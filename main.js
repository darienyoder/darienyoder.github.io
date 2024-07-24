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
		var new_block = document.createElement("div");
		new_block.classList.add("portfolio-grid-item");
		new_block.innerHTML = "<div class='portfolio-item-cover'></div><a href='" + portfolio_items[item].link + "'>" + portfolio_items[item].name.replace("\n", "<br>") + "</a>";
		new_block.style.backgroundImage = "url(" + portfolio_items[item].image + ")";
		// for (var tag in portfolio_items[item].tags)
        // {
		// 	new_block.classList.add(portfolio_items[item].tags[tag]);
		// }

		// new_block.href = portfolio_items[item].link;

		document.getElementById("portfolio-grid").appendChild(new_block);
	}

	// setInterval(update_portfolio_scale, 10);

}

var grid_width;

function update_portfolio_scale()
{
	var width;
    grid_width = document.getElementById("portfolio-grid").offsetWidth;

    width = grid_width / Math.ceil(grid_width / 350) - 1;

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

var canvas;
var ctx;
var particles = [];
const particleSpeed = 100.0 / 60.0;
const max_particles = 10000;

function init_canvas()
{
	canvas = document.getElementById("cover-canvas");
	ctx = canvas.getContext("2d");

	setInterval(update_canvas, 1000 / 60);

	for (var i = 0; i < 180; i++)
	{
		update_canvas();
	}
}

function update_canvas()
{
	canvas.setAttribute('width', canvas.offsetWidth);
	canvas.setAttribute('height', canvas.offsetHeight);

	ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

	if (particles.length < max_particles)
	{
		create_particle();
		create_particle();
		create_particle();
		create_particle();
		create_particle();
		create_particle();
	}

	for (var i = particles.length - 1; i >= 0; i--) {
		let distance = Math.abs(particles[i].x / canvas.offsetWidth - 0.5);
		if (particles[i].opacity <= 0.05)//(distance < particles[i].lifespan)
		{
			particles.splice(i, 1);
		}
		else
		{
			let particle = particles[i];

			particle.x += particle.velX;

			ctx.beginPath();
			ctx.arc(particle.x, particle.y, 10 * (particle.speed / (particleSpeed * 2.0)) * particle.opacity, 0, 2 * Math.PI);
			// let opacity = inverse_lerp(particle.lifespan, 0.5, distance);//(distance - particle.lifespan) / -(distance - particle.lifespan);
			particle.opacity -= Math.abs((particle.speed / canvas.offsetWidth) / (0.5 - particle.lifespan));
			particle.opacity = Math.max(0.0, Math.min(0.99, particle.opacity));

			if (particle.opacity > 0.0)
			{
				ctx.fillStyle = "rgba(255, 255, 255, " + Math.floor(255.0 * particle.opacity).toString() + ")";
				ctx.fill();
			}

			// if (opacity > 0.5)
			// {
			// 	opacity = 0.99;
			// }
			// else
			// {
			// 	opacity *= 2.0;
			// }

		}
	}
}

function create_particle()
{
	let particle = {};
	particle.x = canvas.offsetWidth * Math.floor(Math.random() * 2.0);
	particle.y = canvas.offsetHeight * Math.random();
	particle.lifespan = Math.random() * 0.1 + 0.05;
	particle.speed = particleSpeed + Math.random() * particleSpeed;
	particle.opacity = 0.99;
	particle.velX = particle.speed * Math.sign(100 - particle.x);
	particle.velY = 0;
	particles.push(particle);
}

function lerp(v1, v2, w)
{
	return v1 + (v2 - v1) * w;
}

function inverse_lerp(v1, v2, w)
{
	return (w - v1) / (v2 - v1)
}
