import { NavLinkModel } from '@fathym-it/hello-world-common';

// @dynamic
/**
 * @dynamic is used because this class contains static properties
 *
 * Used to build the items in the navigation menu
 */

export class NavigationConstants {
    public static readonly MENU_ITEMS: Array<NavLinkModel> = [
        { Label: 'Home', RouterURL: '/home', Icon: 'home'},
        { Label: 'Reactive Form', RouterURL: '/reactiveForm', Icon: 'format_align_justify'},
        { Label: 'Tutorials', RouterURL: '/tutorials', Icon: 'school'}
    ]
}