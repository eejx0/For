import Logo from "../assets/logo.svg";
import Search from "../assets/Search.svg";
import styled from "styled-components";
import { Color } from "../styles/Color";

export const Header = () => {
    return (
        <Wrapper>
            <img src={Logo} alt="logo"/>
            <InputWrapper>
                <img src={Search} alt="search" />
                <input placeholder="검색어를 입력하세요"/>
            </InputWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: white;
    gap: 700px;
`;

const InputWrapper = styled.div`
    width: 308px;
    height: 36px;
    border-radius: 50px;
    border: 1px solid ${Color.main};
    display: flex;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    > img {
        width: 20px;
    }
    > input {
        width: 100%;
        border: none;
        outline: none;
        color: ${Color.text};
        border-radius: 50px;
        font-family: 'Ownglyph_ParkDaHyun';
        font-size: 20px;
        &::placeholder {
            color: #b6b6b6;
        }
    }
`;