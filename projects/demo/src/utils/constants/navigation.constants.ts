import { NavLinkModel } from '@fathym-it/hello-world-common';


// @dynamic
/**
* @dynamic is used because this class contains static properties
*
* Used to build the items in the navigation menu
*/

export class NavigationConstants {
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        { Label: 'Home', RouterURL: '/home'},
        { Label: 'Fx Layout', RouterURL: '/fxLayout'},
        { Label: 'Reactive Form', RouterURL: '/reactiveForm', Param: {id: 123}},
        { Label: 'Tutorials', RouterURL: '/tutorials'}
    ]
}