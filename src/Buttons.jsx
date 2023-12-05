import { useDispatch } from "react-redux";

const Buttons = () => {

    const dispatch = useDispatch()


    const handleInc = () => {
       dispatch({type: 'plus'})
    }


    const handleDec = () => {
        dispatch({type: 'minus'})
    }

    const handleNol = () => {
        dispatch({type: 'nol'})
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleNol}>0</button>
        </div>

    );
}

export default Buttons;


