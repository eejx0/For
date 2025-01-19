import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color"
import Sample1 from "../assets/Sample1.svg";
import { Link, useParams } from "react-router-dom";
import { getRecipeDetail } from "../apis/apis";
import { useEffect, useState } from "react";

export const Detail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchRecipeDetail = async () => {
            try {
                setLoading(true);
                const data = await getRecipeDetail(1, 999, id);
                setRecipe(data);
            } catch (error) {
                console.error("레시피 상세보기를 불러오는데 오류 발생: ", error);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchRecipeDetail();
        }
    }, [id])

    if (loading) return <Message>로딩 중...</Message>;

    return (
        <>
            <Header />
            <Wrapper>
                <Name>{recipe.RCP_NM}</Name>
                <Image style={{backgroundImage: `url(${recipe.ATT_FILE_NO_MK})`}}/>
                <IngredientTitle>- 재료 -</IngredientTitle>
                <Ingredients>{recipe.RCP_PARTS_DTLS}</Ingredients>
                <StyledLink to={`/recipe/${recipe.RCP_SEQ}`}>
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

const Message = styled.p`
    margin-top: 50px;
    font-size: 30px;
    color: ${Color.text};
    margin-bottom: 100px;
`;