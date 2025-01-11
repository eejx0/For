import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color"
import Sample1 from "../assets/Sample1.svg";
import Sample2 from "../assets/Sample2.svg";
import Sample3 from "../assets/Sample3.svg";
import Sample4 from "../assets/Sample4.svg";
import Sample5 from "../assets/Sample5.svg";

export const Home = () => {
    const Images = [
        {img: Sample1, key: 1},
        {img: Sample2, key: 2},
        {img: Sample3, key: 3},
        {img: Sample4, key: 4},
        {img: Sample5, key: 5}
    ];
    return (
        <>
            <Header />
            <Wrapper>
                <p>오늘은 뭐 먹지?</p>
                <PictureWrapper>
                    {Images.map((image) => (
                        <div key={image.key} style={{ backgroundImage: `url(${image.img})` }} />
                    ))}
                </PictureWrapper>
                <Wave3></Wave3>
                <Wave2></Wave2>
                <Wave1></Wave1>
                <Button>오늘의 메뉴 보기</Button>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    > p {
        margin-top: 66px;
        font-size: 40px;
        color: ${Color.text};
    }
`;


const PictureWrapper = styled.div`
    display: flex;
    gap: 50px;
    margin-top: 50px;
    z-index: 100;
    > div {
        width: 384px;
        height: 202px;
        border-radius: 30px;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center center;
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

const Button = styled.button`
    margin-top: 100px;
    width: 286px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background-color: ${Color.text};
    z-index: 900;
    color: white;
    font-family: 'Ownglyph_ParkDaHyun';
    font-size: 25px;
    cursor: pointer;
    &:hover {
        background-color: rgba(79, 47, 47, 0.83);
        transition: 0.3s;
    }
`;