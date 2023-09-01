import React from 'react'
export default function Footer() {
    return (
        <div className="text-white bg-[url('/assets/footer-bg.png')] bg-cover bg-center bg-no-repeat min-h-fit  py-12 px-24 ">
            <div className="grid grid-cols-6 gap-28">
                <div className="location flex flex-col col-span-2 gap-6">
                    <p className="font-semibold text-xl">Location</p>
                    <p className="text-secondary-100">
                        PT NautiPro Connect Solutions <br />
                        Sunflower Juanda A2<br />
                        Sidoarjo 61252

                    </p>
                    <iframe
                        className='w-full h-60'
                        src="https://www.google.com/maps/embed?LINK" >
                    </iframe>
                </div>
                <div className="col-span-3 flex flex-col gap-6">
                    <p className="font-semibold text-xl">Contact</p>
                    <div className="grid grid-cols-2 gap-y-6">
                        <div className="items">
                            <p className='font-semibold'>General Inquiry</p>
                            <p className='text-secondary-200'>info@nautiprosolutions.com</p>
                        </div>
                        <div className="items">
                            <p className='font-semibold'>Phone / Whatsapp</p>
                            <p className='text-secondary-200'>+6287841504535</p>
                        </div>
                        <div className="items">
                            <p className='font-semibold'>Marketing Sales</p>
                            <p className='text-secondary-200'>sales@nautiprosolutions.com</p>
                        </div>
                        <div className="items">
                            <p className='font-semibold'>LinkedIn</p>
                            <p className='text-secondary-200'>Nautipro Connect Solutions</p>
                        </div>
                        <div className="items">
                            <p className='font-semibold'>Careers</p>
                            <p className='text-secondary-200'>-</p>
                        </div>

                    </div>

                </div>
            </div>
            <p className='text-sm mt-10 text-sencodary-100 text-center'>© 2023, NautiPro Connect Solutions</p>
        </div>
    )
}