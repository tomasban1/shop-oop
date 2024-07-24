export class Layout {
    constructor() { }

    header() {
        const HTML = `<header>HEADER</header>`;
        return HTML;
    }
    main() {
        const HTML = `<main>MAIN</main>`;
        return HTML
    }

    footer() {
        const HTML = `<footer>FOOTER</footer>`;
        return HTML
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();
        DOM.insertAdjacentHTML('beforeend', HTML)
    }

}