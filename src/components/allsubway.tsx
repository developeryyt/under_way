import {SubwayLine} from "@/types";
import styles from './allsubway.module.scss';




const AllSubway = ({ list }: { list: SubwayLine[] }) => {

    console.log(list, 'list')
    console.log('Client Components allSubway---allsubway.tsx@@@@')

    return (
        <div className={styles['allsubway_wrapper']}>
            <div></div>
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
            <div></div>
        </div>
    );
};

export default AllSubway;