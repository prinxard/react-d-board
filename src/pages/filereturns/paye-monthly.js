import { UnderlinedTabs } from '../../components/tabs'
import SectionTitle from '../../components/section-title'
import {
    Upload,
} from '../../components/filereturns/upload'
import {
    View,
} from '../../components/filereturns/view'
import { MonthlyRem } from '../../components/filereturns/pay'
import Widget from '../../components/widget'


const Index = () => {

    return (
        <>
            <Widget>
                <div className="w-4/6 flex justify-center">
                    <div>
                        <SectionTitle subtitle="PAYE Monthly" />
                        <div className="flex flex-wrap">
                            <Upload />
                            <View />
                            <MonthlyRem />
                        </div>
                    </div>
                </div>
            </Widget>
        </>
    )
}
export default Index
