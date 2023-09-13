import { BsTrash } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import axios from 'axios'
import { baseURL } from '../Utils/constants'
import PropTypes from 'prop-types'

export const List = ({  id, task, setUpdateUI, updateMode }) => {

    const removeTask = () => {
        axios.delete(`${baseURL}/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState)
        })
    }

    return (
        <li>
            {task}
            <div className="icon_holder">
                <BiEditAlt className='icon' onClick={() => updateMode(id, task)}/>
                <BsTrash className='icon' onClick={removeTask} />
            </div>
        </li>
    )
}

List.propTypes = {
    id: PropTypes.string,
    task: PropTypes.string,
    setUpdateUI: PropTypes.func,
    updateMode: PropTypes.func
}