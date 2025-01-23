import {useEffect, useState} from "react";
import {MessageInfo, SubwayInfoPosition, SubwayLine} from "@/types";
import styles from './allsubway.module.scss';
import _ from 'lodash';
import {arrangeLineUpSide, lineArrange} from "@/util";
import Positionsubway from "@/components/positionsubway";

interface Sub {
    errorMessage: MessageInfo;
    realtimePositionList: SubwayInfoPosition[];
}

async function getPostion(route: string): Promise<Sub> {
    try {
        const result = await fetch(`http://swopenapi.seoul.go.kr/api/subway/${process.env.NEXT_PUBLIC_OPENAPI_SUBWAY_KEY}/json/realtimePosition/0/100/${route}`)
        return result.json();
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
        throw err
    }
}


const AllSubway = ({ list }: { list: SubwayLine[] }) => {

    const route: string = list[0]?.['routNm'];

    const [lineInfo, setLineInfo] = useState<SubwayInfoPosition[]>([])
    const [upLine, setUpLine] = useState<SubwayInfoPosition[]>([])
    const [downLine, setDownLine] = useState<SubwayInfoPosition[]>([])

    async function getPositionLine() {
        const result = await getPostion(lineArrange(route));

        if(result.errorMessage.status === 200 && result.errorMessage.total > 0) {
            setLineInfo(result.realtimePositionList)
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
                        const str: string = (item.stinNm).replace(/\(/g, "\n(");
                        return (
                            <li key={`subwayCode_${idx}`}>
                                <div className={styles['inner']}>
                                    <div>
                                        {
                                            upLine.map((list, idx) => {
                                                if(list.statnNm === item.stinNm) {
                                                    return <Positionsubway key={`train_up_${idx}`} updown={list} />
                                                }
                                                return null
                                            })
                                        }
                                    </div>
                                    <span className={styles['lineName']}>{str}</span>
                                    <div>
                                        {
                                            downLine.map((list, idx) => {
                                                if(list.statnNm === item.stinNm) {
                                                    return <Positionsubway key={`train_down_${idx}`} updown={list} />
                                                }
                                                return null
                                            })
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default AllSubway;