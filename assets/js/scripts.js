import { PlutoComponent, Pluto } from "./pluto.js";
import widgets from './components/widgets.js';


window.logo = Pluto.div.child(
    Pluto.img.attr( 'src', 'assets/images/dy.png'),
    Pluto.div.text('Deta-y v1.0').class('logo_name'),
    Pluto.i.class('bx', 'bx-menu-alt-right').id('btn').on("click", (element, event) => {
        Pluto.query(".sidebar").toggleClass("open");
        element.hasClass("bx-menu-alt-right") ? element.removeClass("bx-menu-alt-right").class('bx-menu') : element.removeClass("bx-menu").class('bx-menu-alt-right');
    })
).class('logo-details')

window.sidemenu = Pluto.ul.child(
    Pluto.li.child(
        Pluto.i.class('bx', 'bx-search'),
        Pluto.input.attr( {type: 'text', name: 'suche', placeholder: 'suche...'}),
        Pluto.span.text('Suche').class('tooltip')
    ),
    Pluto.li.child(
        Pluto.a.attr('href', '#').child(
            Pluto.i.class('bx', 'bx-grid-alt'),
            Pluto.span.text('Dashboard').class('links_name')
        ),
        Pluto.span.text('Dashboard').class('tooltip')
    ),
    Pluto.li.child(
        Pluto.a.attr('href', '#').child(
            Pluto.i.class('bx', 'bx-user'),
            Pluto.span.text('Users').class('links_name')
        ),
        Pluto.span.text('Users').class('tooltip')
    ),
    Pluto.li.child(
        Pluto.a.attr('href', '#').child(
            Pluto.i.class('bx', 'bx-cog'),
            Pluto.span.text('Settings').class('links_name')
        ),
        Pluto.span.text('Settings').class('tooltip')
    ),
    Pluto.li.child(
        Pluto.div.child(
            Pluto.img.attr({src: 'assets/images/profil.png', alt: 'profil'}),
            Pluto.div.child(
                Pluto.div.text('Yılmaz ÇİFTCİ').class('name'),
                Pluto.div.text('Frontend Developer').class('job'),
            ).class('name_job')
        ).class('profile-details'),
        Pluto.i.class('bx', 'bx-log-out').id('log_out')
    ).class('profile')
).class('nav-list')

// Page Title
window.seiteTitle = Pluto.span.child(
    'Dashboard'
).class('text-title')

// Breadcrumbs Style
window.breadcrumbs = Pluto.div.child(
    Pluto.ul.child(
        Pluto.li.child(
            Pluto.a.attr('href', '#').text('Dashboard')
        ),
        Pluto.li.child(
            Pluto.a.attr('href', '#').text(' Seite')
        )
    )
).class('breadcrumbs')


Pluto.query(".sidebar").child(logo, sidemenu, )
Pluto.query(".topBar .text ").child(seiteTitle)
Pluto.query(".topBar").child(breadcrumbs)
Pluto.query(".home-section .content").child( 
    Pluto.div.child(
        new widgets(
            Pluto.div.class('title').text("grid 1")
        )
    ),
    Pluto.div.child(
        new widgets(
            Pluto.div.class('title').text("grid 2")
        ), 
        new widgets(
            Pluto.div.class('title').text("grid 2")
        )
    ).class('row', 'col-2'),

    Pluto.div.child(
        new widgets(
            Pluto.div.class('title').text("grid 3")
        ), 
        new widgets(
            Pluto.div.class('title').text("grid 3")
        ),
        new widgets(
            Pluto.div.class('title').text("grid 3")
        )
    ).class('row', 'col-3')
)