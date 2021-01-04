import '../sass/style.scss';
import * as toastr from "toastr";
class Main {
    constructor() {
    }
    init() { 
      toastr.info("This is the information","Title Toastr"); 
    }
}
export {Main}
document.addEventListener("DOMContentLoaded", () => {
    let app = new Main();  
    app.init();
});