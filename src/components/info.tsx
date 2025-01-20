'use client';
import Selectc from "@/components/form/selectc";
import {useCallback, useEffect, useState} from "react";
import AllSubway from "@/components/allsubway";
import {LineCode, SubwayLine} from "@/types";


export type Line = string;
interface SubwayLineHeader {
    resultCnt: number;
    resultCode: string;
    resultMsg: string;
}

async function getData(line: [string, string][]): Promise<SubwayLine[] | undefined>{

    if(!line.length > 0) return;

    let str: string = ''
    switch(line[0][0]) {
        case 'S1':
        case 'S2':
        case 'S3':
        case 'S4':
        case 'S5':
        case 'S6':
        case 'S7':
        case 'S8':
        case 'S9':
             str = line[0][0].split('')[1]
    }

    try{
        const result = await fetch(`${process.env.NEXT_PUBLIC_KRIC_API_ADDRESS}?serviceKey=${process.env.NEXT_PUBLIC_KRIC_API_KEY}&format=json&mreaWideCd=01&lnCd=${str.length > 0 ? str : line[0][0]}`, { cache: 'force-cache' });
        const { body, header }: { body: SubwayLine[], header: SubwayLineHeader } = await result.json();

        if(header.resultCode !== '00') throw new Error(header.resultMsg)

        return body
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
        throw err;
    }
}




const Info = () => {


    const [line, setLine] = useState<Line>('')
    const [list, setList] = useState<SubwayLine[]>([])

    const changeLineHandler = useCallback(
        (param: string) => {
            setLine(param);
        }, [line]);

    async function getSubwayLine() {
        const result = await getData(Object.entries(LineCode).filter(item => item.includes(line)))

        if(result.length > 0) {
            setList(result)
        }
    }

    useEffect(() => {
        if(line) {
            getSubwayLine()
        }
    }, [line])


    return (
        <div style={{
            height: '100%'
        }}>
            <Selectc line={line} handler={changeLineHandler}/>
            {line.length > 0 && <AllSubway list={list} />}
        </div>
    );
};

export default Info;