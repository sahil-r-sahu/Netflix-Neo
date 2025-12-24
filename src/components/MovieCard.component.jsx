import { IMG_URL } from "../utils/constant.utils";

const movieCard = ({posterPath}) => {
  return (
    <div className="w-40 rounded-lg cursor-pointer  border-2">
      <img src={IMG_URL + posterPath} alt="Card" />
    </div>
  );
};
export default movieCard;
