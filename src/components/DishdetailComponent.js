import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


function DateFormat(date_var){
    var d = new Date(date_var);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return d.toLocaleDateString('en-US', options);
}

function RenderComments({comments}){
    const allComments = comments.map((comment) =>{ 
        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {DateFormat(comment.date)}</p>
            </li>
        );
    });
    return allComments;
}

function RenderDish({dish}){
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
                            <RenderComments comments={dish.comments}/>                    
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


function Dishdetail(props){
    return (
        <div className="row">
            <RenderDish dish={props.dish} />
        </div>
    );
}

export default Dishdetail;