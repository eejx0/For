import styled from "styled-components"
import Sample1 from "../assets/Sample1.svg";
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";

export const SearchBox = () => {
    return (
        <Wrapper>
            <Link to={'/detail'}>
                <Image />
            </Link>
            <TextWrapper>
                <Link to={'/detail'}>
                    <Name>스파게티</Name>
                </Link>
                <TagWrapper>
                    <CookKind>밥</CookKind>
                    <HashTag>당호박가루</HashTag>
                    <CookMethod>끓이기</CookMethod>
                </TagWrapper>
                <CookInformation>열량: 205, 탄수화물: 35, 단백질: 3, 지방: 6, 나트륨: 68</CookInformation>
            </TextWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: auto;
`;

const Image = styled.div`
    width: 384px;
    height: 202px;
    border-radius: 30px;
    background-image: url(${Sample1});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    cursor: pointer;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 45px;
`;

const TagWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-top: 15px;
`;

const CookKind = styled.div`
    padding: 0 20px; 
    height: 28px;
    background-color: ${Color.text};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    width: auto;
    white-space: nowrap;
`;

const HashTag = styled.div`
    padding: 0 20px; 
    height: 28px;
    border: 2px solid ${Color.text};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: ${Color.text};
    width: auto;
    white-space: nowrap;
`;

const CookMethod = styled.div`
    padding: 0 20px; 
    height: 28px;
    border: 2px solid ${Color.text};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${Color.text};
    width: auto;
    white-space: nowrap;
`;

const CookInformation = styled.p`
    font-size: 20px;
    color: ${Color.text};
    margin-top: 20px;
`;

const Name = styled.p`
    font-size: 30px;
    color: ${Color.text};
    cursor: pointer;
`;