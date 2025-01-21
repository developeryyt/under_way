import {SubwayInfoPosition} from "@/types";
import { IoMdTrain } from "react-icons/io";


const Positionsubway = ({ updown }: { updown: SubwayInfoPosition }) => {

    let status: string = '';

    if(updown.trainSttus === '0') {
        status = '진입'
    }else if(updown.trainSttus === '1') {
        status = '도착'
    }else if(updown.trainSttus === '2') {
        status = '출발'
    }else {
        status = '전역출발'
    }



    return (
        <div className='subway_box'>
            <div className='subway_box_inner'>
                <div className='subway_box_inner_icon'>
                    <span>(종점: {updown.statnTnm}행 / 열차번호: {updown.trainNo})</span>
                    <span>
                        <IoMdTrain />
                    </span>
                </div>
                <div className='subway_box_inner_text'>
                    <p>{status}</p>
                    <p>
                        {updown.directAt === '1' ? '급행' : ""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Positionsubway;