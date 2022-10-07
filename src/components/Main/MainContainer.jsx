import { connect } from "react-redux";
import {
    takeStepUp,
    takeStepRight,
    takeStepDown,
    takeStepLeft,
    incLevel,
    // startGame,
    isOver,
    // restartGame,
    getMatrix
} from '../../store/reducer';
import Main from './Main';

const mapStateToProps = state => {
    return {
        level: state.reducer.level,
        activeCell: state.reducer.activeCell,
        matrix: state.reducer.matrix,
        start: state.reducer.start,
        distanceTraveled: state.reducer.distanceTraveled,
    }
}


export default connect(mapStateToProps, {
    getMatrix,
    takeStepUp,
    takeStepRight,
    takeStepDown,
    takeStepLeft,
    incLevel,
    // startGame,
    // restartGame,
    isOver,
})(Main);