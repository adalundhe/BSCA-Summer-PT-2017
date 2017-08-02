import React, { Component } from 'react';
import './App.css';
import MenuList from './components/MenuList';
import CategoryDropdown from './components/CategoryDropdown';
import SpiceFilter from './components/SpiceFilter'
import DATA from './DATA';

const categoryDummies = ['Cat1','Cat2','Cat3']

class App extends Component {
  state = {
    categories: [],
    selectedSpiceLevel: 0,
    selectedCategory: "none"
  }

  componentDidMount = () => this.loadData()

  loadData(){

    const initCategories = DATA.items.reduce((cat, i) => {
      if(cat.indexOf(i.category) === -1){
        cat.push(i.category)
      }
      return cat
    },[])

    this.setState({categories: initCategories})
  }

  onCategorySelected = (event) => this.setState({selectedCategory: event.target.value})

  onFilterChanged = (event) => this.setState({selectedSpiceLevel: event.target.value})


  filterCategory = (items) => {
    if(this.state.selectedCategory === "none"){
      return items
    }
    return items.filter((item) => item.category === this.state.selectedCategory)
  }

  filterSpice = (items) => {
    if(this.state.selectedSpiceLevel === 0){
      return items
    }
    return items.filter((item) => item.spiceLevel >= this.state.selectedSpiceLevel)
  }

  render() {
    const filterItems = this.filterSpice(this.filterCategory(DATA.items))
    
    return (
      <div>
      {
        this.state.categories ?
        <div>
          <CategoryDropdown categories={this.state.categories} onCategorySelected={this.onCategorySelected}/>
          <SpiceFilter onFilterChanged={this.onFilterChanged}/>
          <MenuList items={filterItems} />
        </div> : 'Loading...'
      }
      </div>
    );
  }
}

export default App;
