export class PageShopAdd {
    constructor(DOM) {
        this.DOM = DOM;
        this.formDOM = null;
        this.render();
        this.formEvents();
    }

    formEvents() {
        this.formDOM = this.DOM.querySelector('form');
        const titleDOM = document.getElementById('shop_add_title');

        this.formDOM.addEventListener('submit', e => {
            e.preventDefault();
            console.log(titleDOM.value);
        })
    }

    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Add new item to your shopping list</h1>
                    <p>Just name it!</p>
                </div>
            </section>
            <section class="row">
                <form class="col-12 form">
                    <div class="form-row">
                        <label for="shop_add_title">Title</label>
                        <input id="shop_add_title" type="text" value="">
                    </div>
                    <div class="form-row">
                         <button type="submit">Add</button>
                    </div>
                </form>
            </section>`;
    }
}