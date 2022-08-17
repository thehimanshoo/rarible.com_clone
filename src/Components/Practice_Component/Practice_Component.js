import React, { useState } from "react";
import "./practice.style";

const Practice_Component = () => {
  let [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mob: "",
  });

  let formSubmit = (e) => {
    e.preventDefault();
    console.log(state.first_name);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-header bg-dark">
                <p className="fw-bold text-white fs-4 text-center">
                  Registration Form
                </p>
              </div>
              <div className="card-body">
                <form action="" className="form-group" onSubmit={formSubmit}>
                  <div className="form-group-item">
                    <input
                      onChange={(e) => {
                        setState({ ...state, first_name: e.target.value });
                      }}
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group-item mt-3">
                    <input
                      onChange={(e) => {
                        setState({ ...state, last_name: e.target.value });
                      }}
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group-item mt-3">
                    <input
                      onChange={(e) => {
                        setState({ ...state, email: e.target.value });
                      }}
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group-item mt-3">
                    <input
                      onChange={(e) => {
                        setState({ ...state, mob: e.target.value });
                      }}
                      type="number"
                      placeholder="mob."
                      className="form-control"
                    />
                  </div>

                  <div className="mt-4">
                    <button className="btn btn-danger text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Practice_Component;
