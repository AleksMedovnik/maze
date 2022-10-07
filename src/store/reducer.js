const GET_MATRIX = 'get matrix';
const INC_LEVEL = 'increment level'
// const START_GAME = 'START-GAME';
const IS_OVER = 'IS-OVER';
const STEP_TOP = 'STEP-TOP';
const STEP_RIGHT = 'STEP-RIGHT';
const STEP_BOTTOM = 'STEP-BOTTOM';
const STEP_LEFT = 'STEP-LEFT';
// const RESTART_GAME = 'RESTART-GAME';

/* const possibleMatrices = {
    chooseMatrices() {
        return Math.floor(Math.random() * (this.matrix.length));
    },
    matrix: [],
} */
const initialState = {
    level: 1,
    activeCell: [6, 5],
    matrix: [],
    start: true,
    distanceTraveled: [[6, 5]],
}

// let randomMatrix = possibleMatrices.chooseMatrices();

/* const randomMatricesShoose = (state, possibleMatrices) => {
    let matrix = possibleMatrices.matrix
    return {
        ...state,
        activeCell: [6, 5],
        matrix,
        start: true,
        distanceTraveled: [[6, 5]],
    };
} */


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MATRIX:
            return { ...initialState, level: action.level, matrix: [...action.matrix] }

        case INC_LEVEL:
            return { ...state, level: state.level + 1, matrix: [] }

        case STEP_TOP:
            if (state.matrix[state.activeCell[0] - 1][state.activeCell[1]] === state.matrix[state.activeCell[0]][state.activeCell[1]] + 1) {
                return {
                    ...state,
                    activeCell: [state.activeCell[0] - 1, state.activeCell[1]],
                    distanceTraveled: [...state.distanceTraveled, [state.activeCell[0] - 1, state.activeCell[1]]],
                }
            }
            return state;

        case STEP_RIGHT:
            if (state.matrix[state.activeCell[0]][state.activeCell[1] + 1] === state.matrix[state.activeCell[0]][state.activeCell[1]] + 1) {
                return {
                    ...state,
                    activeCell: [state.activeCell[0], state.activeCell[1] + 1],
                    distanceTraveled: [...state.distanceTraveled, [state.activeCell[0], state.activeCell[1] + 1]],
                }
            }
            return state;

        case STEP_BOTTOM:
            if (state.matrix[state.activeCell[0] + 1][state.activeCell[1]] === state.matrix[state.activeCell[0]][state.activeCell[1]] + 1) {
                return {
                    ...state,
                    activeCell: [state.activeCell[0] + 1, state.activeCell[1]],
                    distanceTraveled: [...state.distanceTraveled, [state.activeCell[0] + 1, state.activeCell[1]]],
                }
            }
            return state;

        case STEP_LEFT:
            if (state.matrix[state.activeCell[0]][state.activeCell[1] - 1] === state.matrix[state.activeCell[0]][state.activeCell[1]] + 1) {
                return {
                    ...state,
                    activeCell: [state.activeCell[0], state.activeCell[1] - 1],
                    distanceTraveled: [...state.distanceTraveled, [state.activeCell[0], state.activeCell[1] - 1]],
                }
            }
            return state;

        /* case START_GAME:
            randomMatrix = possibleMatrices.chooseMatrices();
            return randomMatricesShoose(state, possibleMatrices); */

        /* case RESTART_GAME:
            return randomMatricesShoose(state, possibleMatrices); */

        case IS_OVER:
            if (state.matrix[state.activeCell[0]][state.activeCell[1] - 1] !== state.matrix[state.activeCell[0]][state.activeCell[1]] + 1 &&
                state.matrix[state.activeCell[0]][state.activeCell[1] + 1] !== state.matrix[state.activeCell[0]][state.activeCell[1]] + 1 &&
                state.matrix[state.activeCell[0] - 1][state.activeCell[1]] !== state.matrix[state.activeCell[0]][state.activeCell[1]] + 1 &&
                state.matrix[state.activeCell[0] + 1][state.activeCell[1]] !== state.matrix[state.activeCell[0]][state.activeCell[1]] + 1) {
                return {
                    ...state,
                    start: false,
                }
            }
            return state;
    }

    return state;
}


export const getMatrix = (matrix, level) => ({ type: GET_MATRIX, matrix, level })
export const incLevel = () => ({ type: INC_LEVEL });
// export const startGame = () => ({ type: START_GAME });
// export const restartGame = () => ({ type: RESTART_GAME });
export const isOver = () => ({ type: IS_OVER });
export const takeStepUp = () => ({ type: STEP_TOP });
export const takeStepRight = () => ({ type: STEP_RIGHT });
export const takeStepDown = () => ({ type: STEP_BOTTOM });
export const takeStepLeft = () => ({ type: STEP_LEFT });


export default reducer;