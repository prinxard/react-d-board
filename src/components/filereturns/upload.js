import { FiAlertTriangle } from 'react-icons/fi';
import { Monthlypayereturns } from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



export const Upload = () => (
    <>
        <SectionTitle subtitle="PAYE Monthly" />
        <Widget description={<span>Upload Schedule</span>}>
            <div className="text-base w-3/4 flex justify-center">
                <div>
                    <p className="mb-4">From the side menu bar – click on File Returns - click on the PAYE Monthly, “Upload” button</p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Monthlypayereturns />
                    </figure>
                    <ul>
                        <li>
                            Click on “DOWNLOAD SAMPLE CSV” for the Monthly PAYE returns <br /> template and fill in the necessary data in the right format.
                        </li>
                        <li>
                            Select year and month
                        </li>
                        <li>
                            Choose the document to be uploaded and click on “submit”
                        </li>
                    </ul>

                    <div>
                        <p className="my-5">
                            <FiAlertTriangle color={'#ffd700'} size={'2.5rem'} />
                        </p>
                        <p><strong> Portal uploads only accepts CSV file formats.</strong></p>
                        <p className="mt-5">Now select the year and month of returns, then click on Select File button and select the remittance document you saved. Click the Submit button to upload the file.</p>
                        <p className="mt-5">If all data entered are in the correct format you should get a success message, if not, the system will throw up error message(s) which will guide you as to where the specific error can be found.</p>
                        <p className="mt-5">The system calculates the tax expected and takes you to the payment log to show pending payment, which is the amount due from the uploaded schedule.</p>
                    </div>
                </div>
            </div>
        </Widget>
    </>
)