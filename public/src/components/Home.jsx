import React from 'react';

const Home = (props) => {
  const {
    recipes,
  } = props;

  return (
    <div>
      {recipes.map((item, idx) => {
        return (
          <div key={idx}>{item.title}</div>
        )
      })}
    </div>
  );
};

Home.displayName = 'Home';

Home.propTypes = {};

export default Home;
