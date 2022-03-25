import React, { useState, useLayoutEffect } from "react";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/actions/user.action";

const DetailFav = ({ user, productId }) => {
  const [isFav, setIsFav] = useState(false);
  const access_token = useSelector((state) => state.user.access_token);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    const findFav = user.favorites.find((id) => id === productId);
    if (!findFav) return setIsFav(false);
    return setIsFav(true);
  }, [user, productId]);

  const saveFav = () => {
    dispatch(setFavorites(access_token, productId));
  };
  return (
    <div className="detail-item-mark">
      {!isFav ? (
        <BsBookmarks
          size={26}
          color={"#353535"}
          style={{ cursor: "pointer" }}
          onClick={saveFav}
        />
      ) : (
        <BsBookmarksFill
          size={26}
          color={"#353535"}
          style={{ cursor: "pointer" }}
          onClick={saveFav}
        />
      )}
    </div>
  );
};

export default DetailFav;
