import styles from './positionsubway.module.scss';
import {SubwayInfoPosition} from "@/types";
import { IoMdTrain } from "react-icons/io";


const Positionsubway = ({ updown }: { updown: SubwayInfoPosition }) => {

    let status: string = '';
    let statusColor: string = '';

    if(updown.trainSttus === '0') {
        status = '진입'
        statusColor = 'orange';
    }else if(updown.trainSttus === '1') {
        status = '도착'
        statusColor = 'red';
    }else if(updown.trainSttus === '2') {
        status = '출발'
        statusColor = 'green';
    }else {
        status = '전역출발';
        statusColor = 'blue';
    }



    return (
        <div className={styles['subway_box']}>
            <div className={styles['subway_box_inner']}>
                <div className={styles['main']}>
                    <span className={styles['ttl']}>(종점: <b>{updown.statnTnm}역</b>)</span>
                    <span className={styles['trainNo']}>열차번호: {updown.trainNo}</span>
                    <span className={styles['icon']}>
                        <IoMdTrain size={20} color={statusColor} />
                    </span>
                </div>
                <div className={styles['desc']}>
                    <span className=''>{status} {updown.directAt === '1' ? <span>/ 급행</span> : ""}</span>
                </div>
            </div>
        </div>
    );
};

export default Positionsubway;