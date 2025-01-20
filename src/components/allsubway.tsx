import {SubwayLine} from "@/types";





const AllSubway = ({ list }: { list: SubwayLine[] }) => {

    console.log(list, 'list')
    console.log('Client Components allSubway---allsubway.tsx@@@@')

    return (
        <div style={{
            height: `calc(100% - 35px)`,
            overflowY: 'auto'
        }}>
            <ul>
                {
                    list?.map((item, idx) => {

                        return (
                            <li key={`subwayCode_${idx}`}>
                                {item?.['stinNm']}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default AllSubway;