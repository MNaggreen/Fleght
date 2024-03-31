import { useState, CSSProperties } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#AC6AFF',
}

function Loader() {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#ffffff')

  return (
    <div className="sweet-loading">
      {/*<button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      <ClipLoader
        color={'#AC6AFF'}
        loading={'RiseLoader'}
        cssOverride={override}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
