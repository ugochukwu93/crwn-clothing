import SHOP_DATA from './16.2 shop.data';

const INITIAL_STATE ={
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
            default:
                return state
    }
}

export default shopReducer