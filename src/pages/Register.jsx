import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {

  const dispatch= useDispatch()
  const [user, setUser] = useState({
    name: "",
    lastname:"",
    username:"",
    email: "",
 password:"",
 cpassword:"",
  });

  let name, value;
  const handleForm = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleRegister=(e)=>{
    e.preventDefault();

    const { name,lastname,username, email, password, cpassword} = user;

    if(password !== cpassword){
      alert("password and confirm password must be same");
    }
    else if(name && lastname && username && email && password){
      const req={
        name: name,
        lastname : lastname,
        username : username,
        email : email,
        password : password
      }
      dispatch(RegisterUser(req));
      setUser({
        name:"",
        lastname:"",
        username:"",
        email:"",
        password:"",
        cpassword:""
      });
    } else(alert("Fill all Fields"))
  }

  

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text" value={user.name} name="name" onChange={handleForm} placeholder="name" />
          <Input type="text" value={user.lastname} name="lastname" onChange={handleForm} placeholder="last name" />
          <Input type="text" value={user.username} name="username" onChange={handleForm} placeholder="username" />
          <Input type="text" value={user.email} name="email" onChange={handleForm} placeholder="email" />
          <Input type="text" value={user.password} name="password" onChange={handleForm} placeholder="password" />
          <Input type="text" value={user.cpassword} name="cpassword" onChange={handleForm} placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
