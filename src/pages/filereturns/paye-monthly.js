import { UnderlinedTabs } from '../../components/tabs'
import SectionTitle from '../../components/section-title'
import {
    Upload,
} from '../../components/filereturns/upload'
import {
    View,
} from '../../components/filereturns/view'
import { MonthlyRem } from '../../components/filereturns/pay'


const UploadTab = () => (
    <div className="w-full">
        <Upload />
    </div>
)

const ViewTab = () => (
    <div className="w-full">
        <View />
    </div>
)
const PayTab = () => (
    <div className="w-full">
        <MonthlyRem />
    </div>
)



const Index = () => {
    const tabs = [
        { index: 1, title: 'Upload', content: <UploadTab /> },
        { index: 2, title: 'View', content: <ViewTab /> },
        { index: 0, title: 'Pay', content: <PayTab /> },
    ]
    return (
        <>
            <SectionTitle subtitle="Payment" />
            <div className="flex flex-wrap">
                <div className="w-full">
                    <UnderlinedTabs tabs={tabs} />
                </div>
            </div>
        </>
    )
}
export default Index
