import React from 'react';
import {connect} from 'react-redux';
import {RemoveFeature} from '../actions';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => props.RemoveFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {RemoveFeature})(AddedFeature);
