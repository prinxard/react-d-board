import { Paynow, Viewuploads } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'

export const View = () => (
    <>
        <SectionTitle subtitle="PAYE Monthly" />
        <Widget description={<span>View Schedule</span>}>
            <div className="text-base bg-grey-50">
                <p className="mb-4">From the side menu – click on File Returns - click on PAYE Monthly – click on the View button;</p>
                <Viewuploads />
                <p className="my-8 ">Here you can select a month to view Monthly PAYE returns. This gives in addition to <br /> uploaded data, Expected Tax and Variance (net tax paid Vs expected tax)</p>
                <Paynow />
                <ul>
                    <li>
                        Click on “Pay Now” to proceed with payments.
                    </li>
                    <li>
                    Click on “Delete” to delete the upload if there is an error with the uploaded schedule.
                    </li>
                </ul>

            </div>

        </Widget>
    </>
)