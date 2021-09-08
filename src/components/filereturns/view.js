import { Paynow, Viewuploads } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'

export const View = () => (
    <>
        <SectionTitle subtitle="PAYE Monthly" />
        <Widget description={<span>View Schedule</span>}>
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <div>
                        <p className="mb-4">From the side menu – click on File Returns - click on
                            PAYE Monthly – click on the View button;
                        </p>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Viewuploads />
                        </figure>
                    </div>

                    <p className="my-8 ">Here you can select a month to view Monthly PAYE returns.
                        This gives in addition to uploaded data, Expected Tax and Variance
                        (net tax paid Vs expected tax)
                    </p>
                    <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                        <Paynow />
                    </figure>
                    <ul>
                        <li>
                            Click on “Pay Now” to proceed with payments.
                        </li>
                        <li>
                            Click on “Delete” to delete the upload if there is an error with the uploaded schedule.
                        </li>
                    </ul>
                </div>
            </div>

        </Widget>
    </>
)