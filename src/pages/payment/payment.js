import { UnderlinedTabs } from '../../components/tabs'
import SectionTitle from '../../components/section-title'
import {
    NewPay,
} from '../../components/payment/new-payment'
import {
    PayHistory,
} from '../../components/payment/payment-history'
import { UnpaidAs } from '../../components/payment/unpaid-assessment'

const Index = () => {
    return (
        <>
            <div className="w-3/4 flex justify-center">
                <div>
                    <SectionTitle subtitle="Payment" />
                    <div className="flex flex-wrap">
                        <NewPay />
                        <PayHistory />
                        <UnpaidAs />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index
