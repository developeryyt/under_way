import Info from "@/components/info";


// async function GetSubWayTotal() {
//     const lineArr = ['D1', 'A1', 'E1', 'G1', 'I1', 'I2', 'K1', 'K2', 'K4', 'K5', 'L1', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'WS', 'UI', 'U1']
//     const results = await promiseHandler(lineArr.map(line => getSubWayLineAll(line)));
//     const FINAL_RESULT = results?.map((result) => result.value.body)
//     console.log(FINAL_RESULT, 'final')
//     return (
//         <div>
//             ddd
//         </div>
//     )
// }


const page = () => {

    return (
        <>
            <Info />
        </>
    );
};

export default page;