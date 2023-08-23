import { Blog } from '@/lib/types';
import Image from 'next/image';
import React from 'react';
import Chip from './Chip';

const SingleBlogCard: React.FC<Blog> = ({
  author,
  cover_image,
  date,
  blog_title,
  excerpt,
  tags,
}) => {
  return (
    <div className="hover:bg-neutral-200 lg:hover:bg-white px-4 py-4 rounded-lg cursor:pointer transition-all ease-in-out">
      {/* author profile */}
      <div className="flex items-start gap-5 mb-7">
        <div className="w-14 h-14 overflow-hidden rounded-full">
          <Image
            src={author.picture}
            width={60}
            height={60}
            alt="Picture of the author"
            className="center"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium flex">
            {author.name}
            <span className="text-xs font-medium text-textColor-100 ml-5 flex items-center gap-2">
              <span className="rounded-full w-1 h-1 bg-textColor-300"></span>
              {date}
            </span>
          </span>
          <span className="text-xs text-textColor-50 uppercase">{author.role}</span>
        </div>
      </div>
      {/* blog title , excerpt and image  */}
      <div className="lg:flex lg:flex-row lg:gap-10 flex flex-col-reverse gap-5 flex-shrink">
        <div>
          <h2 className="text-lg font-bold mb-4 cursor-pointer md:text-2xl">{blog_title}</h2>
          <p className="text-base text-textColor-100">{excerpt}</p>
        </div>
        <Image
          src={cover_image}
          width={300}
          height={200}
          alt="Blog cover image"
          className="w-full lg:w-80 h-fit lg:h-48 object-cover rounded-lg flex-grow cursor-pointer"
        />
      </div>

      {/* tags */}
      <div className="flex flex-wrap md:gap-4 gap-2 mt-4">
        {tags.map((tag) => (
          <Chip key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default SingleBlogCard;
