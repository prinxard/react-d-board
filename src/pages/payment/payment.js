import { UnderlinedTabs } from '../../components/tabs'
import SectionTitle from '../../components/section-title'
import {
    NewPay,
} from '../../components/payment/new-payment'
import {
    PayHistory,
} from '../../components/payment/payment-history'
import { UnpaidAs } from '../../components/payment/unpaid-assessment'


const NewPaymentTab = () => (
    <div className="w-full">
        <NewPay />
    </div>
)

const PaymentHistoryTab = () => (
    <div className="w-full">
        <PayHistory />
    </div>
)
const UnpaidTab = () => (
    <div className="w-full">
        <UnpaidAs />
    </div>
)



const Index = () => {
    const tabs = [
        { index: 0, title: 'New Payment', content: <NewPaymentTab /> },
        { index: 1, title: 'Payment History', content: <PaymentHistoryTab /> },
        { index: 2, title: 'Unpaid Assessment', content: <UnpaidTab /> },
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
