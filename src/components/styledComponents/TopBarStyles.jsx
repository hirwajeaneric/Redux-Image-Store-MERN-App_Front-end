import styled from 'styled-components';

export const TopBarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid gray;

    div {
        display: flex;
        flex-direction: row;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        
        a {
            text-decoration: none;
            color: green;
            font-size: 200%;
            
            &:hover {
                color: black;
            }
        }
    }
    

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        padding: 10px 0px;
        div {
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        div {
            width: 95%;
        }
    }
`;