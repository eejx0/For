import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color"

export const Home = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <p>오늘은 뭐 먹지?</p>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    align-items: center;
    justify-content: center;
    > p {
        margin-top: 66px;
        font-size: 40px;
        color: ${Color.text};
    }
`;