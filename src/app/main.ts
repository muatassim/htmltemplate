import '../sass/style.scss';
import * as toastr from "toastr";
class Main {
    constructor() {
    }
    init() {
        toastr.options.positionClass = 'toast-bottom-full-width'
        toastr.error("This is the information","Title Toaster");
    }
}
export {Main}
document.addEventListener("DOMContentLoaded", () => {
    let app = new Main();  
    app.init();  
});