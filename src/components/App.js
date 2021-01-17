import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImagesInfo from 'components/ImagesInfo';
import Container from 'components/Container';

import './App.css';
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    imageName: [],
  };

  handelSearhSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <Container>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handelSearhSubmit} />

        <ImagesInfo imageName={this.state.imageName} />
      </Container>
    );
  }
}

export default App;
