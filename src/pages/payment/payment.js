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
            <SectionTitle subtitle="Payment" />
            <div className="flex flex-wrap">
                <NewPay />
                <PayHistory />
                <UnpaidAs />
            </div>
        </>
    )
}
export default Index
