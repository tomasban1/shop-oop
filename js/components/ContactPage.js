export class PageContact {
    constructor(DOM) {
        this.DOM = DOM;
        this.formDOM = null;
        this.render();
        this.formEvents();
    }

    formEvents() {
        this.formDOM = this.DOM.querySelector('form');
        const inputDOm = this.DOM.querySelector('input');
        this.formDOM.addEventListener('submit', e => {
            e.preventDefault();
            console.log('Form data....');
            console.log('IMPUT VALUE:', inputDOm.value);
        })
    }

    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Contact us page</h1>
                    <p>Fill this form!</p>
                </div>
            </section>
            <section class="row services-list">
                <form class="col-12 col-md-6 col-lg-4">
                    <input type="text" value="">
                    <button type="submit">Click me</button>
                </form>
            </section>`;
    }
}