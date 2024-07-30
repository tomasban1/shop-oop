export class ServicesPage {
    constructor(DOM) {
        this.DOM = DOM
        this.render();
    }

    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="col-12">
                    <h1>Services page</h1>
                    <p>Here is our services</p>
                </div>
            </section>
            <section class="row services-list">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Design</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Front-end programming</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Back-end programming</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Databases</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Project management</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>UX</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Friendly support</h2>
                        <p>Something about this cool services!</p>
                    </div>
                </div>
            </section>`;
    }
}