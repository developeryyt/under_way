

const NowLocation = async () => {
    const result = await fetch(`http://swopenapi.seoul.go.kr/api/subway/5653466f4e7965743433734c48504e/json/realtimeStationArrival/0/5/서울`);
    const data = await result.json();


    return (
        <div></div>
    )
}



const Subway = () => {
    return (
        <div>
            <NowLocation />
        </div>
    )
}

export default Subway;