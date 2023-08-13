import React, { useEffect } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { ApiHelper } from '../apiHelper/ApiHelper'


const Home = () => {

const apiDataHelper = new ApiHelper();
const getPostCodeDataAsync = async() => {
    const response = await apiDataHelper.getApiPostCodeDataAsync()
    console.log(response);
    return response
}
useEffect(() => {
    getPostCodeDataAsync();
})


  return (
    <div>
      <h1>Search Crime Data By Post Code</h1>
      <Form >
        <Form.Group >
          <InputGroup className="mb-3" >
            <Form.Control
              type='text'
              className='inputBox'
              placeholder="Please type in the post code"
              aria-label="Post code"
            />
            <button type="submit" className='btn'>Search</button>
          </InputGroup>
        </Form.Group>
      </Form>

    </div>
  )
}

export default Home
