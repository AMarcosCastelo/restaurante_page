const menuContent = () => {

    let main = document.querySelector('main');

    main.innerHTML = 
    `
        <section id="_menu" class="menu-content">
            <div class="row d-flex">
                <div class="food-card">
                    <div class="food-img">
                        <img src="../dist/img/food1.jpg" width="100%" alt="">
                    </div>
                    <div class="content-food">
                        <div class="value-food d-flex">
                            <h5>Food 1</h5>
                            <span>$15.50</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="food-card">
                    <div class="food-img">
                        <img src="../dist/img/food2.jpg" width="100%" alt="">
                    </div>
                    <div class="content-food">
                        <div class="value-food d-flex">
                            <h5>Food 2</h5>
                            <span>$12.50</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="food-card">
                    <div class="food-img">
                        <img src="../dist/img/food3.jpg" width="100%" alt="">
                    </div>
                    <div class="content-food">
                        <div class="value-food d-flex">
                            <h5>Food 3</h5>
                            <span>$20.00</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="food-card">
                    <div class="food-img">
                        <img src="../dist/img/food4.jpg" width="100%" alt="">
                    </div>
                    <div class="content-food">
                        <div class="value-food d-flex">
                            <h5>Food 4</h5>
                            <span>$17.50</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="food-card">
                    <div class="food-img">
                        <img src="../dist/img/food5.jpg" width="100%" alt="">
                    </div>
                    <div class="content-food">
                        <div class="value-food d-flex">
                            <h5>Food 5</h5>
                            <span>$30.50</span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
            <div class="describe d-flex row">
                <div>
                    <h1>Lorem Ipsum is simply dummy text</h1>
                </div>
                <div>
                    <h4>
                        Various versions have evolved over the years
                    </h4>
                </div>
            </div>
        </section>
    `;
}

export {menuContent};