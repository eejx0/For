import instance from './axios'
import { RecipeItem } from './type'

const keyId = process.env.REACT_APP_KEY_ID
const serviceId =  process.env.REACT_APP_SERVICE_ID
const base = process.env.REACT_APP_BASE_URL
const dataType = 'json'

export const getRecipeList = async (
  startIdx: number,
  endIdx: number,
  RCP_NM?: string,
  RCP_PARTS_DTLS?: string,
  CHNG_DT?: string,
  RCP_PAT2?: string
) => {
  try {
    const baseUrl = `${base}/${keyId}/${serviceId}/${dataType}/${startIdx}/${endIdx}`

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
          MSG: string
          CODE: string
        }
        row: RecipeItem[]
      }
    }>(requestUrl)

    const recipes = response.data.COOKRCP01.row

    if (RCP_NM) {
      const decodedRcpNm = decodeURIComponent(RCP_NM)
      const filteredRecipes = recipes.filter(
        (recipe) => recipe.RCP_NM && recipe.RCP_NM.includes(decodedRcpNm)
      )
      return filteredRecipes
    }

    return recipes
  } catch (error) {
    console.error('레시피 리스트 불러오기 실패: ', error)
  }
}

export const getRealRecipe = async (
  startIdx: number,
  endIdx: number,
  RCP_SEQ?: string
) => {
  try {
    const baseUrl = `${base}/${keyId}/${serviceId}/${dataType}`

    const requestUrl = RCP_SEQ
      ? `${baseUrl}/${startIdx}/${endIdx}/RCP_SEQ=${encodeURIComponent(RCP_SEQ)}`
      : `${baseUrl}/${startIdx}/${endIdx}`

    const response = await instance.get(requestUrl);
    const items = response.data?.foodsafetykorea?.response?.body?.items?.item;
    if (items) {
      return items;
    }
  } catch (error) {
    console.error("레시피 불러오기 실패: ", error);
  }
}

export const getRecipeDetail = async (
  startIdx: number,
  endIdx: number,
  RCP_SEQ?: string
) => {
  try {
    const baseUrl = `${base}/${keyId}/${serviceId}/${dataType}`

    const requestUrl = RCP_SEQ
      ? `${baseUrl}/${startIdx}/${endIdx}/RCP_SEQ=${encodeURIComponent(RCP_SEQ)}`
      : `${baseUrl}/${startIdx}/${endIdx}`

    const response = await instance.get<{
      COOKRCP01: {
        RESULT: {
          MSG: string
          CODE: string
        }
        row: RecipeItem[]
      }
    }>(requestUrl)

    const { row } = response.data.COOKRCP01

    const recipe = row.find(item => item.RCP_SEQ === RCP_SEQ)

    return recipe
  } catch (error) {
    console.error('레시피 상세 정보 불러오기 실패: ', error)
  }
}
