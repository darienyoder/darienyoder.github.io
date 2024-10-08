
const categoryIcons = {
    "Software": "category-software.png",
    "Video": "category-video.png",
    "Game": "category-game.png",
    "Acting": "category-acting.png",
};

function add_portfolio_items()
{
	for (var item in portfolio_items) {
		var new_block = document.createElement("div");
		new_block.classList.add("portfolio-grid-item");
		new_block.innerHTML = "<div class='portfolio-item-cover'></div><a href='" + portfolio_items[item].link + "'>" + portfolio_items[item].name.replace("\n", "<br>") + "</a>" + portfolio_items[item].tags.map(function(tag){return "<span class='portfolio-item-tag' style='float:right;position:relative;background-color:#000000c0;'><img src='" + categoryIcons[tag] + "'><span class = 'category-popup'>" + tag + "</span></span>"});
		new_block.style.backgroundImage = "url(" + portfolio_items[item].image + ")";
		// for (var tag in portfolio_items[item].tags)
        // {
		// 	new_block.classList.add(portfolio_items[item].tags[tag]);
		// }

		// new_block.href = portfolio_items[item].link;

		document.getElementById("portfolio-grid").appendChild(new_block);
	}

	// setTimeout(update_portfolio_scale, 10);

}

var grid_width;

function update_portfolio_scale()
{
	// var width;
    // grid_width = document.getElementById("portfolio-grid").offsetWidth;

    let width = document.getElementsByClassName("portfolio-grid")[0].offsetWidth;

	document.getElementById("portfolio-item-stylesheet").innerHTML = ".portfolio-grid-item {width: " + width.toString() + "px;}";
}

var filterTag;

function filter(tagName)
{
    for (var filter of document.getElementsByClassName("filter-button"))
    {
        if (filter.name == tagName)
        {
            filter.id = "chosen-filter";
        }
        else
        {
            filter.id = "";
        }
    }
    for (var item in Object.keys(portfolio_items))
    {
        if (tagName == "everything" || portfolio_items[Object.keys(portfolio_items)[item]].tags.includes(tagName))
        {
            document.getElementById("portfolio-grid").children[item].style.display = "block";
        }
        else
        {
            document.getElementById("portfolio-grid").children[item].style.display = "none";
        }
    }
}

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

	for (var i = 0; i < 360; i++)
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

	mouseWeight = Math.max(0.0, mouseWeight - 6.0 / 60.0)

	// ctx.arc(mouseX, mouseY, 10, 0, 2 * Math.PI);
	// ctx.fillStyle = "red";
	// ctx.fill();

	for (var i = particles.length - 1; i >= 0; i--) {
		let distance = Math.abs(particles[i].x / canvas.offsetWidth - 0.5);
		if (particles[i].opacity <= 0.05 || particles[i].x < -50 || particles.y < -50 || particles.x > canvas.offsetWidth + 50 || particles.y > canvas.offsetHeight + 50)//(distance < particles[i].lifespan)
		{
			particles.splice(i, 1);
		}
		else
		{
			let particle = particles[i];

			particle.x += particle.velX;
			particle.y += particle.velY;

			if (distance_to(particle.x, particle.y, mouseX, mouseY) < 100)
			{
				let direction = direction_to(mouseX, mouseY, particle.x, particle.y);
				let fleeSpeed = 3 / (distance_to(mouseX, mouseY, particle.x, particle.y) / 20) * mouseWeight * 2.0;
				particle.velX = lerp(particle.velX, direction.x * particle.speed * fleeSpeed, mouseWeight);
				particle.velY = lerp(particle.velY, direction.y * particle.speed * fleeSpeed, mouseWeight);
				if (mouseWeight > 0.5)
					particle.color = "red";
			}

			ctx.beginPath();
			ctx.arc(particle.x, particle.y, 10 * (particle.speed / (particleSpeed * 2.0)) * particle.opacity, 0, 2 * Math.PI);
			// let opacity = inverse_lerp(particle.lifespan, 0.5, distance);//(distance - particle.lifespan) / -(distance - particle.lifespan);
			particle.opacity -= Math.abs((particle.speed / canvas.offsetWidth) / (0.5 - particle.lifespan));
			particle.opacity = Math.max(0.0, Math.min(0.99, particle.opacity));

			if (particle.opacity > 0.0)
			{
				ctx.fillStyle = particle.color; //"rgba(255, 255, 255, " + Math.floor(255.0 * particle.opacity).toString() + ")";
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
	particle.lifespan = Math.random() * 0.1 + 0.2;
	particle.lifespan -= 0.3 * Math.pow(Math.abs(particle.y / canvas.offsetHeight - 0.5) * 2.0, 2.0);
	particle.speed = particleSpeed + Math.random() * particleSpeed;
	particle.opacity = 0.99;
	particle.velX = particle.speed * Math.sign(100 - particle.x);
	particle.velY = 0;
	particle.color = "lightgray";//"hsl(0, 0%, " + Math.floor((particle.speed / particleSpeed / 2.0) * 100).toString() + "%)";
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

function distance_to(x1, y1, x2, y2)
{
	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function direction_to(x1, y1, x2, y2)
{
	let length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	return { "x": (x2 - x1) / length, "y": (y2 - y1) / length };
}

var mouseX = 0;
var mouseY = 10000;
var mouseWeight = 1.0;

function canvas_on_mouse_move(event)
{
	mouseX = event.offsetX;
	mouseY = event.offsetY;
	mouseWeight = 1.0;
}

function canvas_on_mouse_out()
{
	mouseY = 10000;
}

function canvas_on_click()
{
	for (var i = 0; i < particles.length; i++)
	{
		if (distance_to(particles[i].x, particles[i].y, mouseX, mouseY) < 500)
		{
			let direction = direction_to(particles[i].x, particles[i].y, mouseX + 10 * (Math.random() * 2 - 1), mouseY + 10 * (Math.random() * 2 - 1));
			particles[i].velX = direction.x * 20;
			particles[i].velY = direction.y * 20;
			particles[i].color = "blue";
		}
	}
}
