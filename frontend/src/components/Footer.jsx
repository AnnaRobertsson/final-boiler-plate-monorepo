import { SocialMediaLinks } from "./SocialMediaLinks";
//import logo from "/technigo-logo.svg";
import styled from "styled-components";

/* Styling for the footer */
const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 10px;
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0;
  background: -webkit-linear-gradient(
    45deg,
    #42121d,
    #7b3848,
    #965862,
    #7b3848,
    #42121d
  );

  a {
    font-size: 25px;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f8f8;
  font-size: 18px;
`;

// const Copyright = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   gap: 4px;

//   p {
//     display: flex;
//   }

//   img.logo-small {
//     min-width: 40px;
//     max-width: 45px;
//     padding-left: 7px;
//   }

/* .separator {
    display: none; /* Initially hide the separator on small screens */

// @media (min-width: 667px) {
//   flex-direction: row;
//   gap: 0;

/*.separator {
      display: inline; /* Display the separator as inline on screens wider than 667px */
/*margin: 0 5px; /* Add space on both sides of the separator */
/*}*/
//   }
// `;

const Links = styled.div`
  display: flex;
  align-items: center;
  color: #f8f8f8;
  margin-top: 15px;
`;

const Contact = styled.div`
  display: flex;
  gap: 20px;
  margin: 10px 0;
`;

// const FooterLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 32px;
//   margin-bottom: 32px;
// `;

// Define the Footer component as a functional component.
export const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        {/* <Copyright> */}
        <Contact>
          <p>Anna Robertsson</p>
          <SocialMediaLinks person="Anna" />
        </Contact>
        <Contact>
          <p>Susanne Ekenheim</p>
          <SocialMediaLinks person="Susanne" />
        </Contact>

        <p>January 2024 | Web Development students at Technigo</p>
        {/* <p className="separator"> | </p> */}
        {/* <a
            href="https://www.technigo.io"
            target="_blank"
            title="Technigo"
            rel="noreferrer" 
          >*/}
        {/* <img className="logo-small" src={logo} alt="Technigo logo" /> */}
        {/* </a> */}
        {/* </Copyright> */}
        <Links>
          {/* <FooterLinks> */}

          {/* </FooterLinks> */}
        </Links>
      </FooterText>
    </StyledFooter>
  );
};