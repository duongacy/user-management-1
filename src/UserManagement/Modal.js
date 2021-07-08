import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import React, { Component, createRef } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  state = {
    userAdd: {
      name: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER"
    }
  }

  handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      userAdd: { ...this.state.userAdd, [name]: value }
    }, () => {
      console.log(this.state.userAdd);
    })
  }
  closeRef = React.createRef();
  submitForm = (event) => {
    event.preventDefault();
    this.props.addUser(this.state.userAdd);
    this.closeRef.current.click();
  }
  render() {

    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeRef}
              >
                <span aria-hidden="true">×</span>

              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.submitForm}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChangeInput} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleOnChangeInput} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChangeInput} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChangeInput} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChangeInput} >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => {
      const action = { type: "ADD_USER", payload: user };
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(Modal);
