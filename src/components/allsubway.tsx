import {useEffect, useState} from "react";
import {SubwayInfoPosition, SubwayLine} from "@/types";
import styles from './allsubway.module.scss';
import _ from 'lodash';
import {arrangeLineUpSide} from "@/util";


function lineArrange(line: string): string {
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



async function getPostion(route: string): Promise<SubwayInfoPosition[]> {

    try {
        const result = await fetch(`http://swopenapi.seoul.go.kr/api/subway/${process.env.NEXT_PUBLIC_OPENAPI_SUBWAY_KEY}/json/realtimePosition/0/100/${route}`)
        return result.json();
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
        throw err
    }
}




const AllSubway = ({ list }: { list: SubwayLine[] }) => {

    // console.log(list, 'list')
    // console.log('Client Components allSubway---allsubway.tsx@@@@')
    const route: string = list[0]?.['routNm'];

    const [lineInfo, setLineInfo] = useState<SubwayInfoPosition[]>([])
    const [upLine, setUpLine] = useState<SubwayInfoPosition[]>([])
    const [downLine, setDownLine] = useState<SubwayInfoPosition[]>([])

    async function getPositionLine() {
        const result = await getPostion(lineArrange(route));

        if(result?.errorMessage.status === 200 && result?.errorMessage.total > 0) {
            setLineInfo(result?.realtimePositionList)
        }
    }

    useEffect(() => {
        if(route) {
            getPositionLine()
        }
    }, [route])

    useEffect(() => {
        if(lineInfo.length > 0) {
            setUpLine(_.filter(lineInfo, (item) => arrangeLineUpSide(item, '1')))
            setDownLine(_.filter(lineInfo, (item) => arrangeLineUpSide(item, '0')))
        }
    }, [lineInfo]);


    return (
        <div className={styles['allsubway_wrapper']}>

            <ul className={styles[`selected_${list[0]?.['routNm']}`]}>
                {
                    list?.map((item, idx) => {
                        return (
                            <li key={`subwayCode_${idx}`}>
                                <span>{item?.['stinNm']}</span>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default AllSubway;