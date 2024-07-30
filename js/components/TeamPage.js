export class PageTeam {
    constructor(DOM) {
        this.DOM = DOM;
        this.render();
    }

    render() {
        this.DOM.innerHTML = `
             <section class="row">
                <div class="col-12">
                    <h1>Team page</h1>
                    <p>This is our bravest!</p>
                </div>
            </section>
            <section class="row services-list">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Chuck Norris</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Alisa from Wonderland</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Ironman</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Xena (Liusi Lolles)</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Tom</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="service">
                        <h2>Jerry</h2>
                        <p>Something about this cool team member!</p>
                    </div>
                </div>
            </section>`;
    }
}