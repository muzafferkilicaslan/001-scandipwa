import { connect } from 'react-redux';

import ModeToggleButton from './ModeToggleButton.component';

/** @namespace myFirstApp/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
    // wishlistItems: state.WishlistReducer.productsInWishlist
});

/** @namespace myFirstApp/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({
    // addProduct: options => CartDispatcher.addProductToCart(dispatch, options)
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeToggleButton);
