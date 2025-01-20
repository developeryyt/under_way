export interface SubwayInfo {
    "beginRow": null | number,
    "endRow": null | number,
    "curPage": null | number,
    "pageRow": null | number,
    "totalCount": number,
    "rowNum": number,
    "selectedCount": number,
    "subwayId": string,
    "subwayNm": null,
    "updnLine": string,
    "trainLineNm": string,
    "subwayHeading": null,
    "statnFid": string,
    "statnTid": string,
    "statnId": string,
    "statnNm": string,
    "trainCo": null | string,
    "trnsitCo": string,
    "ordkey": string,
    "subwayList": string,
    "statnList": string,
    "btrainSttus": string,
    "barvlDt": string,
    "btrainNo": string,
    "bstatnId": string,
    "bstatnNm": string,
    "recptnDt": string,
    "arvlMsg2": string,
    "arvlMsg3": string,
    "arvlCd": string,
    "lstcarAt": string;
}

/*
* lnCd	선코드
* mreaWideCd	권역코드
* railOprIsttCd	철도운영기관코드
* routCd	노선코드
* routNm	노선명
* stinCd	역코드
* stinConsOrdr	역구성순서
* stinNm	역명
* */

export interface SubwayLine {
    "mreaWideCd": string,
    "routCd": string,
    "routNm": string,
    "stinConsOrdr": number,
    "railOprIsttCd": string,
    "lnCd": string,
    "stinCd": string,
    "stinNm": string
}


export enum LineCode {
    S1 = '1호선',
    S2 = '2호선',
    S3 = '3호선',
    S4 = '4호선',
    S5 = '5호선',
    S6 = '6호선',
    S7 = '7호선',
    S8 = '8호선',
    S9 = '9호선',
    D1 = '신분당선',
    A1 = '공항철도',
    E1 = '용인에버라인',
    G1 = '김포골드라인',
    I1 = '인천1호선',
    I2 = '인천2호선',
    K1 = '수인분당',
    K2 = '경춘',
    K4 = '경의중앙',
    K5 = '경강선',
    L1 = '신림선',
    WS = '서해선',
    UI = '우이신설',
    U1 = '의정부경전철',
}