
const calculateAverageRating = reviews => {
    const totalRating = reviews?.reduce((acc,item)=> acc + item.rating, 0);

    const averageRating = 
      totalRating === 0 
      ? ""
      : totalRating ===1 
      ? totalRating 
      : (totalRating / reviews?.length).toFixed(1);

      return {
        totalRating,
        averageRating,
      };
};

export default calculateAverageRating;