import React from "react";
import { connect } from 'react-redux'
import axios from 'axios'
import Spinner from './Spinner'
import { initCurrency, initPrice } from "../actions/action";
import '../styles/App.css'
import Item from "./Item";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // fetch data
        axios('https://cors-anywhere.herokuapp.com/https://www.cryptocompare.com/api/data/coinlist/').then(response => {
            this.props.dispatch(initCurrency(response.data.Data));
        });
    }
    render() {
        const arr = this.props.state.currencies
        const dispatch = this.props.dispatch;
        return (
            <div>
                {this.props.state.load === true ?
                    <div>
                        <div className='list'>
                            <Item arr={this.props.state.currencies} />
                        </div>
                    </div>
                    : <div className='spinner'><Spinner /></div>}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        state: store,
    }
}

export default connect(mapStateToProps)(App)