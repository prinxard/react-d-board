import { FiAlertTriangle } from 'react-icons/fi';
import { Monthlypayereturns, MonthlyRemittance } from '../../components/Images/Images'

export const Upload = () => (
    <div id="upload"> 
            <div className="text-base">
                <div>
                    <p className="mb-4"><strong>Upload Schedule</strong></p>
                    <p className="mb-1">From the side menu bar – click on File Returns -
                        click on the PAYE Monthly, “Upload” button
                    </p>
                    <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                        <Monthlypayereturns />
                    </figure>
                    <p>
                        To get the required template for filing monthly PAYE returns, click on <em>dowmload sample CSV</em>,
                        sample data is provided for download. Delete sample data provided and save your own data as CSV
                    </p>

                    <div>
                        <p className="my-5">
                            <FiAlertTriangle color={'#FFA500'} size={'2.5rem'} />
                        </p>
                        <p><strong> Portal uploads only accepts CSV file formats.</strong></p>
                        <p className="mt-8">
                            Now select the year <sup> (1) </sup> and month <sup> (2) </sup> of returns, then click on Select
                            File button <sup> (3) </sup> and select the schedule document you saved. Click the Submit <sup> (4) </sup>  button
                            to upload the file.
                        </p>
                        <figure className="filter drop-shadow-xl md:drop-shadow-xl">
                            <MonthlyRemittance />
                        </figure>
                        <p className="mt-1">
                            If all data entered are in the correct format you should
                            get a success message. <br /> if not, the system will throw up error message(s)
                            indicating rows and columns
                            where the specific error can be found.
                        </p>
                        <p>
                            The system computes the tax expected and redirects you to a page where you can view the uploaded schedule
                        </p>
                    </div>
                </div>
            </div>
    </div>
)