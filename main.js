!function(n){var e={};function t(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(i,s,function(e){return n[e]}.bind(null,s));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);const i=()=>{document.querySelector("main").innerHTML='\n        <section id="home" class="main-content">\n            <h4>\n                The food of the gods, directly from Valhalla\n            </h4>\n            <h1>\n                Come and meet Odin\'s food\n            </h1>\n        </section>\n    \n    '};document.querySelector("#content").innerHTML='\n        <header class="header-area">\n            <div class="container">\n                <div class="row d-flex">\n                    <div class="d-flex">\n                        <div>\n                            <img src="https://cdn0.iconfinder.com/data/icons/viking-2/500/viking_5-512.png"  alt="Logo Odin" width="60px">\n                        </div>\n                        <div class="header-logo">\n                            <h2 class="m-0">Odin Castle Restaurant</h2>\n                        </div>\n                    </div>\n                    <div class="header-nav d-flex">\n                        <ul class="nav-list m-0 d-flex">\n                        <li class="btn home"><a href="#">Home</a></li>\n                        <li class="btn about"><a href="#">About</a></li>\n                        <li class="btn menu"><a href="#">Menu</a></li>\n                        <li class="btn contact"><a href="#">Contact</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </header>\n        <main id="home">\n        </main>\n    ',i(),document.querySelectorAll(".btn").forEach(n=>{n.addEventListener("click",e=>{let t=n.className.replace("btn ",""),s=document.querySelector("main");if(t!=s.id)switch(t){case"home":s.id="home",i();break;case"about":s.id="about",document.querySelector("main").innerHTML='\n        <section id="_about" class="about-content">\n            <div class="row">\n                <h1>About Us</h1>\n                <p>\n                    Lorem Ipsum is simply dummy text of the \n                    printing and typesetting industry. Lorem \n                    Ipsum has been the industry\'s standard dummy \n                    text ever since the 1500s, when an unknown \n                    printer took a galley of type and scrambled \n                    it to make a type specimen book. It has survived \n                    not only five centuries, but also the leap into \n                    electronic typesetting, remaining essentially \n                    unchanged.</br> It was popularised in the 1960s with \n                    the release of Letraset sheets containing Lorem \n                    Ipsum passages, and more recently with desktop \n                    publishing software like Aldus PageMaker including \n                    versions of Lorem Ipsum.\n                </p>\n                <p>\n                    It is a long established fact that a reader will \n                    be distracted by the readable content of a page when \n                    looking at its layout. The point of using Lorem Ipsum \n                    is that it has a more-or-less normal distribution of \n                    letters, as opposed to using \'Content here, content \n                    here\', making it look like readable English. Many desktop \n                    publishing packages and web page editors now use Lorem \n                    Ipsum as their default model text, and a search for \'lorem \n                    ipsum\' will uncover many web sites still in their infancy. \n                    Various versions have evolved over the years, sometimes by accident, \n                    sometimes on purpose (injected humour and the like).\n                </p>\n            </div>\n        </section>\n    ';break;case"menu":s.id="menu",document.querySelector("main").innerHTML='\n        <section id="_menu" class="menu-content">\n            <div class="row d-flex">\n                <div class="food-card">\n                    <div class="food-img">\n                        <img src="https://cdn.midiamax.com.br/elasticbeanstalk-us-west-2-809048387867/uploads/2016/05/arquivos_noticias_2016_mai_risoto-com-arroz-integral-640x430.jpg" width="100%" alt="">\n                    </div>\n                    <div class="content-food">\n                        <div class="value-food d-flex">\n                            <h5>Food 1</h5>\n                            <span>$15.50</span>\n                        </div>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                </div>\n                <div class="food-card">\n                    <div class="food-img">\n                        <img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/galeria/50998_w840h525_1510324750pizza-em-fatias.jpg" width="100%" alt="">\n                    </div>\n                    <div class="content-food">\n                        <div class="value-food d-flex">\n                            <h5>Food 2</h5>\n                            <span>$12.50</span>\n                        </div>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                </div>\n                <div class="food-card">\n                    <div class="food-img">\n                        <img src="http://prefeituradeatibaia.com.br/wp-content/uploads/2016/11/boteco_ilustra3.jpg" width="100%" alt="">\n                    </div>\n                    <div class="content-food">\n                        <div class="value-food d-flex">\n                            <h5>Food 3</h5>\n                            <span>$20.00</span>\n                        </div>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                </div>\n                <div class="food-card">\n                    <div class="food-img">\n                        <img src="https://www.guiadasemana.com.br/contentFiles/image/2017/11/FEA/principal/50998_w840h0_1510322350massa.jpg" width="100%" alt="">\n                    </div>\n                    <div class="content-food">\n                        <div class="value-food d-flex">\n                            <h5>Food 4</h5>\n                            <span>$17.50</span>\n                        </div>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                </div>\n                <div class="food-card">\n                    <div class="food-img">\n                        <img src="http://i-exc.ccm2.net/iex/1280/1112144733/1796451.jpg" width="100%" alt="">\n                    </div>\n                    <div class="content-food">\n                        <div class="value-food d-flex">\n                            <h5>Food 5</h5>\n                            <span>$30.50</span>\n                        </div>\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="describe d-flex row">\n                <div>\n                    <h1>Lorem Ipsum is simply dummy text</h1>\n                </div>\n                <div>\n                    <h4>\n                        Various versions have evolved over the years\n                    </h4>\n                </div>\n            </div>\n        </section>\n    ';break;case"contact":s.id="contact",document.querySelector("main").innerHTML='\n        <section id="_contact" class="contact-content">\n            <div class="row title-contact">\n                <h1>Contact Us</h1>\n            </div>\n            <div class="row d-flex">\n                <div class="d-flex contact-info">\n                    <div>\n                        <h5>Brasil, São Paulo</h5>\n                        <p>Av. Paulista</p>\n                    </div>\n                    <div>\n                        <h5>+55 (11)98765-4321</h5>\n                        <p>Mon to Fri 9am to 6 pm</p>\n                    </div>\n                    <div>\n                        <h5>odinfood@support.com</h5>\n                        <p>Send us your query anytime!</p>\n                    </div>\n                </div>\n                <div class="contact-form">\n                    <form action="#" class="form d-flex">\n                        <div class="d-flex">\n                            <div class="side-left">\n                                <input type="text" placeholder="Enter your name" required>\n                                <input type="email" placeholder="Enter email address" required>\n                                <input type="text" placeholder="Enter your subject" required>\n                            </div>\n                            <div class="side-rigth">\n                                <textarea rows="8" cols="20" placeholder="Enter Message" required>\n                                </textarea>\n                            </div>\n                        </div>\n                        <button type="submit" class="form-btn">\n                            subscribe now\n                        </button>\n                    </form>\n                </div>\n            </div>\n        </section>\n    '}})})}]);