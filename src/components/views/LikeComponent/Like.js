import './Like.css';
import {BsHandThumbsUp,BsHandThumbsDown} from 'react-icons/bs'
const Like = () => {

    return ( 
    <div className='Like-container'>
        <p className='light-paragraph'>Is this page useful ?</p>
        <a href='/' className='like-icons'><BsHandThumbsUp/></a>
        <a href='/' className='like-icons'><BsHandThumbsDown/></a>
        <a href='/' className='like-edit-anchor'>Edit this page</a>
    </div> 
)}
 
export default Like;