import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text" className="input-field d-none d-xl-block"
          name="q" placeholder="Search products, brands and categories"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="btn d-none d-xl-block" type="submit"
          style={{"background-color": "darkorange","color":"white","font-size": "14px","font-weight": "600","box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)","margin-left": "8px"}}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
}

