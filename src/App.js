import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefautLayout from './components/Layout/DefautLayout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component; // xử lý để cho component vào Route, lấy dữ liệu để truyền page vào
                        let Layout = DefautLayout;// mặc định để Layout là Defautlayout
                        if( route.layout){
                            Layout = route.layout;
                        }else if(route.layout===null) {
                            Layout = Fragment;
                        }// Ktra layout truyền vào là gì
                        //Bọc ngoài Page là Layout để sử dụng route trong DefautLayout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout> 
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
