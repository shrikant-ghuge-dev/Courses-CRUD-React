import React, { useEffect } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
// import { Jumbotron } from 'react-toastify';

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src="https://picsum.photos/900/270?grayscale"
                        style={{
                            height: 270
                        }}
                        width="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5">
                            Learncode with Shree
                        </CardTitle>
                        <CardText>
                            This is developed by Shree for learning purpose backend is spring boot and frontend is reactjs.
                        </CardText>
                        <CardText>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        </div>
    )
};

export default Home;