import styled from 'styled-components';

export const BodyContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        gap: 20px;

        h2 {
            font-size: 150%;
            font-weight: 400;
            color: purple;
            text-align: left;
            width: 100%;
        }
    }

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
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

export const ImageCardContainer = styled.div`
    width: 30px; 
    height: 200px; 
    background: white; 
    box-shadow: 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const CardListContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
    gap:20px; 
    width:100%; 
    flex-wrap: wrap;

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;