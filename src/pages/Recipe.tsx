import { Header } from "../components/Header"
import styled from "styled-components"
import { Color } from "../styles/Color";
import { RecipeItem } from "../apis/type";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoPicture from "../assets/NoPicture.svg";
import { getRecipeDetail } from "../apis/apis";

export const Recipe = () => {
    const [recipe, setRecipe] = useState<RecipeItem | null>(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                const data = await getRecipeDetail(1, 999, id);
                if (data) {
                    setRecipe(data);
                } else {
                    console.error("레시피가 없습니다.");
                }
            } catch (error) {
                console.error("레시피 불러오기 실패: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id]);

    if (loading) return <Message>로딩 중...</Message>
    if (!recipe) return <Message>레시피를 찾을 수 없습니다.</Message>;

    return (
        <Wrapper>
            <Header />
            <Container>
            {Array.from({ length: 20 }).map((_, index) => {
                    const stepNumber = index + 1;
                    const manualKey = `MANUAL${stepNumber.toString().padStart(2, "0")}` as keyof RecipeItem;
                    const manualImgKey = `MANUAL_IMG${stepNumber.toString().padStart(2, "0")}` as keyof RecipeItem;

                    const manualText = recipe[manualKey];
                    const manualImg = recipe[manualImgKey];

                    if (manualText || manualImg) {
                        return (
                            <RecipeBox key={stepNumber}>
                                <img src={manualImg || NoPicture} alt="레시피" />
                                <p>{manualText}</p>
                            </RecipeBox>
                        );
                    }

                    return null; 
                })}
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

const Message = styled.p`
    display: flex;
    width: 100vw;
    height: 100vh;
    font-size: 30px;
    color: ${Color.text};
    align-items: center;
    justify-content: center;
`;