import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBFile,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import anonim from "./anonim.jpg";

export function Settings() {
   const [fillActive, setFillActive] = useState("tab1");

   const handleFillClick = (value) => {
     if (value === fillActive) {
       return;
     }

     setFillActive(value);
   };

   return (
     <>
       <MDBTabs fill className="mb-3">
         <MDBTabsItem>
           <MDBTabsLink
             onClick={() => handleFillClick("tab1")}
             active={fillActive === "tab1"}
           >
             Profile
           </MDBTabsLink>
         </MDBTabsItem>
         <MDBTabsItem>
           <MDBTabsLink
             onClick={() => handleFillClick("tab2")}
             active={fillActive === "tab2"}
           >
             Notifications
           </MDBTabsLink>
         </MDBTabsItem>
         <MDBTabsItem>
           <MDBTabsLink
             onClick={() => handleFillClick("tab3")}
             active={fillActive === "tab3"}
           >
             Security
           </MDBTabsLink>
         </MDBTabsItem>
       </MDBTabs>

       <MDBTabsContent>
         <MDBTabsPane show={fillActive === "tab1"}>
           <h5>GENERAL INFORMATION</h5>
           <div className="d-flex ">
             <img
               alt=""
               className="rounded-circle"
               src={anonim}
               width="100"
               height="100"
             />

             <MDBFile className="" id="customFile" />
           </div>
           <div>
             <form>
               <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
               <MDBInput
                 type="email"
                 id="form4Example2"
                 wrapperClass="mb-4"
                 label="Email address"
               />
               <MDBInput
                 wrapperClass="mb-4"
                 textarea
                 id="form6Example7"
                 rows={4}
                 label="Additional information"
               />

               <MDBBtn type="submit" className="mb-4" block>
                 Sign in
               </MDBBtn>
             </form>
           </div>
         </MDBTabsPane>
         <MDBTabsPane show={fillActive === "tab2"}>Tab 2 content</MDBTabsPane>
         <MDBTabsPane show={fillActive === "tab3"}>Tab 3 content</MDBTabsPane>
       </MDBTabsContent>
     </>
   );
}

export default Settings;
