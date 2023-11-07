import { PlutoComponent, Pluto } from "../pluto.js";

export default class widgets extends PlutoComponent {
   
    constructor(){
        super();
    
        this.header();
        this.content();
        this.footer();
    }
    
    header(){
        this._header = Pluto.div.class('header').text("Widget")
        this.child(this._header)
    }
    
    footer(){
        this._footer = Pluto.div.class('footer').text("Footer")
        this.child(this._footer)
    }
    
    content(){
        this._content = Pluto.div.class('contents')
        .child(
            Pluto.div.class('title').text("Title"),
            Pluto.div.class('text').text("Text"),
            Pluto.div.class('text').text("Text")
        )
        this.child(this._content)
    }
}

Pluto.assign('widgets-comp', widgets)