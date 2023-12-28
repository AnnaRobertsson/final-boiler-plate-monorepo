import styled from "styled-components";

const StyledButton = styled.div`
  background-color: #eeb885;
  color: #000;
  padding: 5px 15px;
  border-radius: 15px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  &:hover {
    background-color: #9eb7bf;
  }
`;

// Mounta knappen enligt nedan där den behövs!
{
  // <Button
  //   onClick={onClick}
  //   className="YourClassName"
  //   buttonName="YourButtonText"
  // />;
}

// Radera bilddelen om det aldrig kommer till användning!
export const Button = ({ buttonName, className, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {buttonName}
    </StyledButton>
  );
};
