import Image from "next/image";

export default function Navigation() {
    return (
        
        <nav>
        {/* NAV */}
        {/* UTILITY BAR */}
        <div className="nav-utility">
            <ul className="nav-utility-links">
            <li><a href="https://www.7hills.org/admissions/request-information/">Request Information</a></li>
            <li><a href="https://www.7hills.org/admissions/visit-seven-hills/">Explore Seven Hills</a></li>
            <li><a href="https://portals.veracross.com/sevenhills/form/request-information/request-information-account/account-lookup" className="util-apply">Apply</a></li>
            <li><a href="https://www.7hills.org/seven-hills/alumni/publications-news/">News</a></li>
            <li><a href="https://www.7hills.org/seven-hills/giving/">Giving</a></li>
            <li><a href="https://www.7hills.org/seven-hills/alumni/">Alumni</a></li>
            <li><a href="https://www.7hills.org/parents/">Parents</a></li>
            <li><a href="https://accounts.veracross.com/sevenhills/portals/login">Veracross Login</a></li>
            </ul>
        </div>
        {/* MAIN NAV ROW */}
        <div className="nav-main">
        <a href="#" className="nav-logo">
            <Image
                src='/images/logo.svg'
                alt='Seven Hills School'
                height={80}
                width={80}
            />
        </a>
        <ul className="nav-links">

            {/* ABOUT */}
            <li className="has-dropdown">
            <a href="https://www.7hills.org/about/">About <span className="nav-arrow">▼</span></a>
            <div className="mega-panel">
                <div className="mega-inner">
                <div className="mega-col">
                    <div className="mega-col-title">The School</div>
                    <ul>
                    <li><a href="https://www.7hills.org/about/">Head's Welcome</a></li>
                    <li><a href="https://www.7hills.org/about/seven-hills-at-a-glance/">Seven Hills At A Glance</a></li>
                    <li><a href="https://www.7hills.org/about/our-mission-methods-and-values/">Our Mission, Methods, and Values</a></li>
                    <li><a href="https://www.7hills.org/about/commitment-to-dei/">Commitment to Diversity, Equity &amp; Inclusion</a></li>
                    </ul>
                </div>
                <div className="mega-col">
                    <div className="mega-col-title">People</div>
                    <ul>
                    <li><a href="https://www.7hills.org/about/leadership-team/">Leadership Team</a></li>
                    <li><a href="https://www.7hills.org/about/board-of-trustees/">Board of Trustees</a></li>
                    <li><a href="https://www.7hills.org/about/faculty-and-staff-directory/">Faculty and Staff Directory</a></li>
                    <li><a href="https://www.7hills.org/about/employment/">Employment</a></li>
                    </ul>
                </div>
                <div className="mega-col">
                    <div className="mega-col-title">News &amp; Updates</div>
                    <ul>
                    <li><a href="https://www.7hills.org/seven-hills/alumni/publications-news/">Publications and News</a></li>
                    <li><a href="https://www.7hills.org/about/unification-updates/">Unification Updates</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </li>

            {/* WHY SEVEN HILLS */}
            <li><a href="https://www.7hills.org/why-seven-hills/">Why Seven Hills</a></li>

            {/* ADMISSIONS */}
            <li className="has-dropdown">
            <a href="https://www.7hills.org/admissions/">Admissions <span className="nav-arrow">▼</span></a>
            <div className="mega-panel">
                <div className="mega-inner">
                <div className="mega-col">
                    <div className="mega-col-title">Get Started</div>
                    <ul>
                    <li><a href="https://www.7hills.org/admissions/visit-seven-hills/">Explore Seven Hills</a></li>
                    <li><a href="https://www.7hills.org/admissions/request-information/">Request Information</a></li>
                    <li><a href="https://www.7hills.org/admissions/middle-and-upper-school-student-visit-day/">Middle &amp; Upper School Student Visit Day</a></li>
                    <li><a href="https://www.7hills.org/admissions/how-to-apply/">How to Apply</a></li>
                    </ul>
                </div>
                <div className="mega-col">
                    <div className="mega-col-title">Details</div>
                    <ul>
                    <li><a href="https://www.7hills.org/admissions/tuition-tuition-assistance/">Tuition and Tuition Assistance</a></li>
                    <li><a href="https://www.7hills.org/admissions/frequently-asked-questions-2/">General Admissions FAQs</a></li>
                    <li><a href="https://www.7hills.org/admissions/driving-directions/">Transportation, Driving Directions &amp; Maps</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </li>

            {/* ACADEMICS */}
            <li className="has-dropdown">
            <a href="https://www.7hills.org/academics/">Academics <span className="nav-arrow">▼</span></a>
            <div className="mega-panel">
                <div className="mega-inner">
                <div className="mega-col">
                    <div className="mega-col-title">By Division</div>
                    <ul>
                    <li><a href="https://www.7hills.org/academics/beginnings-parent-toddler-enrichment-program/">Beginnings Parent &amp; Toddler Program</a></li>
                    <li><a href="https://www.7hills.org/academics/early-childhood/">Early Childhood</a></li>
                    <li><a href="https://www.7hills.org/academics/lower-school/">Lower School</a></li>
                    <li><a href="https://www.7hills.org/academics/middle-school/">Middle School</a></li>
                    <li><a href="https://www.7hills.org/academics/upper-school/">Upper School</a></li>
                    </ul>
                </div>
                <div className="mega-col">
                    <div className="mega-col-title">Programs</div>
                    <ul>
                    <li><a href="https://www.7hills.org/academics/four-year-college-counseling/">Four-Year College Counseling</a></li>
                    <li><a href="https://www.7hills.org/academics/signatures-of-seven-hills/">Signatures of Seven Hills</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </li>

            {/* BEYOND THE SCHOOL DAY */}
            <li className="has-dropdown">
            <a href="#">Beyond the School Day <span className="nav-arrow">▼</span></a>
            <div className="mega-panel">
                <div className="mega-inner">
                <div className="mega-col">
                    <div className="mega-col-title">Extended Programs</div>
                    <ul>
                    <li><a href="https://www.7hills.org/parents/early-care-and-after-the-bell-2/">Early Care and After the Bell</a></li>
                    <li><a href="https://www.7hills.org/parents/holiday-care/">Holiday Care</a></li>
                    <li><a href="https://www.7hills.org/parents/summer-program-3/">Summer Program</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </li>

            {/* ATHLETICS */}
            <li className="has-dropdown">
            <a href="https://www.7hills.org/athletics/">Athletics <span className="nav-arrow">▼</span></a>
            <div className="mega-panel">
                <div className="mega-inner">
                <div className="mega-col">
                    <div className="mega-col-title">Programs</div>
                    <ul>
                    <li><a href="https://www.7hills.org/athletics/upper-school-athletics/">Upper School Athletics</a></li>
                    <li><a href="https://www.7hills.org/athletics/middle-school-athletics/">Middle School Athletics</a></li>
                    <li><a href="https://www.7hills.org/athletics/lower-school-athletics/">Lower School Athletics</a></li>
                    <li><a href="http://www.gostingers.org">Schedules, Rosters, and Results</a></li>
                    </ul>
                </div>
                <div className="mega-col">
                    <div className="mega-col-title">Resources</div>
                    <ul>
                    <li><a href="https://www.7hills.org/athletics/facilities/">Athletics Facilities</a></li>
                    <li><a href="https://www.7hills.org/athletics/for-our-fans/">For Our Fans</a></li>
                    <li><a href="https://www.7hills.org/athletics/driving-directions-and-maps/">Driving Directions and Maps</a></li>
                    <li><a href="https://www.7hills.org/athletics/athletics-hall-fame/">Championships and Awards</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </li>

            {/* SEARCH + CTA */}
            <li>
            <button className="nav-search-btn" aria-label="Search">
                <Image 
                    src='/images/search.svg'
                    alt='search'
                    height={24}
                    width={24}
                />
            </button>
            </li>
            <li><a href="https://portals.veracross.com/sevenhills/form/request-information/request-information-account/account-lookup" className="nav-cta">Apply Now</a></li>

        </ul>
        </div>
        </nav>
    )
}