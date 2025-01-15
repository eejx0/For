import styled from "styled-components"
import { Header } from "../components/Header"
import { SearchBox } from "../components/SearchBox"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Color } from "../styles/Color"
import { getRecipes } from "../apis/apis"
import { useDebouncedQuery } from "../hooks/useDebouncedQuery"


export const Search: React.FC = () => {
    const location = useLocation();
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const query = new URLSearchParams(location.search).get("query") || "";
    const debouncedQuery = useDebouncedQuery(query, 500);

    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            if (loading) return;

            setLoading(true);

            try {
                const data = await getRecipes(1, 999, debouncedQuery);
                if (Array.isArray(data) && data.length > 0) {
                    setResults(data);
                } else {
                    setResults([]);
                }
            } catch (error) {
                console.error("API 호출 오류: ", error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    return (
        <Wrapper>
            <Header />
            <Content>
                {loading && <Message>로딩 중...</Message>}
                {!loading && results.length === 0 && <Message>검색 결과가 없습니다.</Message>}
                <Container>
                    {results.map((recipe) => (
                        <SearchBox 
                            key={recipe.RCP_SEQ}
                            recipe={recipe}
                        />
                    ))}
                </Container>
            </Content>
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

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 1100px;
    margin-bottom: 50px;
`;

const Message = styled.p`
    margin-top: 50px;
    font-size: 30px;
    color: ${Color.text};
    margin-bottom: 100px;
`;