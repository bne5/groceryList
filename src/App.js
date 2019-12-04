import React, { Component, } from 'react';
import List from './List';
import ThingForm from './ThingForm';
import Footer from './Footer';


class App extends Component {
  state = {
    things: [], filter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (name) => {
    const { things } = this.state;
    const thing = { name, id: this.getUniqId() , complete: false }
    this.setState({ things: [thing, ...things] }); 
    }

  renderThings = () => {
    const { things, } = this.state;
    return things.map( thing => 
      <li key={thing.id}>{thing.name}</li>
    )
  };

  handleClick = (id) => {
    const { things } = this.state;
    this.setState({
      things: things.map( thing => {
        if (thing.id === id) {
          return {
            ...thing,
            complete: !thing.complete
          }
        }
        return thing
      })
    })
  }

  visibleItems = () => {
    const { things, filter } = this.state;
    switch(filter) {
      case 'Need it':
        return things.filter( t => !t.complete )
      case 'Got it':
        return things.filter( t=> t.complete )
      default:
        return things;
    }
  }

  render() {
    const { things, filter } = this.state;

    return (
      <div>
        <ThingForm addItem={this.addItem} />
        <List name="Grocery List" items={this.visibleItems()} thingClick={this.handleClick}/>
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}

export default App;