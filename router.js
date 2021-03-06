const setPage = (page) =>
{
    window.location.hash = `#${page}`
}

const router = () =>
{
    const page = window.location.hash;

    switch (page)
    {
        case "#menu": drawMenu(); break;
        case "#test": drawTest(); break;
        case "#results": drawResults(); break;
        default: drawMenu(); break;
    }

}

const drawErrorPage = () =>
{
    document.body.innerHTML = "Page not found!";
}

window.onhashchange = router;

router();