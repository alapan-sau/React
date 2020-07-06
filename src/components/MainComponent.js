import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


function mapStateToProps(state){
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};
class Main extends Component {

  render() {

    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter( (dish)=>dish.featured)[0]}
                promotion={this.props.promotions.filter( (prom)=>prom.featured)[0]}
                leader = {this.props.dishes.filter( (lead)=>lead.featured)[0]}
          />
      );
    }

    const SelectedDish = ({match}) => {
      return(
        <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={SelectedDish} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));