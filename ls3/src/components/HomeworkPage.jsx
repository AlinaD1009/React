import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import { Footer } from './Footer';  


import './HomeworkPage.css';

export default function HomeworkPage() {

  return (
    <div className='homeworkPage'>
      <div className='header'>
        <Header ddd='props1' text={43}/>
      </div>
    
      <main className='mainContener'>

        <div className='sidebar'>
          <Sidebar ddd='props2' text={43}/>
        </div>

        <div className='content'>
          <Content/>
        </div>

      </main>

      <div className='footer'>
        <Footer  ddd='props3' text={43}/>
      </div>
      
    </div>
      
  )
}
  
