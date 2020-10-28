import React, { useState } from "react";
import {
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    Card,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";
import "../App.css";
import { getB2s } from "./function";
import post from './pamground.png';

export default function Page1() {
    const [bit2string, setBit2string] = useState('01111000000001010000001100000000');
    const [result, setResult] = useState("");
    const generate = () => {
        getB2s(bit2string).then((res) => {
            setResult(res);
        });
    };


    return (
        <div class="body" >
            <header className="App-header">
                <Row>
                    <Col>
                        {<Row style={{ marginTop: "15%" }}>
                            <Col sm="2"></Col>
                            <Col sm="8">
                                <div className="text-center">
                                    <h2 style={{marginLeft:"20px"}}>
                                        Basic Computing
                                    </h2>
                                </div>
                                <div className="text-center">
                                    <p >exam: 01111000000001010000001100000000</p>
                                </div>
                                <div className="text-center">
                                    <Row>

                                        <Col>
                                            <Input
                                                style={{
                                                    marginTop: "20px",
                                                    marginBottom: "20px",
                                                    width: 400,
                                                }}
                                                value={bit2string}
                                                type="text"
                                                name="bit2string"
                                                id="bit2string"
                                                onChange={(e) => setBit2string(e.target.value)}
                                            />
                                            <h4>Result : {result}</h4><br />
                                            <Row style={{ marginBottom: "30px" }}>
                                                <Col sm="8">
                                                    <Button onClick={generate} color="primary">
                                                        <div style={{ width: 100 }}>
                                                            <h3 style={{ marginTop: "10px" }}>submit</h3>
                                                        </div>
                                                    </Button>
                                                </Col>
                                          
                                            </Row>
                                        </Col>
                                        <Col sm="2"></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm="2"></Col>
                        </Row>}
                    </Col>

                    <Col>
                    <div style={{ marginLeft: "200px" }}>
                            <img src={post} />
                        </div>
                    </Col>

                </Row>
            </header>
        </div>
    );
}
