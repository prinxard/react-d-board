import { UnderlinedTabs } from '../../components/tabs'
import SectionTitle from '../../components/section-title'
import {
    Upload,
} from '../../components/filereturns/upload'
import {
    View,
} from '../../components/filereturns/view'
import { MonthlyRem } from '../../components/filereturns/pay'


const Index = () => {

    return (
        <>
            <SectionTitle subtitle="PAYE Monthly" />
            <div className="flex flex-wrap">
                <Upload />
                <View />
                <MonthlyRem />
            </div>
        </>
    )
}
export default Index
