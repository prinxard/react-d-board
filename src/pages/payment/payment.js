import SectionTitle from '../../components/section-title'
import {
    NewPay,
} from '../../components/payment/new-payment'
import {
    PayHistory,
} from '../../components/payment/payment-history'
import { UnpaidAs } from '../../components/payment/unpaid-assessment'
import Widget from '../../components/widget'


const Index = () => {
    return (
        <>
            <Widget>
                <div className="w-4/6 flex justify-center">
                    <div>
                        <SectionTitle subtitle="Payment" />
                        <div className="flex flex-wrap">
                            <NewPay />
                            <PayHistory />
                            <UnpaidAs />
                        </div>
                    </div>
                </div>
            </Widget>
        </>
    )
}
export default Index
