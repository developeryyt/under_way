import {SubwayInfoPosition, SubwayLine} from "@/types";
import styles from './allsubway.module.scss';
import {useEffect} from "react";


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

    async function getPositionLine() {
        const result = await getPostion(lineArrange(route));
        console.log(result, '역 정보')
    }

    useEffect(() => {
        if(route) {
            getPositionLine()
        }
    }, [route])


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