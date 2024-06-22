import { connect } from 'react-redux';

import DarkMode from './DarkMode.component';

/** @namespace ScandiDarkTheme/Component/DarkMode/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
    // wishlistItems: state.WishlistReducer.productsInWishlist
});

/** @namespace ScandiDarkTheme/Component/DarkMode/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({
    // addProduct: options => CartDispatcher.addProductToCart(dispatch, options)
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkMode);
