import { FiAlertTriangle } from 'react-icons/fi';
import {
    AssId,
    Breakdown,
    Browse,
    DelAss,
    Delbtn,
    Deletehrm,
    Pendingassesment,
    Popdel,
    Returns,
    Samplecsv,
    Uploadremit
} from '../../components/Images/Images'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'



const Index = () => (
    <>
        <SectionTitle subtitle="RHM-ATOs Module" />
        <Widget>
            <div className="text-base">
                <p className="mb-4">For administration RHM-ATO module gives access to all the information regarding the various filing done by taxpayers.</p>
                <h4>RETURNS</h4>
                <Returns />

                <p className="my-8 ">To drill down to a particular taxpayer/organisation, click on the name to show details that include; employees, number of months filed, paid tax, expected tax and variance.</p>
                <Breakdown />
                <p className="my-8">DOWNLOAD SAMPLE SCHEDULE TEMPLATE (csv)</p>
                <p className="mb-6">Select sample csv then Click on Download CSV to download the sample CSV template for Monthly Remittance Schedules and fill in the necessary data in the right format.</p>
                <Samplecsv />
                <p className="my-5">UPLOAD SCHEDULE</p>
                <p className="mb-5">To upload monthly remittance schedules – click on Upload Monthly Remittance Schedules. Fill in the Taxpayers Name/KGTIN, select the year and month of returns, now click on OK button.</p>
                <Uploadremit />
                <p className="my-7">Now click on “browse” button and select the month remittance document you saved. Click the “Upload CSV” button to upload the file.</p>
                <Browse />
                <p className="my-7 flex"><span><FiAlertTriangle color={'#ffd700'} size={'2rem'} /></span> <strong>RHM only accepts CSV file formats.</strong></p>
                <p>If all data entered are in the correct format you should get a success message, if not, the system will throw up an error message(s) which will guide you as to where the specific error can be found.</p>

                <h5 className="my-8">PENDING ASSESSMENT</h5>
                <Pendingassesment />
                <p>Click on Pending Assessment – To download and Print the generated assessment to take to the bank for payment.</p>

                <h5 className="my-8">DELETE ASSESSMENT</h5>
                <p className="my-8">Click on “Delete monthly remittance” from the returns menu.</p>\
                <Deletehrm />
                <p className="my-8">Copy the Assessment ID on the pending assessment generated. (You can only delete schedules uploaded by you).</p>
                <DelAss />
                <p className="my-8">Enter the assessment ID in the form below and click on the suggestion if it equals assessment ID entered.</p>
                <AssId />
                <p className="my-8">The rest of the field populates automatically. Then click on “Delete assessment”</p>
                <Delbtn />
                <p className="mt-7">Confirm the delete by clicking ok.</p>
                <Popdel />

            </div>

        </Widget>
    </>
)
export default Index