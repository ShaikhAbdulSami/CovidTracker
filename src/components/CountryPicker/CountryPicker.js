import React from 'react';
// import { NativeSelect, FormControl } from '@material-ui/core';

// import { fetchCountries } from '../../Api/Api';

import styles from '../../covid.module.css';
import { Link , BrowserRouter as Router, Route} from 'react-router-dom'

import image from '../../Image/covid-19.png' 
import {
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";


export function CountryPicker( {countries, handleChange, country} ) {


  const countriesApi = countries.length ?
       (  countries.map( (country,index) => <option key={index} value={country}> {country}</option> ) ) : (<option>{'loading'}</option>)

  return (
      <div>
          <Row className="mb-2">
              <Col lg="4" md="4" className="mt-3 text-center text-md-left">
                  <Router>
                      <Route>
                            <Link to="/">
                                <h2><img className={styles.image}src={image} alt="Logo" /></h2> 
                            </Link>
                        </Route>
                    </Router>
              </Col>
              <Col lg="4" md="4" className="text-center mt-4">
                  <h1><strong>{country}</strong></h1>
              </Col>
              <Col lg="4" md="4">
                  <Label for="exampleSelectMulti">Select Country</Label>
                  <Input defaultValue={'DEFAULT'} type="select" onChange={ e => handleChange(e.target.value)} >
                      <option value="DEFAULT" disabled>Choose a country...</option>
                      {countriesApi}
                  </Input>
              </Col>
          </Row>
      </div>
  )
}

export default CountryPicker