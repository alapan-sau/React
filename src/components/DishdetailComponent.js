import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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

function RenderDish({dish , comments}){
    if (dish != null)
        return(
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
                        <RenderComments comments={comments}/>                    
                    </ul>
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
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <RenderDish dish={props.dish} comments={props.comments} />
        </div>
    );
}

export default Dishdetail;