const loadHomePage = () => {

    let content = document.querySelector('#content');

    content.innerHTML =
    `
        <header class="header-area">
            <div class="container">
                <div class="row d-flex">
                    <div class="d-flex">
                        <div>
                            <img src="../dist/img/odin.png"  alt="Logo Odin" width="60px">
                        </div>
                        <div class="header-logo">
                            <h2 class="m-0">Odin Castle Restaurant</h2>
                        </div>
                    </div>
                    <div class="header-nav d-flex">
                        <ul class="nav-list m-0 d-flex">
                        <li class="btn home"><a href="#">Home</a></li>
                        <li class="btn about"><a href="#">About</a></li>
                        <li class="btn menu"><a href="#">Menu</a></li>
                        <li class="btn contact"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <main id="home">
        </main>
    `;

};

const homeContent = () => {
    
    let main = document.querySelector('main');

    main.innerHTML = 
    `
        <section id="home" class="main-content">
            <h4>
                The food of the gods, directly from Valhalla
            </h4>
            <h1>
                Come and meet Odin's food
            </h1>
        </section>
    
    `;
}

export {loadHomePage, homeContent};

