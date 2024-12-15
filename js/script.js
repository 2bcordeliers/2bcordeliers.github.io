class App {
    constructor() {
        this.currentView = mainView;
        this.viewOptions;
    }

    renderView() {
        this.currentView.render();
    }

    set displayedView(view) {
        this.currentView = view;
        this.renderView();
    }
}

let app = new App();

app.renderView();