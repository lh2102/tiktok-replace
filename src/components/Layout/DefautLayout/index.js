import Header from "./Header";
import Sidebar from "./Sidebar";

function DefautLayout({children}) {
     return (
         <div>
             <Header></Header>
             <div className="container">
                 <Sidebar></Sidebar>
                 <div className="content">
                    {children}
                 </div>
             </div>
         </div>
     );   
}

export default DefautLayout;

