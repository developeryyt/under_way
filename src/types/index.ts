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
    D1 = 'D1',
    A1 = 'A1',
    E1 = 'E1',
    G1 = 'G1',
    I1 = 'I1',
    I2 = 'I2',
    K1 = 'K1',
    K2 = 'K2',
    K4 = 'K4',
    K5 = 'K5',
    L1 = 'L1',
    WS = 'WS',
    UI = 'UI',
    U1 = 'U1',
    S1 = 1,
    S2 = 2,
    S3 = 3,
    S4 = 4,
    S5 = 5,
    S6 = 6,
    S7 = 7,
    S8 = 8,
    S9 = 9,
}