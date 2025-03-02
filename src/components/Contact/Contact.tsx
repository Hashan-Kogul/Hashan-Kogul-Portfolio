import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:hashankogul99uoj@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:hashankogul99uoj@gmail.com">hashankogul99uoj@gmail.com</a>
        </div>
        <div>
        <a href="tel:+94778707597"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+94778707597">(+94) 778707597</a>
        </div>  
      </div>
    </Container>
  )
}