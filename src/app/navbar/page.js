import React from 'react'
import { Button } from 'flowbite-react';

const Navbar = () => {
    const batches = ["Elite", "FS-A1","FS-A2", "FS-B"]
    return (
        <>
            <div className='flex mx-auto py-8 justify-center'>
                <Button.Group outline>
                    {
                        batches.map((batch) => (
                            <Button >{batch}</Button>
                        ))
                    }
                </Button.Group>
            </div>
        </>

    )
}

export default Navbar