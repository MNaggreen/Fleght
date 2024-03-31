import { loadingG } from '../assets'
import Loader from './design/Loader'

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ''
      } text-base`}
    >
      {/* <img className="w-20 h-20" src={loadingG} alt="Loading" /> */}
      <Loader />
      <p className="pl-3">Ожидание вашего запроса</p>
    </div>
  )
}

export default Generating
