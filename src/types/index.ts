export interface SubwayInfoTime {
    beginRow: null | number;
    endRow: null | number;
    curPage: null | number;
    pageRow: null | number;
    totalCount: number;
    rowNum: number;
    selectedCount: number;
    subwayId: string;
    subwayNm: null;
    updnLine: string;
    trainLineNm: string;
    subwayHeading: null;
    statnFid: string;
    statnTid: string;
    statnId: string;
    statnNm: string;
    trainCo: null | string;
    trnsitCo: string;
    ordkey: string;
    subwayList: string;
    statnList: string;
    btrainSttus: string;
    barvlDt: string;
    btrainNo: string;
    bstatnId: string;
    bstatnNm: string;
    recptnDt: string;
    arvlMsg2: string;
    arvlMsg3: string;
    arvlCd: string;
    lstcarAt: string;
}

/*
* subwayNm 지하철호선명
* subwayId 지하철호선ID
* (1001:1호선, 1002:2호선, 1003:3호선, 1004:4호선, 1005:5호선 1006:6호선, 1007:7호선, 1008:8호선, 1009:9호선, 1063:경의중앙선, 1065:공항철도, 1067:경춘선, 1075:수인분당선 1077:신분당선, 1092:우이신설선, 1032:GTX-A)
*
* statnNm 지하철역명
* lastRecptnDt 최종수신날짜
* recptnDt 최종수신시간
* updnLine 상/하행선
* statnTid 종착지하철역 ID
* statnTnm 종착지하철역명
* trainSttus 열차상태구분 (0:진입, 1:도착, 2:출발, 3: 전역출발)
* directAt 급행여부 (1: 급행, 2: 아님, 7:특급)
* lstcarAt 막차여부 (1: 막차, 0: 아님)
* */

export interface SubwayInfoPosition {
    beginRow: null;
    endRow: null;
    curPage: null;
    pageRow: null;
    totalCount: number;
    rowNum: number;
    selectedCount: number;
    subwayId: string;
    subwayNm: string;
    statnId: string;
    statnNm: string;
    trainNo: string;
    lastRecptnDt: string;
    recptnDt: string;
    updnLine: string;
    statnTid: string;
    statnTnm: string;
    trainSttus: string;
    directAt: string;
    lstcarAt: string
}


export interface MessageInfo {
    code: string;
    developerMessage: string;
    link: string;
    message: string;
    status: number;
    total: number;
}

/**
 * lnCd	선코드
 * mreaWideCd	권역코드
 * railOprIsttCd	철도운영기관코드
 * routCd	노선코드
 * routNm	노선명
 * stinCd	역코드
 * stinConsOrdr	역구성순서
 * stinNm	역명
 */

export interface SubwayLine {
    mreaWideCd: string;
    routCd: string;
    routNm: string;
    stinConsOrdr: number;
    railOprIsttCd: string;
    lnCd: string;
    stinCd: string;
    stinNm: string;
}

//( 1061:중앙선,, 1093:서해선, 1081:경강선,)
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
    D1 = '신분당선', //신분당
    A1 = '공항철도', //공항
    K1 = '수인분당', // 수인분당
    K2 = '경춘', // 경춘
    L1 = '신림선', //신림선
    UI = '우이신설', //우이신설
}


export type Line = {
    [key: string]: string
}

/*
U1 = '의정부경전철' //의정부
G1 = '김포골드라인',
I1 = '인천1호선',
I2 = '인천2호선',
E1 = '용인에버라인',
K4 = '경의중앙',
K5 = '경강선',
WS = '서해선',
*/
