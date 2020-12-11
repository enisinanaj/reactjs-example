import './App.css';
import React, { Component } from 'react';
import Title from './Components/Title';
import Section from './Components/Section';

class MainApp extends Component {

    render() {
        return (<div>
            <Section title="About me">
              About me......
              <br />
              <Title content="Title in Section body"></Title>
              <strong>YAY!!!</strong>
            </Section>

            <Section title="Portfolio">
              <ul>
                <li>Nike</li>
                <li>Unilever</li>
              </ul>
            </Section>
          </div>)
    }

}

export default MainApp;