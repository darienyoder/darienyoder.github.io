
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

function main()
{
    alert(document.getElementById('right-side').offsetWidth);
    for (let i = 0; i < document.getElementsByClassName("dropdown-header").length; i++)
    {
        document.getElementsByClassName("dropdown-header")[i].onclick = function() {dropdownmenu(i)};
    }
}
