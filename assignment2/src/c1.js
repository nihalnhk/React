function C1(props) {
  return (
    <div className="card">
      <div className="image">
        {<img src={props.im} alt="none" className="ima"></img>}
      </div>
      <div className="title">
        <h3>Title :{props.title}</h3>
      </div>
      <div className="st">
        <h4>SubTitle :{props.st} </h4>
      </div>
      <div className="des">
        <p>Description :{props.des}</p>
      </div>
      <div className="btn">
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default C1;
