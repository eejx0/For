import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color";
import Sample1 from "../assets/Sample1.svg";
// import NoPicture from "../assets/NoPicture.svg";

export const Recipe = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <RecipeBox>
                    <img src={Sample1} alt="샘플" />
                    <p>레시피</p>
                </RecipeBox>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 100px;
    width: 1100px;
    margin-bottom: 50px;
`;

const RecipeBox = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    > img {
        min-width: 243px;
        height: 141px;
        background-color: gray;
        border-radius: 10px;
        object-fit: cover;
    }
    > p {
        font-size: 20px;
        color: ${Color.text};
    }
`;