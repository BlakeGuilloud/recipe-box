import React from 'react';

const Home = (props) => {
  const {
    recipes,
  } = props;

  return (
    <div className="container">
      <div className="col-sm-12">
        <form action="" className="form-inline row">
          <div className="form-group col-sm-12">
            <label htmlFor="title">Title</label>
            <input style={{ width: '100%' }} type="text" className="form-control input-lg text-center"/>
            <label htmlFor="title">Url</label>
            <input style={{ width: '100%' }} type="text" className="form-control input-lg text-center"/>
            <button className="btn btn-success btn-block">
              New Recipe
            </button>
          </div>
        </form>
      </div>
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
