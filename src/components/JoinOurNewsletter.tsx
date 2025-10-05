export default function JoinOurNewsletter() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex flex-row-reverse ">
          <input
            type="text"
            className="w-[190px] h-8.5 bg-[#F0EFEB] rounded-md placeholder:text-[#C9A35B] placeholder:text-right"
            placeholder="... ایمیل شما"
          />
          <button className="w-[63px] h-8.5 bg-[#151517] rounded-md relative left-2"></button>
        </div>
        <div className="flex flex-col">
          <p>در خبرنامه ما عضو شوید. </p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از
          </p>
        </div>
      </div>
      <div className="w-[228px] h-[170px] bg-amber-950"></div>
    </div>
  );
}
