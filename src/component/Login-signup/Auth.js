/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Dasboard from '../Dashboard/Dashboard'

const Auth = () => {
    const userDetails = {
        email: "test@gmail.com",
        password: "abc123"
    }
    const [authorised, setAuthorised] = useState(true)
    if (authorised) {
        return (
            <>
                <Dasboard />
            </>

        )
    }
}

export default Auth