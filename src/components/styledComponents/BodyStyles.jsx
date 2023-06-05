import styled from 'styled-components';

export const BodyContainer = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    div.inner-container {
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin: 20px 0 40px;

        h2 {
            font-size: 150%;
            font-weight: 400;
            color: purple;
            text-align: left;
            width: 100%;
            margin-bottom: 20px;
        }
    }

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        div.inner-container {
            width: 90%;
        }
    }

    @media (max-width: 480px) {
        div.inner-container {
            width: 95%;
        }
    }
`;

export const ImageCardContainer = styled.div`
    width: 32%; 
    height: 200px; 
    background: white; 
    box-shadow: 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center;
    background-size: cover; 
    background-repeat: no-repeat;

    &:hover {
        div.image-name-container {
            p {
                display: block;
            }
        }
    }

    div.image-name-container {
        background: rgba(0,0,0,0.5);
        padding: 0px;
        width: 100%;

        p {
            color: white;
            padding: 10px;
            font-size: 90%;
            display: none; 
        }
    }

    div.button-group {
        background: white;
        width: 100%;
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        align-items: center;
    
        svg {
            cursor: pointer; 
            margin: 5px;
        }

        svg.preview {
            color: blue;
        }

        svg.edit {
            color: purple;
        }


    }

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 200px;
    }

    @media (max-width: 480px) {
        
    }
`;

export const CardListContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: flex-start; 
    flex-wrap: nowrap;
    width: 100%;

    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;    
    }

    @media (max-width: 480px) {
        
    }
`;

export const FormContainer = styled.form`
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
    flex-wrap: nowrap;
    width: 100%;
    gap: 10px;
    margin-bottom: 40px;

    div {
        background: white;  
    }


    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        div, input {
            width: 100%;
        }    
    }

    @media (max-width: 480px) {
        
    }
`;

export const ImageDetailsContainer = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: flex-start; 
    flex-wrap: nowrap;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;

    div.image-container {
        width: 80%;
        background-size: cover; 
        background-repeat: no-repeat;
        height: 500px;
    }

    div.image-descriptions, 
    form.image-descriptions {
        width: 18%;
        display: flex; 
        flex-direction: column; 
        justify-content: flex-start; 
        align-items: flex-start;
        gap: 10px;

        input {
            background: white;
        }

        div.buttons {
            width: 100%;
            margin-top: 40px;
            display: flex; 
            flex-direction: column; 
            justify-content: flex-start; 
            align-items: flex-start;
            gap: 10px;
            
            div {
                width: 100%;
                margin-top: 10px;
                display: flex; 
                flex-direction: column; 
                justify-content: space-between; 
                align-items: flex-start;
                gap: 10px;
            }
        }
    }


    @media (max-width: 1080px) {
                
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        
        div.image-container {
            width: 100%;
            height: 200px;
        }
    
        div.image-descriptions,
        form.image-descriptions {
            width: 100%;
            input,div {
                width: 100%;
            }

            div.buttons {
                width: 100%;
                button {
                    width: 100%;
                }        

                div {
                    flex-direction: row; 
                }
            }
        }
    }

    @media (max-width: 480px) {
        
    }
`;