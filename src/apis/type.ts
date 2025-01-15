export interface RecipeItem {
    RCP_SEQ: string; // 일련번호
    RCP_NM: string; // 메뉴명
    RCP_WAY2: string; // 조리방법
    RCP_PAT2: string; // 요리종류
    INFO_WGT: string; // 중량(1인분)
    INFO_ENG: string; // 열량
    INFO_CAR: string; // 탄수화물
    INFO_PRO: string; // 단백질
    INFO_FAT: string; // 지방
    INFO_NA: string; // 나트륨
    HASH_TAG: string; // 해쉬태그
    ATT_FILE_NO_MAIN: string; // 이미지경로 (소)
    ATT_FILE_NO_MK: string; // 이미지경로 (대)
    RCP_PARTS_DTLS: string; // 재료정보
    MANUAL01: string; // 만드는법 1
    MANUAL_IMG01: string; // 만드는 법 이미지 1
    MANUAL02: string;
    MANUAL_IMG02: string;
    MANUAL03: string;
    MANUAL_IMG03: string;
    MANUAL04: string;
    MANUAL_IMG04: string;
    MANUAL05: string;
    MANUAL_IMG05: string;
    MANUAL06: string;
    MANUAL_IMG06: string;
    MANUAL07: string;
    MANUAL_IMG07: string;
    MANUAL08: string;
    MANUAL_IMG08: string;
    MANUAL09: string;
    MANUAL_IMG09: string;
    MANUAL10: string;
    MANUAL_IMG10: string;
    MANUAL11: string;
    MANUAL_IMG11: string;
    MANUAL12: string;
    MANUAL_IMG12: string;
    MANUAL13: string;
    MANUAL_IMG13: string;
    MANUAL14: string;
    MANUAL_IMG14: string;
    MANUAL15: string;
    MANUAL_IMG15: string;
    MANUAL16: string;
    MANUAL_IMG16: string;
    MANUAL17: string;
    MANUAL_IMG17: string;
    MANUAL18: string;
    MANUAL_IMG18: string;
    MANUAL19: string;
    MANUAL_IMG19: string;
    MANUAL20: string;
    MANUAL_IMG20: string;
}

export interface RecipeResponse {
    foodsafetyKorea: {
      response: {
        body: {
          items: {
            item: RecipeItem[]; // 레시피 아이템 배열
          };
        };
      };
    };
  }



export interface RequestItem {
    keyId: string; // 인증키
    serviceId: string; // 서비스명
    dataType: string; // 요청파일 타입
    startIdx: string; // 요청시작위치
    endIdx: string; // 요청종료위치
    RCP_NM: string; // 메뉴명
    RCP_PARTS_DTLS: string; // 재료정보 1
    CHNG_DT: string; // 변경일자
    RCP_PAT2: string; // 요리종류
}