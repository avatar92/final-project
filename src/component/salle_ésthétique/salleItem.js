import React, { Component } from 'react';
import './salleItem.css'
import { Link } from 'react-router-dom'
class SalleItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log(this.props)
        return (
            // <div className="card cardContainer" style={{"max-width": "18rem"}}>
            //     <Link to='/salle_ésthétique/:_id'><img className="card-img-top" src={this.props.img} alt="salle"/></Link>
            //     <div className="card-body">
            //         <h5 className="card-title">{this.props.salleName}</h5>
            //         <p className="card-text"><i class="fa fa-map-marker" aria-hidden="true"></i> {this.props.location}</p>
            //         <Link to='/salle_ésthétique/:_id'><button type='button' className="btn btn-primary boutonsalleItem">voir la salle</button></Link>
            //     </div>
            // </div>

            <article className="card card--1">
                <div className="card__info-hover">
                </div>
                <div className="card__img"></div>
                <a href="#" className="card_link">
                    <div className="card__img--hover"><Link to='/salle_ésthétique/:_id'><img className="card-img-top" src={this.props.img} alt="salle" /></Link></div>
                </a>
                <div className="card__info">
                    <span className="card__category"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.location}</span>
                    <h3 className="card__title">{this.props.salleName}</h3>
                    <span className="card__by">
                        <Link to='/salle_ésthétique/:_id' className="card__author" title="author">Plus de detailles</Link>
                    </span>
                </div>
            </article>
        );
    }
}

export default SalleItem;