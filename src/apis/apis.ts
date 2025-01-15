import instance from './axios'
// import { RequestItem } from "./type";
import { RecipeItem } from './type'
import { RecipeResponse } from './type'

export const getRecipes = async (
  startIdx: number,
  endIdx: number,
  RCP_NM?: string,
  RCP_PARTS_DTLS?: string,
  CHNG_DT?: string,
  RCP_PAT2?: string
) => {
  try {
    const keyId = 'f6c6e5d7b1454196a082'
    const serviceId = 'COOKRCP01'
    const dataType = 'json'
    const baseUrl = `http://openapi.foodsafetykorea.go.kr/api/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`

    const params: Record<string, string> = {}
    if (RCP_NM) params.RCP_NM = encodeURIComponent(RCP_NM)
    if (RCP_PARTS_DTLS)
      params.RCP_PARTS_DTLS = encodeURIComponent(RCP_PARTS_DTLS)
    if (CHNG_DT) params.CHNG_DT = encodeURIComponent(CHNG_DT)
    if (RCP_PAT2) params.RCP_PAT2 = encodeURIComponent(RCP_PAT2)

    const queryString = new URLSearchParams(params).toString()
    const requestUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl

    const response = await instance.get<{
        COOKRCP01: {
          RESULT: {
            MSG: string;
            CODE: string;
          };
          row: RecipeItem[]; 
        }
      }>(requestUrl)

    if (!response || !response.data || !response.data.COOKRCP01) {
        console.error('API 응답이 유효하지 않습니다.');
        return []
    }

    const recipes = response.data.COOKRCP01.row

    if (RCP_NM) {
        const decodedRcpNm = decodeURIComponent(RCP_NM) // 디코딩
        const filteredRecipes = recipes.filter(recipe =>
          recipe.RCP_NM && recipe.RCP_NM.includes(decodedRcpNm) // 디코딩된 값으로 필터링
        )
        return filteredRecipes
    }

    return recipes
  } catch (error) {
    console.error('레시피 데이터 불러오기 실패: ', error)
    throw error
  }
}