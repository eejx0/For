import styled from "styled-components"
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";
import { RecipeItem } from "../apis/type";

interface SearchBoxProps {
    recipe: RecipeItem
}

export const SearchBox: React.FC<SearchBoxProps> = ({recipe}) => {
    return (
        <Wrapper>
            <Link to={`/detail/${recipe.RCP_SEQ}`}>
                <Image style={{backgroundImage: `url(${recipe.ATT_FILE_NO_MAIN})`}}/>
            </Link>
            <TextWrapper>
                <Link to={`/detail/${recipe.RCP_SEQ}`}>
                    <Name>{recipe.RCP_NM}</Name>
                </Link>
                <TagWrapper>
                    <CookKind>{recipe.RCP_PAT2}</CookKind>
                    <HashTag>{recipe.HASH_TAG}</HashTag>
                    <CookMethod>{recipe.RCP_WAY2}</CookMethod>
                </TagWrapper>
                <CookInformation>열량: {recipe.INFO_ENG}, 탄수화물: {recipe.INFO_CAR}, 단백질: {recipe.INFO_PRO}, 지방: {recipe.INFO_FAT}, 나트륨: {recipe.INFO_NA}</CookInformation>
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