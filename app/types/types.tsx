export type SideNavItem = {
    title: string;
    path: string;
    icon: JSX.Element;
    subMenu?: boolean;
    subMenuItems?: SideNavItem[];
};
export type SideNavItemGroup = {
    title: string;
    items: SideNavItem[];
};