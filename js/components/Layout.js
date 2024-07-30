import { PageContact } from "./ContactPage.js";
import { PageHome } from "./PageHome.js";
import { PageShopList } from "./PageShopList.js";
import { ServicesPage } from "./ServicesPage.js";
import { PageTeam } from "./TeamPage.js";
import { PageShopAdd } from "./PagesShopAdd.js";

export class Layout {
    constructor() {
        this.pagesData = [
            {
                text: 'Home',
                content: PageHome,
            },
            {
                text: 'Shop',
                content: PageShopList,
            },
            {
                text: 'Add',
                content: PageShopAdd,
            },
            // {
            //     text: 'Services',
            //     content: ServicesPage,
            // },
            // {
            //     text: 'Team',
            //     content: PageTeam,
            // },
            // {
            //     text: 'Contact us',
            //     content: PageContact,
            // },
        ];
        this.DOM = document.getElementById('app');
        this.mainDOM = null;

        this.render();
        this.headerEvents();

        new this.pagesData[0].content(this.mainDOM);
    }

    header() {
        let navHTML = '';

        for (const link of this.pagesData) {
            navHTML += `<button class="link">${link.text}</button>`
        }
        return `
            <header class="container main-header">
                <div class="row">
                    <div class="col-12 main-header-content">
                        <img class="logo" src="../img/logo.png" alt="logo">
                        <nav class="hidden visible-sm-flex main-nav">
                            ${navHTML}
                        </nav>
                    </div>
                </div>
            </header>`;

    }

    headerEvents() {
        const buttonsDom = document.querySelectorAll('.main-header-content button');
        this.mainDOM = document.querySelector('main.container');

        for (let i = 0; i < buttonsDom.length; i++) {
            buttonsDom[i].addEventListener('click', () => {
                const pageClass = this.pagesData[i].content;
                new pageClass(this.mainDOM);

            });
        }
    }
    main() {
        return `
              <main class="container">
                EMPTY CONTENT
            </main>`;

    }

    footer() {
        return '<footer class="container">&copy; Copyright 2024</footer>';
    }

    render() {
        const HTML = this.header() + this.main() + this.footer();
        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }

}