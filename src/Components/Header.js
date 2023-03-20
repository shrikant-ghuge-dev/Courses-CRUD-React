import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
    return (
        <div>
            <Card className="bg-warning">
                <CardBody>
                    <h1 className="text-center my-3">Welcome to Courses Application</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;