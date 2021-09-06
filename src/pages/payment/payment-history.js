import { NewPayment, Paymentconfirmation, Paymenthistory } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



const Index = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Payment History</span>}>
            <div className="text-base bg-grey-50">
                <p>This provides users with a view of payment status over time.</p>
                <Paymenthistory />
               
            </div>

        </Widget>
    </>
)
export default Index