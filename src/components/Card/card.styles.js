import styled from "styled-components";

const StyledCardDiv = styled.div`
    display: flex;
    width: 700px;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    margin-top: 15px;
    box-shadow: 0px 0px 32px -18px rgba(0,0,0,0.75);
    `;

const StyledImage = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
`;

const StyledProfileInfo = styled.div`
`;
const StyledName = styled.p`
    margin: 0;
    font-weight: 800;
`;
const StyledUser = styled.p`
    margin: 0;
`;

const StyledActive = styled.p`
    color:${({ color }) => color};
`;

const StyledButton = styled.button`

`;

export {StyledName,StyledUser,StyledCardDiv,StyledImage, StyledActive,StyledButton,StyledProfileInfo};