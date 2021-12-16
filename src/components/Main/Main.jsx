import { useEffect } from "react";
import { withRouter } from 'react-router-dom';

const Main = (props) => {

    const assignClassName = (trIndex, index) => {
        if (props.distanceTraveled.some(cell => cell[0] === trIndex && cell[1] === index)) {
            return 'cell activeCell';
        }
        return 'cell';
    }

    const isWin = () => {
        if (props.activeCell.includes(0) || props.activeCell.includes(11)) {
            props.startGame();
            props.history.push('/win');
        }
        if (!props.start) {
            setTimeout(() => {
                props.startGame();
                props.history.push('/gameOver');
            }, 2000)
        }
    }

    useEffect(() => {
        isWin();
        props.isOver();
    }, [props.activeCell, props.start]);



    const tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={`_${trIndex}`}>{tr.map((td, index) => {
                return (
                    <td className={assignClassName(trIndex, index)} key={`_${trIndex}_${index}`}>
                        {td}
                    </td>
                )
            })}
            </tr>
        )
    });

    return (
        <div className='main'>
            <table className='table'>
                <tbody>
                    {tbody}
                </tbody>
            </table>
            <div className="controls">
                <div className='arrows'>
                    <button className='arrow arrow-top' onClick={props.takeStepUp}></button>
                    <button className='arrow arrow-right' onClick={props.takeStepRight}></button>
                    <button className='arrow arrow-bottom' onClick={props.takeStepDown}></button>
                    <button className='arrow arrow-left' onClick={props.takeStepLeft}></button>
                </div>
                <button onClick={props.restartGame} className="restart">Вернуться на старт</button>
            </div>
        </div>
    )
}

export default withRouter(Main)