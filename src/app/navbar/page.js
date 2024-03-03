import React from 'react'
import { Button } from 'flowbite-react';

const Navbar = ({setBatch, batches}) => {
    return (
        <>
            <div className='flex mx-auto py-8 justify-center'>
                <Button.Group outline>
                    {
                        batches.map((batch) => (
                            <Button onClick={()=>setBatch(batch)} >{batch}</Button>
                        ))
                    }
                </Button.Group>
            </div>
        </>

    )
}

export default Navbar