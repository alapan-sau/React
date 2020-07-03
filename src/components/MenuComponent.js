import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

function RenderMenu({dish}){
    return(
        <Link to={`/menu/${dish.id}`}>
        <Card key={dish.id}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    )
}
function Menu (props){
    const menu = props.dishes.map((dish) => {
        return (
            <div  className="col-12 col-md-5 m-1">
                <RenderMenu dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;