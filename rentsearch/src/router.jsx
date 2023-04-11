import About from "./Pages/About/About"
import Blog from "./Pages/Blog/Blog"
import BlogData from "./Pages/BlogData/BlogData"
import Faq from "./Pages/Faq/Faq"
import Home from "./Pages/Home/Home"
import News from "./Pages/News/News"


export const router=[
    {
        id: Math.floor(Math.random()*1000),
        component:<Home/>,
        path:"/",
        names:"Home"
    },
    {
        id: Math.floor(Math.random()*1000),
        component:<About/>,
        path:"/about",
        names:"About"
    },
    {
        id: Math.floor(Math.random()*1000),
        component:<Faq/>,
        path:"/faq",
        names:"Faq"
    },
    {
        id: Math.floor(Math.random()*1000),
        component:<News/>,
        path:"/news",
        names:"News"
    },
    {
        id: Math.floor(Math.random()*1000),
        component:<Blog/>,
        path:"/blog",
        names:"Blog"
    },
    {
        id: Math.floor(Math.random()*1000),
        component:<BlogData/>,
        path:"/blog/blogData",
        names:"BlogData"
    },
]

export default router