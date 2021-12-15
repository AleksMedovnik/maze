const START_GAME = 'START-GAME';
const IS_OVER = 'IS-OVER';
const STEP_TOP = 'STEP-TOP';
const STEP_RIGHT = 'STEP-RIGHT';
const STEP_BOTTOM = 'STEP-BOTTOM';
const STEP_LEFT = 'STEP-LEFT';

const possibleMatrices = {
    chooseMatrices() {
        return Math.floor(Math.random() * (this.matrices.length));
    },
    matrices: [
        [
            [33, 34, 33, 31, 33, 32, 31, 26, 25, 26, 27, 26],
            [34, 32, 31, 30, 31, 26, 25, 24, 23, 24, 25, 27],
            [17, 15, 14, 29, 28, 27, 6, 23, 22, 23, 24, 26],
            [16, 14, 13, 12, 11, 10, 5, 6, 21, 24, 25, 27],
            [11, 9, 8, 7, 8, 9, 4, 5, 20, 19, 18, 20],
            [14, 10, 5, 6, 3, 2, 3, 4, 5, 18, 17, 19],
            [13, 11, 4, 3, 2, 1, 2, 3, 6, 7, 16, 18],
            [10, 8, 7, 8, 3, 2, 5, 4, 5, 14, 15, 17],
            [9, 7, 6, 5, 4, 7, 6, 7, 12, 13, 14, 16],
            [12, 10, 7, 6, 5, 6, 8, 10, 11, 16, 15, 17],
            [11, 9, 8, 7, 6, 7, 8, 9, 18, 17, 16, 18],
            [10, 11, 10, 9, 8, 10, 12, 11, 20, 19, 18, 17],
        ],
        [
            [25, 24, 23, 24, 25, 20, 21, 19, 21, 22, 23, 24],
            [24, 22, 21, 8, 7, 8, 19, 18, 13, 12, 13, 25],
            [25, 23, 20, 7, 6, 7, 18, 17, 14, 11, 14, 24],
            [26, 18, 19, 6, 5, 6, 17, 16, 15, 10, 15, 23],
            [27, 17, 16, 17, 4, 3, 4, 5, 6, 9, 16, 22],
            [23, 18, 15, 16, 11, 2, 3, 4, 7, 8, 9, 21],
            [24, 19, 14, 13, 10, 1, 4, 5, 8, 9, 12, 20],
            [23, 18, 15, 12, 9, 8, 7, 6, 7, 10, 11, 21],
            [22, 17, 16, 11, 10, 9, 8, 13, 12, 11, 20, 22],
            [23, 16, 13, 12, 13, 14, 15, 14, 17, 18, 19, 23],
            [24, 15, 14, 20, 18, 17, 16, 15, 16, 17, 18, 24],
            [25, 24, 23, 22, 23, 21, 20, 21, 22, 23, 24, 25],
        ],
        [
            [19, 20, 19, 18, 21, 22, 23, 24, 25, 26, 27, 26],
            [20, 18, 17, 16, 20, 6, 7, 8, 9, 10, 24, 25],
            [21, 19, 16, 15, 16, 5, 6, 7, 8, 9, 10, 24],
            [20, 18, 17, 14, 5, 4, 5, 6, 7, 8, 9, 23],
            [19, 17, 12, 13, 14, 3, 4, 5, 6, 7, 8, 22],
            [30, 12, 11, 10, 9, 2, 9, 8, 9, 10, 9, 21],
            [31, 13, 12, 7, 8, 1, 2, 7, 12, 11, 10, 20],
            [32, 30, 13, 6, 3, 2, 5, 6, 13, 14, 19, 21],
            [31, 29, 14, 5, 4, 3, 4, 5, 6, 15, 18, 20],
            [20, 28, 7, 6, 25, 22, 21, 20, 7, 16, 17, 19],
            [29, 27, 26, 25, 24, 23, 24, 19, 18, 17, 18, 20],
            [28, 29, 28, 27, 25, 27, 26, 27, 28, 29, 30, 31],
        ],
        [
            [11, 12, 15, 14, 13, 14, 15, 14, 12, 14, 13, 14],
            [13, 10, 13, 12, 11, 12, 13, 12, 11, 10, 11, 13],
            [11, 9, 8, 9, 10, 9, 12, 11, 10, 9, 10, 12],
            [10, 8, 7, 6, 5, 8, 7, 6, 7, 8, 9, 11],
            [9, 11, 6, 5, 4, 3, 4, 5, 6, 7, 8, 10],
            [12, 10, 7, 4, 3, 2, 3, 4, 5, 6, 7, 9],
            [11, 9, 8, 3, 2, 1, 2, 3, 16, 15, 14, 16],
            [10, 8, 9, 10, 3, 2, 5, 4, 9, 10, 13, 15],
            [9, 7, 6, 5, 4, 3, 6, 7, 8, 11, 12, 14],
            [16, 14, 15, 6, 7, 8, 9, 12, 13, 12, 13, 15],
            [15, 13, 12, 11, 10, 9, 10, 11, 14, 15, 14, 16],
            [14, 15, 14, 13, 14, 12, 10, 13, 12, 17, 16, 17],
        ],
        [
            [19, 20, 19, 20, 13, 12, 11, 10, 11, 10, 11, 12],
            [20, 18, 17, 18, 11, 10, 9, 8, 9, 10, 12, 13],
            [17, 15, 16, 17, 12, 13, 8, 7, 8, 11, 12, 14],
            [16, 14, 13, 12, 15, 14, 5, 6, 7, 10, 9, 11],
            [11, 9, 10, 11, 4, 3, 4, 9, 8, 7, 8, 10],
            [10, 8, 7, 6, 5, 2, 3, 4, 5, 6, 7, 6],
            [11, 12, 4, 3, 2, 1, 2, 3, 8, 7, 6, 8],
            [10, 10, 5, 6, 3, 2, 5, 2, 9, 10, 11, 9],
            [11, 9, 8, 7, 4, 3, 4, 15, 14, 11, 15, 12],
            [14, 10, 9, 10, 11, 12, 9, 8, 13, 12, 14, 13],
            [13, 11, 10, 12, 13, 13, 14, 13, 15, 13, 15, 14],
            [12, 11, 12, 14, 16, 15, 15, 15, 14, 12, 14, 15],
        ],
    ],
}
const initialState = {
    activeCell: [6, 5],
    matrix: [],
    start: true,
    distanceTraveled: [],
}

const randomMatricesShoose = (state, possibleMatrices) => {
    let randomMatrix = possibleMatrices.chooseMatrices();
    let matrix = JSON.stringify(possibleMatrices.matrices[randomMatrix]);
    matrix = JSON.parse(matrix);

    return {
        ...state,
        activeCell: [6, 5],
        matrix,
        start: true,
        distanceTraveled: [[6, 5]],
    };
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
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

        case START_GAME:
            return randomMatricesShoose(state, possibleMatrices);

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

    return randomMatricesShoose(state, possibleMatrices);
}


export const startGame = () => ({ type: START_GAME });
export const isOver = () => ({ type: IS_OVER });
export const takeStepUp = () => ({ type: STEP_TOP });
export const takeStepRight = () => ({ type: STEP_RIGHT });
export const takeStepDown = () => ({ type: STEP_BOTTOM });
export const takeStepLeft = () => ({ type: STEP_LEFT });


export default reducer;