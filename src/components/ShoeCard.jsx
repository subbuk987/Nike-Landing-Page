
const ShoeCard = ({shoe, bigshoeimage, changeBigShoe}) => {

  const handleClick = () => {
    if(shoe.bigShoe != bigshoeimage){
        changeBigShoe(shoe.bigShoe)
    }
  };

  return (
        <div className={`${shoe.bigShoe === bigshoeimage ? "border-coral-red" : "border-transparent"} bg-card bg-cover bg-center border-2 rounded-2xl cursor-pointer`} onClick={handleClick}>
            <img src={shoe.thumbnail} alt="ShoeCollection"  width={127} height={103.34}/>
        </div>    
  )
}

export default ShoeCard
