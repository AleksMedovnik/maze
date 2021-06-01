import { connect } from "react-redux";
import { takeStepUp, takeStepRight, takeStepDown, takeStepLeft, startGame, isOver, } from '../../store/reducer';
import Main from './Main';

const mapStateToProps = state => {
    return {
        activeCell: state.reducer.activeCell,
        matrix: state.reducer.matrix,
        start: state.reducer.start,
        distanceTraveled: state.reducer.distanceTraveled,
    }
}

export default connect(mapStateToProps, {
    takeStepUp, 
    takeStepRight, 
    takeStepDown, 
    takeStepLeft, 
    startGame, 
    isOver,
})(Main);