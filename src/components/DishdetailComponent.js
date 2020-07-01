import React , {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);
    }

    renderDish(dish){
        if (dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div  className="col-12 col-md m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {this.renderComments(dish.comments)}                    
                            </ul>
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    dateFormat(date_var){

        var d = new Date(date_var);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return d.toLocaleDateString('en-US', options);
    }
    renderComments(comments){
        const allComments = comments.map((comment) =>{ 
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {this.dateFormat(comment.date)}</p>
                </li>
            );
        });

        return allComments;
    }
    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.dish)}
            </div>
        );
    }
}

 


export default Dishdetail;