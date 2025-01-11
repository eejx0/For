import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color"
import Sample1 from "../assets/Sample1.svg";
import { Link } from "react-router-dom";

export const Detail = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Name>스파게티</Name>
                <Image />
                <IngredientTitle>- 재료 -</IngredientTitle>
                <Ingredients>두부 곤약잡곡밥 두부 110g(⅓모), 흰쌀 15g, 현미쌀 3g, 찹쌀 3g, 실곤약 3g 나물준비 콩나물 15g(15개), 표고버섯 4g(1/2장), 애호박 10g(5×2×1cm), 고사리 15g(7줄기), 당근 15g(5×3×1cm), 소금 3g(2/3작은술), 소금 약간(나물데침) 비빔고추장 소스 초고추장 5g(1작은술), 플레인요거트 10g(2작은술), 참기름 2g(1/3작은술) 곁들임 새싹채소 3g</Ingredients>
                <StyledLink to={'/recipe'}>
                    레시피 보기
                </StyledLink>
                <Wave3></Wave3>
                <Wave2></Wave2>
                <Wave1></Wave1>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    justify-content: center;
`;

const Name = styled.p`
    font-size: 35px;
    color: ${Color.text};
`;

const Image = styled.div`
    width: 534px;
    height: 226px;
    border-radius: 30px;
    background-image: url(${Sample1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 10px;
`;

const IngredientTitle = styled.p`
    font-size: 25px;
    color: ${Color.text};
    margin-top: 50px;
    z-index: 900;
`;

const Ingredients = styled.p`
    width: 800px;
    display: flex;
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    color: ${Color.text};
    z-index: 900;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    width: 236px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: ${Color.text};
    z-index: 900;
    color: white;
    font-family: 'Ownglyph_ParkDaHyun';
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: rgba(79, 47, 47, 0.83);
        transition: 0.3s;
    }
`;

const Wave1 = styled.div`
    position: absolute;
    bottom: -187vw;
    left: 50%;
    width: 200vw;
    height: 200vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 10000ms infinite linear;
    background: #FFF8E7;
    opacity: 0.5;
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Wave2 = styled.div`
    position: absolute;
    bottom: -187vw;
    left: 50%;
    width: 200vw;
    height: 200vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 13500ms infinite linear;
    opacity: 0.5;
    background: #FFEEC4;
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Wave3 = styled.div`
    position: absolute;
    bottom: -187vw;
    left: 50%;
    width: 200vw;
    height: 200vw;
    margin-left: -100vw;
    border-radius: 40%;
    animation: waveAnimation 11000ms infinite linear;
    opacity: 0.5;
    background: #FFE6AA;
    @keyframes waveAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;