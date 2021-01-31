import React from 'react';
import { connect } from 'react-redux'; 
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className = "collection-item">
      <div 
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`

        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  //calls/dispatches addItem function, function recieves item as property, passes into addItem action creator that gives us back the object where type is = to addItem and the payload is = to the item that got passed in, then new object is dispatched into store
  addItem: item => dispatch(addItem(item))  
});

export default connect(null, mapDispatchToProps)(CollectionItem);