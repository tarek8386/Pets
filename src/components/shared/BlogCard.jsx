import React from "react";

const BlogCard = ({ data }) => {
  const { thumbnail, category, date, title, excerpt, author, readTime } = data;

  return (
    <div className="flex gap-[22px] p-3 border border-[#E8E8E8] rounded-[20px] shadow-sm bg-white overflow-hidden">
      <div className="w-[203px] h-[127px] xl:w-[253px] xl:h-[177px] md:w-[233px] md:h-[157px] overflow-hidden rounded-[12px] relative shrink-0">
  <img
    src={thumbnail}
    alt={title}
    className="w-full h-full object-cover"
  />
    <span className="px-[16px] py-[5px] bg-[#FFF] rounded-[40px] absolute top-[15px] left-4 text-[#757575] font-nunito text-[16px] not-italic font-semibold leading-[164%] capitalize">
            {category}
          </span>
</div>


      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-500">{date}</span>
        </div>

        <h3 className="font-semibold text-[#2F2F2F] text-base md:text-lg mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-600 truncate">{excerpt}</p>

        <div className="mt-2 flex items-center text-gray-500 text-xs gap-4">
          <span>👩‍⚕️ {author}</span>
          <span>⏱ {readTime} read</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
