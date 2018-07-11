import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShirts } from './actions';

class ShirtList extends Component {
  componentDidMount() {
    console.log('mounted');
    this.props.getShirts();
  }

  render() {
    const { isLoaded, shirts } = this.props;
    if (!isLoaded) return <h1>loading...</h1>;
    return(
      <div>
        {
          shirts.map(shirt => <p>{shirt.brand}</p>)
        }
      </div>

    );
  }
}

const mapStateToProps = state => ({
  shirts: state.shirts.shirts,
  isLoaded: state.shirts.shirtsLoaded,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShirtList);
