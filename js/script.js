class App {
    constructor() {
        this.currentView = mainView;
        this.viewOptions;
    }

    renderView(view, options) {
        this.currentView = view;
        this.currentView.render(options);
    }
}

let app = new App();

app.renderView(mainView, {});