import { useSelector } from 'react-redux';
import spriteTrucks from '../assets/spriteTrucks.svg';
import { truckDetailsSelector } from '../redux/trucks/truckSelectors';

const Reviews = () => {
  const truckDetails = useSelector(truckDetailsSelector);

  const reviews = truckDetails?.reviews || [];
  return (
    <div className="mr-[0px] md:mr-[20px] lg:mr-[40px]">
      <ul className="flex flex-col gap-[44px]">
        {reviews.map((review, ind) => (
          <li key={ind} className="max-w-[631px] px-[12px]">
            <div className="flex items-center mt-[56px]">
              <p className="flex items-center justify-center w-[60px] h-[60px] rounded-[60px] text-[24px] leading-[32px] text-heartColor bg-bgHeaderColor ">
                {review.reviewer_name.charAt(0)}
              </p>

              <div className="ml-[16px]">
                <p className="font-medium">{review.reviewer_name}</p>
                <div className="flex items-center fill-bgBadgeColor mt-[4px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-[16px] h-[16px] ${
                        star <= review.reviewer_rating ? 'fill-starColor' : 'fill-bgBadgeColor'
                      }`}>
                      <use
                        className="w-[32px] h-[32px] "
                        href={`${spriteTrucks}#iconStarGrey`}></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-textMonthPassed font-normal mt-[16px]">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
