import { useEffect, useRef } from "react"
import "./Game.scss"
import { useDispatch, useSelector } from "react-redux"
import { bottom, changeSpeed, left, right, top } from "../../redux/slices/gameSlice";
//Car Image
import carImage from "../../assets/images/car.png"

const Game = () => {

    const data = useSelector((state) => state.game.data);
    const dispatch = useDispatch();
    const imgRef = useRef(null);


    useEffect(() => {
        console.log(data)
    },[data])

    function keyPress(e){
        if(e.keyCode === 37){
            imgRef.current.style.transform = "rotate(180deg)"
            dispatch(left())
        }else if(e.keyCode === 38){
            imgRef.current.style.transform = "rotate(-90deg)"
            dispatch(top())
        }else if(e.keyCode === 39){
            imgRef.current.style.transform = "rotate(0deg)"
            dispatch(right())
        }else{
            if(e.keyCode === 40){
                imgRef.current.style.transform = "rotate(90deg)"
                dispatch(bottom())
            }
        }
    }


    useEffect(() => {
        document.addEventListener("keydown",keyPress);

        return () => {
            document.removeEventListener("keydown",keyPress);
        }
    }) 

  return (
    <div className="game">
        <img  ref={imgRef}  src={carImage} alt="car" className="game-item" style={{top: data.top, left: data.left}} onClick={() => {
            dispatch(changeSpeed())
        }}/>
    </div>
  )
}

export default Game