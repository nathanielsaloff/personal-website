import React, { useState, useEffect } from 'react'

const Modal = ({ data }) => {
  const { columnName, dataValue } = data
}

const DataPopup = ({ data }) => {
  const { columnName, dataValue } = data
  const [hovered, setHover] = useState(false)
  const toggleHover = e => { setHover(!hovered) }
  return (
    <div className="dataPopup"
      onMouseLeave={toggleHover}
      onMouseEnter={toggleHover}
      onTouchStart={toggleHover}
      onTouchEnd={toggleHover}
      onTouchCancel={toggleHover}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        fontSize: '13px'
      }}
    >
      {hovered && (columnName === 'Name' || columnName === 'Signatory') /* columnName === 'Name' && dataValue === 'Sherie Crighton' */ ? (
        <div
          className="popup"
          style={{
            background: '#003852',
            color: 'white',
            position: 'absolute',
            top: '-6vmin',
            zIndex: 2,
            padding: '2vmin',
            width: '250px',
            // overflowY: 'scroll',
            height: 'min-content',
            whiteSpace: 'normal',
            borderRadius: '1vmin',
            boxShadow: 'rgb(0 0 0 / 56%) 0px 0px 15px 0px'
            // userSelect:'auto'
          }}

        >
          <div className="popupTitle"
            style={{
              fontSize: 16,
              fontWeight: 500
            }}
          >
            {typeof dataValue === 'object' ? dataValue.toLocaleDateString() : dataValue}
          </div>
          <div className="popupInfo"
            style={{}}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat omnis nobis dolorum expedita magnam sequi ratione rem, ullam ipsa aliquid repudiandae culpa placeat magni eos harum dolore, necessitatibus eaque qui. Recusandae error tempore, incidunt eaque vel quo veniam minus quam!
          </div>
        </div>
      ) : null}

      {/* cell data */}
      {typeof dataValue === 'object' ? dataValue.toLocaleDateString() : dataValue}
    </div>

  )
}

export default DataPopup
