import { useParams } from "react-router";

interface RouteParams {
    coinId: string;
}

function Coin() {
    const { coinId } = useParams<RouteParams['coinId']>();
    return <h1>Coin: {coinId}</h1>;
}
export default Coin;