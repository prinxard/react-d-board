import { Paynow, Viewuploads } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'

export const View = () => (
    <div id="view">
    
        <Widget>
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <p className="mb-4"><strong>View Schedule</strong></p>
                    <div>
                        <p className="mb-1">From the side menu – click on File Returns - click on
                            PAYE Monthly – click on the View button;
                        </p>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <Viewuploads />
                        </figure>
                    </div>

                    <p className="mb-8 ">
                        Here you can click on a month to view Monthly PAYE returns.
                        This gives in addition to uploaded data, Expected Tax and Variance
                        (net tax paid Vs expected tax)
                    </p>
                    <div>
                        <figure className='filter drop-shadow-xl md:drop-shadow-xl'>
                            <Paynow />
                        </figure>
                        <p className="mb-4">
                            In the view page, you can proceed to make payment or delete an uploaded schedule
                        </p>
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
            </div>

        </Widget>
    </div>
)