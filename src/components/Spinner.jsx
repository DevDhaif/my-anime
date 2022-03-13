import { FaSpinner } from 'react-icons/fa';
function Spinner() {
  return <div>
 {/*<img src={Loader} alt="" />*/}
 <div className='mx-auto flex flex-col items-center space-y-3 justify-center'>
            <FaSpinner className='h-16 w-16 animate-load fill-bg-prime ease-linear'/>
            <h3>Please wait...</h3>
            
        </div>
  </div>;
}

export default Spinner;
