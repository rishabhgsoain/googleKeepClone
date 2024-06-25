import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

const year = new Date().getFullYear()
export default function Footer() {
    return (
        <MDBFooter className="bg-dark text-center text-white">
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {year} Copyright:{' '}
                <a className='text-white' href='https://mdbootstrap.com/'>
                    Google Keep App
                </a>
            </div>
        </MDBFooter>
    );
}