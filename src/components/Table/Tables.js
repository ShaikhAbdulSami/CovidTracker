import React from 'react'

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
  } from "reactstrap";

function Tables({countryData}) {


    if(!countryData.length){
        return null;
    }

    const dataRows =  countryData.map( (data, i) => (
            <tr key={i} >
                <td>{i + 1  }</td>
                <td>{data.combinedKey}</td>
                <td> <span className="text-info"> {data.confirmed} </span></td>
                <td> <span className="text-success"> {data.recovered} </span></td>
                <td> <span className="text-danger"> {data.deaths} </span></td>
                <td className="text-center">{ new Date( data.lastUpdate).toLocaleDateString()  }</td>
            </tr>
        )
    )
     

    return (
        <>
            <Row>
                <Col lg="12" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h1"> Country Data </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive-sm">
                            <Table className="tablesorter">
                            <thead className="text-primary">
                                <tr>
                                    <th>S.no</th>
                                    <th>Provice, State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th className="text-center">Last Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                               {dataRows}

                            </tbody>
                        </Table>
                        </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>   
        </>
    )
}

export default Tables