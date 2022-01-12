import React from 'react'
import{IState as IProps} from '../App'



const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>{person.name}</div>
                    <div>{person.age} YEARS OLD</div>
                    <div>{person.note}</div>
                </li>
            )
        })
    }
    return (
        <div className='wi'>
            {renderList()}
        </div>
    )
}
export default List
