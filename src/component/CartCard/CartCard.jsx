/* eslint-disable react/prop-types */

const CartCard = ({ cart, handleDelete }) => {
  const { _id, name, photo } = cart;

  return (
    <div className="flex items-center gap-4 bg-red-200 p-4 rounded-lg">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={photo} />
        </div>
      </div>
      <div>
        <h2 className="text-xl">{name}</h2>
        <p>Price: 800tk</p>
        <button
          className="bg-green-400 p-2 mt-3 rounded-full text-center text-white font-bold max-w-[190px] w-full"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;
