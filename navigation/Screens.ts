export enum ScreenName {
    Home = "Home",
    Catalog = "Каталог",
    Favorites = "Избарнное",
    Cart = "Корзина",
    Profile = "Профиль",
    Search = "Search"
}

type ScreensType =
{
    name: string,
    component: any
}
