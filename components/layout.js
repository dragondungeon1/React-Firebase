import Nav from './Nav';

export default function Layout({children}) {
    return (

        <div className="mx-6 lg:max-w-[85%]  md:max-w-2xl md:mx-auto font-poppins">
            <Nav/>
            <main>{children}</main>
            {/*<iframe*/}
            {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8924297995!2d4.763878108967292!3d52.354582834316005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1snl!2snl!4v1666550666590!5m2!1snl!2snl"*/}
            {/*    width="1600" height="450" allowFullScreen="" loading="lazy"*/}
            {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
        </div>
    )
}