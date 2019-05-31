import {loadHomePage, homeContent} from './components/headerHome';
import {menuContent} from './components/menuContent';
import {locationContent} from './components/location';
import {aboutContent} from './components/aboutContent';

loadHomePage();
homeContent();

let btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let btnName = btn.className.replace('btn ','');
        let main = document.querySelector('main');

        if(btnName == main.id) {
            return;
        } 

        switch(btnName) {
            case 'home': {
                main.id = "home";
                homeContent();                
                break;
            }
            case 'about': {
                main.id = "about";
                aboutContent();
                break;
            }
            case 'menu': {
                main.id = "menu";
                menuContent();
                break;
            }
            case 'contact': {
                main.id = "contact";
                locationContent();
                break;
            }
        }

    });
});

