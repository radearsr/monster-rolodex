import { Component } from 'react';
import "./searchBox.style.css";

export default class SearchBox extends Component {
  render() {
    const props = this.props;
    return (
        <input
            type="text"
            className={props.className}
            placeholder={props.textHolder}
            onChange={props.onChangeHandler}
        />
    )
  }
}
