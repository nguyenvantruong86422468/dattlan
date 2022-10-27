import 'antd/dist/antd.min.css';
import './App.css';
import "./Component/Button/Buttoncss.css"
import "./Assets/css/iindex.css";
import "./Component/Logo/Logo.css"

import CustomerLayout from './layout/CustomerLayout';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Home from './pages/Home/Home';
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import AdminLayout from './layout/AdminLayout';
import MovieManager from './pages/Admin/MovieManager';
import AddMovie from './pages/Admin/AddMovie';
import EditMovie from './pages/Admin/EditMovie';
import ShowTime from './pages/Admin/ShowTime';
import Login from './pages/Login/Login.';
import { UserLayout } from './layout/UserLayout';
import Register from './pages/Register/Register';
import { ChairTableLayout } from './layout/ChairTableLayout';
import ChairTable from './pages/ChairTable/ChairTable';
import Profile from './pages/Profile/Profile';
import Thuvienphim from './pages/ThuVienPhim/Thuvienphim';
import Tintuc from './Component/News/Tintuc';
import Xemphimnhanh from './Component/Xemphim/Xemphimnhanh';
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <CustomerLayout exact path="/" component={Home} />
          <CustomerLayout exact path="/home" component={Home} />
          <CustomerLayout exact path="/filmdetail/:id" component={FilmDetail} />
          <CustomerLayout exact path="/chairtable" component={ChairTable} />
          <CustomerLayout exact path="/profile" component={Profile} />
          <CustomerLayout exact path="/Thuvienphim" component={Thuvienphim} />
          <CustomerLayout exact path="/Tintuc" component={Tintuc} />
          <CustomerLayout exact path="/Xemphimnhanh" component={Xemphimnhanh} />

          
          <AdminLayout exact path="/admin/film" component={MovieManager}/>
          <AdminLayout exact path="/admin/film/addfilm" component={AddMovie}/>
          <AdminLayout exact path="/admin/film/editfilm/:id" component={EditMovie}/>
          <AdminLayout exact path="/admin/film/showtime/:id" component={ShowTime}/>


          <UserLayout exact path="/login" Component={Login} />
          <UserLayout exact path="/register" Component={Register} />

          <ChairTableLayout exact path="/chairtable/:id" Component={ChairTable} />
          

        </Switch>
      </Router>
    </div>
  );
}
export default App;
