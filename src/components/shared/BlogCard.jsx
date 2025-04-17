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

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 10H3.00005M16 2V6M8.00005 2V6M7.80005 22H16.2C17.8802 22 18.7203 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.6731 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.6731 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7203 4 17.8802 4 16.2 4H7.80005C6.11989 4 5.27981 4 4.63807 4.32698C4.07359 4.6146 3.61465 5.07354 3.32703 5.63803C3.00005 6.27976 3.00005 7.11984 3.00005 8.8V17.2C3.00005 18.8802 3.00005 19.7202 3.32703 20.362C3.61465 20.9265 4.07359 21.3854 4.63807 21.673C5.27981 22 6.11989 22 7.80005 22Z"
                stroke="#FFB84E"
                strokeWidth="0.856439"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[#0B1327] font-nunito text-[14px] md:text-[15px] lg:text-[16px] not-italic font-normal leading-[26.24px]">
            {date}
          </span>
        </div>

        <h3 className="text-[#2F2F2F] font-noto text-[20px] not-italic font-semibold leading-[26.4px] tracking-[-0.4px]">
          {title}
        </h3>

        <p className="text-[#757575] font-nunito text-[16px] not-italic font-normal leading-[26.24px]">
          {excerpt}
        </p>

        <div className=" flex items-center justify-between gap-1">
          <div className="flex items-center gap-1 text-[#757575] font-nunito text-[14px] not-italic font-normal leading-[22.96px]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.6667 5.16667C10.6667 6.63943 9.47274 7.83333 8 7.83333C6.52724 7.83333 5.33334 6.63943 5.33334 5.16667C5.33334 3.69391 6.52724 2.5 8 2.5C9.47274 2.5 10.6667 3.69391 10.6667 5.16667Z"
                  stroke="#757575"
                  stroke-width="1.04968"
                />
                <path
                  d="M9.33334 9.83398H6.66667C4.82572 9.83398 3.33334 11.3264 3.33334 13.1673C3.33334 13.9037 3.93029 14.5007 4.66667 14.5007H11.3333C12.0697 14.5007 12.6667 13.9037 12.6667 13.1673C12.6667 11.3264 11.1743 9.83398 9.33334 9.83398Z"
                  stroke="#757575"
                  stroke-width="1.04968"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            {author}
          </div>
          <div className="flex items-center gap-1 text-[#757575] font-nunito text-[14px] not-italic font-normal leading-[22.96px]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.86131 15.1673C12.5432 15.1673 15.528 12.1825 15.528 8.50065C15.528 4.81875 12.5432 1.83398 8.86131 1.83398C5.17941 1.83398 2.19464 4.81875 2.19464 8.50065C2.19464 12.1825 5.17941 15.1673 8.86131 15.1673Z"
                stroke="#757575"
                stroke-width="0.924683"
              />
              <path
                d="M8.86133 5.83398V8.50065L10.1947 9.83398"
                stroke="#757575"
                strokeWidth="0.924683"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            {readTime} read
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
