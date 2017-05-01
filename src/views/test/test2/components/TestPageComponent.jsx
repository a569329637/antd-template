import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import IndexLayout from '../../../../layouts/IndexLayout.jsx';

class TestPage extends Component {
  static propTypes = {
    info: PropTypes.string.isRequired,
  };

  render(){
    return(
      <IndexLayout>
        <div>{this.props.info}</div>
      </IndexLayout>
    )
  }
}

function mapStateToProps(state) {
  return { info: state.info };
}

export default connect(mapStateToProps)(TestPage);
