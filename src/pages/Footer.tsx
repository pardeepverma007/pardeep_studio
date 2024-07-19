import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
const Footre = () => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                <div>
                    <a href="#!" className="text-white me-4">
                        <FaFacebookF />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <FaTwitter />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <FaGoogle />
                    </a>
                    <a href="#!" className="text-white">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Footre