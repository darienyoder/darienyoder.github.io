
function dropdownmenu(index)
{
    if (Math.floor(document.getElementsByClassName("dropdown-wrapper")[index].offsetHeight) == Math.floor(document.getElementsByClassName("dropdown")[index].offsetHeight + 20))
    {
        document.getElementsByClassName("dropdown-wrapper")[index].style.height = "0px";
    }
    else
    {
        document.getElementsByClassName("dropdown-wrapper")[index].style.height = document.getElementsByClassName("dropdown")[index].offsetHeight + 20;
    }
}

function show_highlights()
{
    document.getElementById("highlights").style.display = "block";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function show_about_me()
{
    document.getElementById("highlights").style.display = "none";
    document.getElementById("about-me").style.display = "flex";
    document.getElementById("resume").style.display = "none";
    document.getElementById("contact").style.display = "none";
}


function show_resume()
{
    document.getElementById("highlights").style.display = "none";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("resume").style.display = "block";
    document.getElementById("contact").style.display = "none";
    window.scrollTo(0, 0);
}


function show_contact()
{
    document.getElementById("highlights").style.display = "none";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("contact").style.display = "block";
}


function main()
{
    for (let i = 0; i < document.getElementsByClassName("dropdown-header").length; i++)
    {
        document.getElementsByClassName("dropdown-header")[i].onclick = function() {dropdownmenu(i)};
    }
    show_about_me();

    if (window.innerWidth > 800)
    {
        for (let i = 0; i < document.getElementsByClassName("side").length; i++)
        {
            document.getElementsByClassName("side")[i].style.float = "left";
            document.getElementsByClassName("side")[i].style.width = "50%";
            document.getElementsByClassName("side")[i].style.height = "100%";
        }
    }
}
