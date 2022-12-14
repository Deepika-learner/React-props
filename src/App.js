//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import JSX from './JSX'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App() {
  return(
     <section>
         <BrowserRouter>
            <Navbar/>
            <Routes> 
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="*" element={<NotFound/>}/>
             </Routes>
         </BrowserRouter>
     {/*<StateExample/>
      <JSX/>
     <Events/>
     <DemoExample name="Deepu" class="Cams"/>
     <StateExample/>
     <FuncProps carname="rolls rolyce" year="2003"/>
     <PropsExample name="Deepu" class="CAMS" rollno="11"/>
     <PropsExample name="Likki" class="biotech" rollno="14"/>*/}
        {/*<p>this is react</p>
        <h1>Heading Tag</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdgV5S9C5GWwq_c7Zz0iuevDw0j4oR6Igzg&usqp=CAU"alt="computer"/>
        <ClassComponent/>*/}
      </section>
  );
}

export default App;