import {Link} from 'react-router-dom';
const Notfound = () => {
    return ( 
        <div className="notfound">
            <p>Sorry</p>
            <p>This page doesn't exit</p>
            <Link to="/">Back to home page</Link>
        </div>
     );
}
 
export default Notfound;