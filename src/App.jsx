import Todo from './components/buttons';
import FormHandling from './components/TodoInput';
import Demo from './components/demo';
import Click from './components/Click';
import Like from './components/Like';
import Api from './assets/api/Api';
import Apifilter from './assets/api_filtre/apifilter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Router/home';
import About from './Router/About ';
import Pricing from './Router/pricing';
import Contect from './Router/contect';
import Reactrouter from './Router/ReactRouter';
import ReactRouter from './Router/ReactRouter';
import Todoinput from './components/TodoInput';
import Selection from './components/select';
import Cart from './components/cart';
const App = () => {
  return (
    <div>
      <div>
        {/* <Todo /> */}
        {/* <FormHandling />  */}
        {/* <Demo /> */}
        {/* <Click />
      <Click /> */}
        {/* <Like /> */}
        {/* <Api/> */}
        {/* <Apifilter /> */}
        {/* <Todoinput /> */}
        {/* <Selection /> */}

      </div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<ReactRouter />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='Pricing' element={<Pricing />} />
            <Route path='contect' element={<Contect />} />
            <Route path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App