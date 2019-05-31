const menuContent = () => {

    let main = document.querySelector('main');

    main.innerHTML = 
    `
        <section id="_menu" class="menu-content">
            <div class="row d-flex">
                <div class="food-card">
                    <div class="food-img">
                        <img src="https://cdn.midiamax.com.br/elasticbeanstalk-us-west-2-809048387867/uploads/2016/05/arquivos_noticias_2016_mai_risoto-com-arroz-integral-640x430.jpg" width="100%" alt="">
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
                        <img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/galeria/50998_w840h525_1510324750pizza-em-fatias.jpg" width="100%" alt="">
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
                        <img src="http://prefeituradeatibaia.com.br/wp-content/uploads/2016/11/boteco_ilustra3.jpg" width="100%" alt="">
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
                        <img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/principal/50998_w840h0_1510322350massa.jpg" width="100%" alt="">
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
                        <img src="http://i-exc.ccm2.net/iex/1280/1112144733/1796451.jpg" width="100%" alt="">
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