import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

import './CreateBotArea.css'
// import Example from './Options';
// import Strategy from './Strategy';
// import Formation from './Formation';
// import Assets from './Assets';



import React from 'react'

function CreateBotArea() {
  return (
    

    <div >
        
        <br />
        <br />

        <Container>
            <Row>
                <Col x="3"></Col>
                <Col>
                    
                    <br />
                    <label htmlFor="">Bot Name</label> <br />
                    <input className='input' placeholder='Give a name to your bot' type="text" />
                    
                     <br />
                    <label htmlFor="">Predefined Market</label>
                     <br />

                    <select className='dropbox' name="cars" id="cars">
                        <option value="volvo">Select a market</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 

                    <br />
                    <label htmlFor="">Trade Type</label>
                     <br />

                    <select className='dropbox' name="cars" id="cars">
                        <option value="volvo">Select a trade type</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                     <br />
                    <label htmlFor="">Strategy</label> 
                    <br />
                    {/* <Example></Example> */}
                    {/* <Strategy></Strategy> */}
                    
  
                    <label htmlFor="">Trend Strategy</label> <br />
                    <select className='dropbox' name="cars" id="cars" multiple>
                        <option value="volvo">Select a trend strategy</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button className='button'>Create a Bot</button>
                    
                    


                </Col>
                <Col>
                    <h1></h1>  
                    <br />
                    <label htmlFor="">Bot Description</label> <br />
                    <input className='input' placeholder='Bot Description....' type="text" /> <br />

                    <label htmlFor="">Price Strategy</label> <br />
                    <select className='dropbox' name="cars" id="cars">
                        <option value="volvo">Select a price strategy</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>                    

                    <label htmlFor="">Assets</label> <br />
                    {/* <Assets></Assets> <br /> */}

                    <label htmlFor="">Formation</label> <br />
                    {/* <Formation></Formation> <br /> */}
                    {/* <label htmlFor="">Price Volume</label> <br />
                    <input placeholder='...' type="text" /> <br /> */}
                    <label htmlFor="">Price Volume</label> <br />
                    <div className='PriceVolumeArea'>
                        <button className='PriceVolumeButton'>25%</button>
                        <button className='PriceVolumeButton'>50%</button>
                        <button className='PriceVolumeButton'>75%</button>
                        <button className='PriceVolumeButton'>100%</button>
                    </div>
                    


                 
                    {/* <a className="btn btn-primary" href="#" role="button">Link</a>
                    <button className="btn btn-primary" type="submit">Button</button> */}
                    
                </Col>

                <Col>  <h1></h1>    </Col>
            </Row>
        </Container>
    </div>
   
      
  )
}

export default CreateBotArea