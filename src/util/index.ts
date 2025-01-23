import {Line, SubwayInfoPosition} from "@/types";


export async function promiseHandler(logics: object[]):  Promise<PromiseSettledResult<object>[]> {
    try {
        return await Promise.allSettled(logics)
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
        throw err;
    }
}


export function arrangeLineUpSide(item: SubwayInfoPosition, condition: unknown): boolean {
    return item.updnLine === condition
}


export function lineArrange(line: string): string {
    let str = '';

    switch(line) {
        case '신분당':
        case '수인분당':
        case '경춘':
        case '우이신설':
            str = `${line}선`;
            return str;

        case '공항':
            str = '공항철도';
            return str;

        default:
            return line;
    }

}

/*
* D1 :: 신분당선
* A1 :: 공항철도
* E1 :: 용인에버라인
* G1 :: 김포골드라인
* I1 :: 인천 1호선
* I2 :: 인천 1호선
* K1 :: 수인분당
* K2 :: 경춘
* k4 :: 경의중앙
* K5 :: 경강선
* L1 :: 신림선
* 1 ~ 9 :: 1호선
* WS :: 서해선
* UI :: 우이신설
* U1 :: 의정부경전철
* */

export async function getSubWayLineAll(line: string) {
    try {
        const results = await fetch(`${process.env.NEXT_PUBLIC_KRIC_API_ADDRESS}?serviceKey=${process.env.NEXT_PUBLIC_KRIC_API_KEY}&format=json&mreaWideCd=01&lnCd=${line}`, { cache: 'force-cache' });
        return results.json()
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
    }
}