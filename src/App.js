import React from 'react';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";
import Footer from './components/Footer';
import Header from './components/Header';
import SharedNotes from './components/SharedNotes';
import AppNotes from './components/AppNotes';



class App extends React.Component {

  render() {
    return (
      <div className="App" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/stars.jpg'})` 
      }}>
        <Header />
        <AppNotes />
        <SharedNotes />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);