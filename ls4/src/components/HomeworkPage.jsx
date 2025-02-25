import { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar'; 
import Footer from './Footer'

import './HomeworkPage.css';

export default class HomeworkPage extends Component {
    render() {
        return (
            <div className='homeworkPage'>
            <div className='header'>
              <Header ddd='props1' text={43}/>
            </div>
            <hr />
            <main className='mainContener'>
      
              <div className='sidebar'>
                <Sidebar ddd='props2' text={43}/>
              </div>
                <br />
              <div className='content'>
                <Content/>
              </div>
      
            </main>
      
            <div className='footer'>
              <Footer  ddd='props3' text={43}/>
            </div>
            
          </div>
        );
    }
};
