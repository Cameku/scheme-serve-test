import React, { useRef, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { ApiHelper } from '../apiHelper/ApiHelper'
import { CrimeDataResponseType, PostCodeDataType } from '../type';
import NotFound from './NotFound';
import CrimeTable from '../components/CrimeTable';
import { RegexHelper } from '../apiHelper/RegexHelper';


const Home = () => {
    const searchTerm2 = useRef('');

    const [errorMessage, setErrorMessage] = useState("");
    const [crimeData, setCrimeData] = useState<CrimeDataResponseType[]>([]);


    const apiDataHelper = new ApiHelper();
    const regexHelper = new RegexHelper();

    const getPostCodeDataAsync = async (postcode: string): Promise<PostCodeDataType> => {
        const response = await apiDataHelper.getApiPostCodeDataAsync(postcode);
        console.log(response);
        return response.data;
    }

    const getCrimeDataAsync = async (postCodeData: PostCodeDataType) => {
        const responses = await apiDataHelper.getCrimeApiDataAsync(postCodeData.latitude, postCodeData.longitude);
        return responses;
    }

    const searchPostCode = async (searchTerm: string) => {
        try {
            let isValid = regexHelper.isValidPostCode(searchTerm);
            if (!isValid) {
                // toastify
                setErrorMessage("Invalid Postcode");
                return;
            }
            const searchedPostCode = await getPostCodeDataAsync(searchTerm);
           
            const getsearchPostCode = await getCrimeDataAsync(searchedPostCode);
            setCrimeData(getsearchPostCode);

        } catch (error) {
            let exception = (error as Error);
            setErrorMessage(exception.message);
        }
    }

    const handleSubmit = async (event: any) => {
        setErrorMessage("");
        setCrimeData([]);
        event.preventDefault();
        await searchPostCode(searchTerm2.current);
    };

    return (
        <div>
            <h1>Search Crime Data By Post Code</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group >
                    <InputGroup className="mb-3" >
                        <Form.Control
                            type='text'
                            className='inputBox'
                            placeholder="Please type in the post code"
                            aria-label="Post code"
                            onChange={(e) => searchTerm2.current = e.target.value}
                        />
                        <button type="submit" className='btn'>Search</button>
                    </InputGroup>
                </Form.Group>
            </Form>
            <div>
                <div className='search'><h2>Search List</h2></div>
                {
                    searchTerm2.current === '' ? '' : (

                        crimeData?.length > 0 ? (
                            <div>
                                {
                                    crimeData.map((data, index) => (
                                        <div key={index}>
                                            < CrimeTable crimeInfo={data} postcode={searchTerm2.current} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div>  <NotFound errorMessage={errorMessage} /> </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Home
