import { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';

const Main = (props) => {

    const [isKeyPress, toggleKeyPress] = useState(true);

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
            }, 10000)
        }
    }
    const keyDown = (event) => {
        toggleKeyPress(false);
        if (isKeyPress) {
            switch (event.code) {
                case 'KeyD':
                case 'ArrowRight':
                    props.takeStepRight();
                    break;
                case 'KeyA':
                case 'ArrowLeft':
                    props.takeStepLeft();
                    break;
                case 'KeyW':
                case 'ArrowUp':
                    props.takeStepUp();
                    break;
                case 'KeyS':
                case 'ArrowDown':
                    props.takeStepDown();
                    break;
            }
        }
    }
    
    useEffect(() => {
        window.addEventListener('keyup', keyDown);
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
            <section className='arrows'>
                <button className='arrow arrow-top' onClick={props.takeStepUp}>&#10148;</button>
                <button className='arrow arrow-right' onClick={props.takeStepRight}>&#10148;</button>
                <button className='arrow arrow-bottom' onClick={props.takeStepDown}>&#10148;</button>
                <button className='arrow arrow-left' onClick={props.takeStepLeft}>&#10148;</button>
            </section>
        </div>
    )
}

export default withRouter(Main)