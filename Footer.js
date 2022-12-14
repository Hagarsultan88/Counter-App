import './Footer.css';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer (props) {

    const cur_date = new Date();
    const cur_year = cur_date.getFullYear();
    const cur_day = cur_date.getDay();
    const cur_month = cur_date.getMonth();
 
    return(
        <footer>
            <div className='cr'>All Rights reserved - Copyright &copy; {cur_year}</div>
        </footer>
    )
}

 