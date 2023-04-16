type CartItemProps = {
  name: string;
  price: number;
  quantity: number;
};

function CartItem({ name, price, quantity }: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>${price}</p>
      <p>{quantity}개</p>
    </div>
  );
}

export default CartItem;
