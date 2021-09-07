import { AssessReciept, Choosebank, Downloadsteps, Interswitchpay, Paymentreciept, Paynowimg, Payynow, Recipt2, Selectmethod, Unpaidassessment } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



export const UnpaidAs = () => (
    <>
        <SectionTitle subtitle="Payments" />
        <Widget description={<span>Unpaid Assessment</span>}>
            <div className="text-base bg-grey-50">
                <p className="mb-4">This provides users with a view of all pending assessments.  Payments <br /> can be  initiated and completed by clicking on a particular assessment.</p>
                <Unpaidassessment />
            </div>
        </Widget>
    </>
)
