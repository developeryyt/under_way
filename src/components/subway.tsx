import {SubwayInfo} from "@/types";


const NowLocation = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_SUBWAY_API_ADDRESS}/api/subway/${process.env.NEXT_PUBLIC_OPENAPI_SUBWAY_KEY}/json/realtimeStationArrival/0/5/잠실새내`);
    const data = await result.json();
    const info: SubwayInfo[] = data.realtimeArrivalList


    return (
        <div></div>
    )
}



const Subway = () => {
    return (
        <div className=''>
            <NowLocation />
        </div>
    )
}

export default Subway;