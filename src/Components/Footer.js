import React from 'react'
import PNYlogo from '../Assets/images/pny.png'

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Courses We Offers in Cities</p>
                    <p>Lahore | Rawalpindi  | Karachi  | Multan  | Sialkot  | Faisalabad  | Gujranwala  | Azad Kashmir  | Islamabad</p>
                </aside>
            </footer>
            <footer class="footer p-10 bg-base-200 text-base-content">
                <aside className='lg:w-[361px]'>
                    <img src={PNYlogo} alt="" />
                    <p> <span className='font-bold'>Our head office is located at:</span> <br />
                        Office # 1, Level # 14, Arfa Software Technology Park,
                        Ferozepur Road Lahore, Pakistan
                        Phone: 03041111774
                        Whatsapp: 03201443744</p>
                </aside>
                <nav className='max-sm:text-sm'>
                    <header class=" text-black font-bold">Quick Link</header>
                    <a class="link link-hover">FAQs</a>
                    <a class="link link-hover">Admission</a>
                    <a class="link link-hover">Event</a>
                    <a class="link link-hover">Gallery</a>
                    <a class="link link-hover">Instructors</a>
                    <a class="link link-hover">Terms & Conditions</a>
                    <a class="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                    <header class="text-black font-bold">Offered Courses</header>
                    <a class="link link-hover">Meta Social Media Marketing Bootcamp</a>
                    <a class="link link-hover">Instagram Marketing Expert Bootcamp</a>
                    <a class="link link-hover">Deep Learning and Computer Vision for Python</a>
                    <a class="link link-hover">Short Courses in Multan</a>
                    <a class="link link-hover">Sketchup bootcamp - Creating interior with SketchUp</a>
                    <a class="link link-hover">Bootcamp Advacne UI/UX with Figma</a>
                    <a class="link link-hover">Bootcamp - Python</a>
                </nav>
                {/* <nav>
                    <header class="footer-title">Company</header>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact us</a>
                    <a class="link link-hover">Blog</a>
                </nav> */}
                <nav>
                    <header class="text-black font-bold">Language Courses</header>
                    <a class="link link-hover">Spoken English Language Course</a>
                    <a class="link link-hover">IELTS prepration course</a>
                    <a class="link link-hover">Pearson Test of English</a>
                </nav>
            </footer>
            <footer class="footer footer-center lg:p-10 bg-base-200 text-base-content rounded">
                <nav class="grid grid-flow-col gap-4 font-bold ">
                    <a class="hover:text-blue-200" href='/about'>About us</a>
                    <a class="link link-hover">Careers</a>
                    <a class="link link-hover">Contact us</a>
                    <a class="link link-hover">Blog</a>
                </nav>
                <nav>
                    <form className='max-sm:p-4'>
                        {/* <header class="footer-title">Newsletter</header> */}
                        <fieldset class="form-control lg:w-80">
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </nav>

            </footer>
            <div className='text-center bg-black/70 text-white shadow-xl lg:text-4xl font-bold '>
                <marquee behavior="" direction="">Our Branches</marquee>
            </div>
            <footer class="footer  p-10 bg-base-200 text-base-content">

                <nav>
                    <img src={PNYlogo} alt="" />
                    <header class="footer-title">Arfa Tower (Head Office)</header>
                    <a class="link link-hover  w-[214px]">Office 1, Level #14, Arfa Software Technology Park, Ferozepur Road Lahore</a>

                </nav>
                <nav>
                    <header class="footer-title">Iqbal Town</header>
                    <a class="link link-hover  w-[214px]">743 B Kashmir Block Allama Iqbal Town Lahore</a>

                </nav>
                <nav>
                    <header class="footer-title">Johar Town</header>
                    <a class="link link-hover  w-[214px]">1st Floor 256 / A, Block R2 Near Shaukat Khanam Hospital, next to Standard Chartered, Lahore</a>

                </nav>
                <nav>
                    <header class="footer-title">Multan</header>
                    <a class="link link-hover w-[214px]">237-B, Model Town, Main Boulevard, Multan</a>
                </nav>
                <nav>
                    <header class="footer-title">View All Branches</header>
                    <a class="link link-hover w-[214px]"> View All Branches</a>
                </nav>
            </footer>
            <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside>
                    <p>Copyright © 2023 - All right reserved by PNY Trainings</p>
                </aside>
                <nav class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
