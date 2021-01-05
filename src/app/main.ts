import '../sass/style.scss';
import * as toastr from "toastr";
class Main {s
    constructor() {
    }
    init() { 
      console.log("hello");       
      toastr.error("This is the information","Title Toastr"); 
      alert("just an alert!");
    }
}
export {Main}
document.addEventListener("DOMContentLoaded", () => {
    let app = new Main();  
    app.init();  
});