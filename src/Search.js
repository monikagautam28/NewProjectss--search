import React from 'react';
import './Search.css'


class Search extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            search: this.props.mylist
        }
        console.log(this.props.mylist);
    }
    onHandleChange(e) {
        let mydata = this.props.mylist;
        this.setState({ search: e.target.value });
            console.log(e.target.value);
        this.state.search.filter((it) => { return it.name}

        )
    }


    render() {
        let mydata = this.props.mylist;
        console.log(mydata);
        return (
            <div>
                <input type="text" className="inputs" onChange={(e) => this.onHandleChange(e)} value={this.state.search}>{
                }</input>
                <div className="cards">
                    <div className="card">
                        <div className="box">
                            {
                                mydata.map((it) => {
                                    return <h2>{it.name}</h2>
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Search;
