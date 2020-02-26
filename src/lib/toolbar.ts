import { ToolbarMenuItem } from './toolbar-menu-item';

export class Toolbar {

    public backgroundColor: string;

    public direction?: 'horizontal' | 'vertical' = 'horizontal';

    public menuClass?: string;
    public menuIconClass?: string;
    public menuIconColor: string;
    public menuIconFontSize: string;
    public menuItems?: Array<ToolbarMenuItem>;

}
