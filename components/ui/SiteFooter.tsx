import Image from "next/image";

export default function SiteFooter() {
    return (
        <footer>
            <div className="footer-top">
                <div>
                <Image 
                    src="/images/footer-badge.svg" alt="seven hills"
                    height={80}
                    width={80}
                    />
                <div className="footer-brand-name">The Seven Hills School</div>
                <p className="footer-tagline">A K–12 independent school in Cincinnati, Ohio — where every student is known, celebrated, and challenged to become their fullest self.</p>
                <div className="footer-col-title" style={{marginTop : '36px'}}>Our History</div>
                <p className="footer-history">The Seven Hills School has roots reaching back to 1906, with the founding of the College Preparatory School by Mary Harlan Doherty. Just a decade later, Helen Lotspeich founded the Clifton Open-Air School to foster natural curiosity and the joy of learning in children around Cincinnati. In 1928, community leaders founded the Hillsdale School as an alternative private education. In 1974, the merger of the College Preparatory School and the Hillsdale-Lotspeich School brought these learning institutions together to form the modern incarnation of The Seven Hills School.</p>
                </div>
                <div>
                <div className="footer-col-title">Accreditations</div>
                <ul className="footer-links">
                    <li><a href="#">National Association of Independent Schools</a></li>
                    <li><a href="#">Independent Schools Association of the Central States</a></li>
                    <li><a href="#">Ohio Association of Independent Schools</a></li>
                    <li><a href="#">State of Ohio</a></li>
                </ul>
                </div>
                <div>
                <div className="footer-col-title">Navigate</div>
                <ul className="footer-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Why Seven Hills</a></li>
                    <li><a href="#">Admissions</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Athletics</a></li>
                    <li><a href="#">Parents</a></li>
                    <li><a href="#">Employment</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Transportation, Driving Directions, and Campus Maps</a></li>
                </ul>
                </div>
                <div>
                    <div className="footer-col-title">Follow Us</div>
                    <ul className="footer-links" style={{marginBottom: '36px'}}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                    <div className="footer-col-title">Hillsdale Campus</div>
                    <address className="footer-address">
                        5400 Red Bank Road<br />
                        Cincinnati, Ohio 45227<br /><br />
                        Main &mdash; <a href="tel:5137282400">513.728.2400</a><br />
                        Upper &mdash; <a href="tel:5137282460">513.728.2460</a><br />
                        Middle &mdash; <a href="tel:5137282450">513.728.2450</a><br />
                        Lotspeich &mdash; <a href="tel:5137282360">513.728.2360</a>
                    </address>
                    <div className="footer-col-title" style={{marginTop: '28px'}}>Doherty Campus</div>
                    <address className="footer-address">
                        2726 Johnstone Place<br />
                        Cincinnati, Ohio 45206<br /><br />
                        <a href="tel:5137282320">513.728.2320</a>
                    </address>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copy">© 2026 The Seven Hills School &nbsp;·&nbsp; All rights reserved. &nbsp;·&nbsp; <a href="#">Non-Discrimination Statement</a></div>
                <div className="footer-gold-line"></div>
                <div className="footer-copy">Cincinnati, Ohio</div>
            </div>
        </footer>
    );
}