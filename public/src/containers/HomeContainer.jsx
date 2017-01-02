import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RecipeActions from '../actions/RecipeActions';
import { Home } from '../components';

class HomeContainer extends React.Component {
  static displayName = 'Home Container';

  static propTypes = {
    fetchRecipes: React.PropTypes.func,
    recipes: React.PropTypes.array,
  };

  state = {};

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    console.log('this props recipes', this.props.recipes);
    const props = {
      recipes: this.props.recipes,
    };

    return (
      <Home {...props} />
    );
  }
}

function mapStateToProps(state) {
  const { recipe } = state;
  return {
    recipes: recipe.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecipes: bindActionCreators(RecipeActions.fetchRecipes, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
