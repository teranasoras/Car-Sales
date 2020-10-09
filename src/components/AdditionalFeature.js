import React from 'react';
import {connect} from 'react-redux'
import {AddFeature} from '../actions'


export const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick = {() => props.AddFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};




export default connect(null, {AddFeature})(AdditionalFeature);
