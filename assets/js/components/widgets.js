import { PlutoComponent, Pluto } from "../pluto.js";

export default class widgets extends PlutoComponent {
   
    constructor(...element){
        super();
        this.widget_div();
        this._content.child(
            ...element
        )
    }
    
    
    widget_div(){
        this._content = Pluto.div.class('widgets')
        this.child(this._content)
    }
}

Pluto.assign('widgets-comp', widgets)