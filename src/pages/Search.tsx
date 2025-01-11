import styled from "styled-components"
import { Header } from "../components/Header"
import { SearchBox } from "../components/SearchBox"

export const Search = () => {
    return (
        <Wrapper>
            <Header />
                <Container>
                    <SearchBox />
                    <SearchBox />
                    <SearchBox />
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
    gap: 30px;
    align-items: center;
    margin-top: 100px;
    width: 1100px;
    margin-bottom: 50px;
`;