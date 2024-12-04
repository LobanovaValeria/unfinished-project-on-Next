import { IMenu } from "./menu.interface"


export const firstMenu:IMenu={
    title: 'Меню',
    items: [{
        icon: 'MdHome',
        link: '/',
        title: 'Главная',
    },
    {
        icon: 'MdHome',
        link: '/genres',
        title: 'Жанры',
    },
    {
        icon: 'MdRefresh',
        link: '/fresh',
        title: 'Новые фильмы',
    },
    {
        icon: 'MdLocalFireDepartment',
        link: '/trend',
        title: 'Сейчас в тренде',
    }]

}

export const userMenu:IMenu = {
    title: 'Общее',
    items: [],
}

// export const menus: IMenu[]=[firstMenu, userMenu]