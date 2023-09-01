import React from 'react'
import PNYlogo from '../Assets/images/pny.png'

const Footer = () => {
    return (
        <section>
            <div className="grid grid-cols-12">
                <div className='col-span-2'>
                    <img src={PNYlogo} alt="" />
                    <div>Our head office is located at:
                        Office # 1, Level # 14, Arfa Software Technology Park,
                        Ferozepur Road Lahore, Pakistan
                        Phone: 03041111774
                        Whatsapp: 03201443744</div>
                </div>
                <div lassName='col-span-10'>
                    <div className="coursesoffer">Courses We Offers in Cities</div>
                    <div className=''>
                        <di className=''>
                            <div>Lahore ok</div>
                            <div>Rawalpindi</div>
                            <div>Karachi</div>
                            <div>Multan</div>
                            <div>Sialkot</div>
                            <div>Faisalabad</div>
                            <div>Gujranwala</div>
                            <div>Kashmir</div>
                            <div>Islamabad</div>
                        </di>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
