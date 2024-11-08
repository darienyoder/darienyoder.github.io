var particles = [];
var canvas;
var ctx;

function headerSetup()
{
    canvas = document.getElementById("header-canvas");
    ctx = canvas.getContext("2d");

    canvas.setAttribute('width', canvas.offsetWidth);
    canvas.setAttribute('height', canvas.offsetHeight);

    for (var i = 0; i < 30; i++)
    {
        addParticle();
    }

    setInterval(headerUpdate, 1000 / 60);
}

function headerUpdate()
{
    canvas.setAttribute('width', canvas.offsetWidth);
	canvas.setAttribute('height', canvas.offsetHeight);

    ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    let newDate = new Date();

    for (var particle of particles)
    {
        ctx.fillStyle = "hsl(" + (particle.seed % 255) + ", 100%, 50%)";// particle.seed;

        let minRadius = 10 + (particle.seed % 20);
        let maxRadius = minRadius + 10 + ((particle.seed * particle.seed + particle.x) % 20);
        let growSpeed = (0.001 * (particle.seed % 2 + 1));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y - document.getElementsByTagName("html")[0].scrollTop * 0.5, (Math.sin(particle.seed + newDate.getTime() * growSpeed) + 1) * (maxRadius - minRadius) + minRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function addParticle()
{
    let newX;
    let newY;

    let good = true;
    for (var tries = 0; tries < 50; tries++)
    {
        good = true;
        newX = Math.floor(Math.random() * canvas.offsetWidth);
        newY = Math.floor(Math.random() * canvas.offsetHeight * 2.0);
        for (var particle of particles)
        {
            if (Math.sqrt(Math.pow(newX - particle.x, 2) + Math.pow(newY - particle.y, 2)) < 120)
            {
                good = false;
                break;
            }
        }
        if (good)
            break;
    }

    if (good)
        particles.push(
            {
                x: newX,
                y: newY,
                seed: Math.floor(Math.random() * 255000),
            }
        )
}
