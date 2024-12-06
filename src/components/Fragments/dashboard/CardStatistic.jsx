import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";
import { expensesStatistics } from "../../../data/expenses";

const CardStatistic = () => {
    
    return (
        <Card variant="md:col-span-2 min-h-max" title="Statistics" desc=<BarsDataset desc={expensesStatistics} /> />
    )
}

export default CardStatistic