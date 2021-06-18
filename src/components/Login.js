import React from "react";
import{Form,Button,Grid,Header,Segment} from 'semantic-ui-react';
    const Login = ({
        user: { mobileNumber, verificationCode, verificationSent },
        setUser,
        sendSMSCode,
        sendverificationCode,
      }) => {
        const populateFields = (event, data) => {
          setUser((draft) => {
            draft[data.mobileNumber] = data.value;
          });
        };
      
    return(
       <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
           <Grid.Column style={{maxWidth:450}}>
               <Header as="h2" color="teal">
                   Login into your account
                   </Header>   
                  
                          {verificationSent && (
              <Form.Input
                fluid
                icon="key"
                iconPosition="left"
                placeholder="Enter Code"
                value={verificationCode}
                onChange={(event, data) => populateFields(event, data)}
                name="verificationCode"
              ></Form.Input>
            )}
 <Form>
                       <Segment stacked>
                        

                         <Form.Input
                           fluid
                           icon="phone"
                           iconPosition="left"
                           placeholder="Enter Mobile Number"
                           value={mobileNumber}
                             onChange={(event, data) => populateFields(event, data)}
                          name="mobileNumber"
                         ></Form.Input>
                         <Button color="teal" fluid onClick={verificationSent ? sendverificationCode : sendSMSCode}>
                {verificationSent ? 'Login/Signup' : 'Get OTP'}

                         </Button>
                          </Segment>                 
                           </Form>      
                     </Grid.Column>
       </Grid>
    );
      };
export default Login;
