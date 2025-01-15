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