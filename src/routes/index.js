import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import HeaderOnly from "../components/Layout/HeaderOnly";
import Search from "../pages/Search";


// public để ko đăng nhập tài khoản sẽ vẫn dùng được
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    //     { path: '/upload', component: Upload, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// private sẽ sử dụng khi đăng nhập
const privateRoutes = [

];

export {publicRoutes, privateRoutes};