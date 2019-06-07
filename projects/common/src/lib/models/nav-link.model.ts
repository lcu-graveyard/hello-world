/**
 * Model for naviation link structure
 */
export class NavLinkModel {

    /**
     * Menu label
     */
    public Label: string;

    /**
     * Menu parameter
     */
    public Param?: object;

    /**
     * Navigation URL
     */
    public RouterURL: string;

    constructor(label: string, rounterURL: string, param?: object) {
        this.Label = label;
        this.RouterURL = rounterURL;
        this.Param = param;
    }
}