import React, { useState } from 'react';
import anonim from "./anonim.jpg";
import * as BS from "react-bootstrap";


export function Settings() {


   return (
     <>
       <BS.Tabs fill className="mb-3">
         <BS.Tab
           className="mb-3 bg-white text-black"
           eventKey="first"
           title="Profile"
         >
           <BS.Container>
             <BS.Row>
               <BS.Col>
                 <h5>GENERAL INFORMATION</h5>
                 <div className="d-flex ">
                   <img
                     alt=""
                     className="rounded-circle"
                     src={anonim}
                     width="100"
                     height="100"
                   />
                 </div>
                 <div>
                   <BS.Form>
                     <BS.Form.Group className="mb-3" controlId="formBasicEmail">
                       <BS.Form.Label>Email address</BS.Form.Label>
                       <BS.Form.Control
                         type="email"
                         placeholder="Enter email"
                       />
                       <BS.Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                       </BS.Form.Text>
                     </BS.Form.Group>

                     <BS.Form.Group
                       className="mb-3"
                       controlId="exampleForm.ControlTextarea1"
                     >
                       <BS.Form.Label>Example textarea</BS.Form.Label>
                       <BS.Form.Control as="textarea" rows={3} />
                     </BS.Form.Group>

                     <BS.Button variant="primary" size="lg" type="submit">
                       Block level button
                     </BS.Button>
                   </BS.Form>
                 </div>
               </BS.Col>
               <BS.Col></BS.Col>
             </BS.Row>
           </BS.Container>
         </BS.Tab>
         <BS.Tab
           className="mb-3 bg-white text-black"
           eventKey="second"
           title="Notifications"
         >
           <BS.Container>
             <BS.Row>
               <BS.Col></BS.Col>
               <BS.Col></BS.Col>
             </BS.Row>
           </BS.Container>
         </BS.Tab>
         <BS.Tab
           className="mb-3 bg-white text-black"
           eventKey="third"
           title="Security"
         >
           <BS.Container>
             <BS.Row className="mt-5">
               <BS.Col>
                 <h5>PASSWORD</h5>
                 <p>Change your password to a new one.</p>
               </BS.Col>
               <BS.Col>
                 {" "}
                 <BS.Button variant="outline-primary" size="lg">
                   Primary
                 </BS.Button>{" "}
               </BS.Col>
             </BS.Row>
             <BS.Row className="mt-5">
               <BS.Col>
                 <h5>MULTI-FACTOR AUTHENTICATION</h5>
                 <p>Setup or remove MFA devices.</p>
               </BS.Col>
               <BS.Col>
                 {" "}
                 <BS.Button variant="outline-primary" size="lg">
                   Primary
                 </BS.Button>{" "}
               </BS.Col>
             </BS.Row>
           </BS.Container>
         </BS.Tab>
       </BS.Tabs>
     </>
   );}

export default Settings;
