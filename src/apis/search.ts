import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const generateKeywords = (name: string): string[] => {
    const words = name.split(/\s+/);
    const keywords = new Set<string>();
  
    words.forEach((word) => {
      for (let i = 1; i <= word.length; i++) {
        keywords.add(word.slice(0, i));
      }
    });
  
    return Array.from(keywords);
  };
  

export const searchRecipes = async (keyword: string) => {
    const keywordArray = generateKeywords(keyword);
    const recipeRef = collection(db, "recipes");

    try {
        const q = query(recipeRef, where("keywords", "array-contains-any", keywordArray));
        const querySnapshot = await getDocs(q);

        const results: any[] = [];
        querySnapshot.forEach((doc) => results.push({id: doc.id, ...doc.data()}))
        return results;
    } catch (error) {
        console.error("검색 실패: ", error);
        return [];
    }
}