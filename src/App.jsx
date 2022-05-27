import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import "./index.css"

const App = () => {
  let [state, setState] = useState([]);
  let [form, setForm] = useState({
    name: "",
  });
  let { name } = form;

  useEffect(async () => {
    let getData = await Axios.get("/users");

    setState(getData.data);

    console.log(state);
  }, []);

  let handleChange = e => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <section className="formWidth ">
      <article>
        <form action="" onSubmit={handleSubmit}>
          <h1> Drop-down search bar</h1>
          <div>
            {/* list paramter in input and datalists id should be same */}

            <input
              type="text"
              list="data"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <datalist id="data">
              {state.map(x => {
                return (
                  <div key={x.id}>
                    <option value={x.login} />
                  </div>
                );
              })}
            </datalist>
            <button>Submit</button>
          </div>
          <center>
            <p>{form.name}</p>
          </center>
        </form>
      </article>
    </section>
  );
};

export default App;
