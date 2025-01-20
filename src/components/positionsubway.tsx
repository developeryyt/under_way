import {SubwayInfoPosition} from "@/types";
import {useEffect} from "react";


async function getPostion(route: string): Promise<SubwayInfoPosition[]> {
    try {
        const result = await fetch(`http://swopenapi.seoul.go.kr/api/subway/${process.env.NEXT_PUBLIC_OPENAPI_SUBWAY_KEY}/json/realtimePosition/0/5/${route}`)
        return result.json();
    }catch(err) {
        if(err instanceof Error) throw new Error(err.message)
        throw err
    }
}


const Positionsubway = ({ routeName }: { routeName: string }) => {

    console.log(routeName)

    async function getPositionLine() {
        const result = await getPostion(routeName);
        console.log(result, '역 정보')


    }

    useEffect(() => {
        if(routeName) {
            getPositionLine()
        }
    }, [routeName])


    return (
        <div>

        </div>
    );
};

export default Positionsubway;