import React, { useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { HiOutlineMinusCircle } from 'react-icons/hi'
import './header.css'
export default function Radiogroup() {
  const [increment, setIncrement] = useState(4)
  const [add, setAdd] = useState([{ data: 'item', id: 1 }, { data: 'item', id: 2 }, { data: 'item', id: 3 }])
  const [itemVal, setItemVal] = useState(4)

  const handleAdd = () => {
    setIncrement(increment + 1)
    setAdd([...add, { data:"item", id:increment }])
    setItemVal(itemVal + 1)
  }
  const length = add.length
  console.log(length)
  const handleDelete = (index, id, item) => {
    const delData = add.filter((item) => {
      return index !== item.id
    })
    setAdd(delData)
    // setItemVal(itemVal - 1)
  }
  return (
    <div>
      <div className='radio-icons'>
        <div className='add-icons'>
          {
            add.map((item) => {
              return (
                <>
                <div><HiOutlineMinusCircle onClick={() => handleDelete(item.id)} />{item.data}{item.id}</div>  
                </>
              )
            })
          }
        </div>
          <IoMdAddCircleOutline onClick={handleAdd} />item{itemVal}

      </div>
    </div>
  )
}
