import Image from 'next/image';
import Link from 'next/link';
import useFetch from '../../../hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { BlogLatest } from '../../../data/blog.data';

export default function Latest() {
  const [posts, setPosts] = useState([]);
  const { data, isLoading, isSuccess, status } = useFetch('get-blog');

  useEffect(() => {
    if (isSuccess) {
      setPosts(data.data.data);
      console.log(posts);
    }
  }, [status, data, isLoading]);

  return (
    <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 w-full'>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Keep up with <b className='text-color-5'>Unique Blossom!</b>
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Select from our list of well sort out articles to keep up to date
            with latest announcments, data, events, news and many more.
          </p>
        </div>
        {/* <ReactMarkdown>{posts[0].attributes?.Content}</ReactMarkdown> */}
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='flex flex-col rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border'
            >
              <div className='flex-shrink-0 relative h-60 w-full shadow-sm border'>
                <Image
                  className='h-48 w-full object-cover'
                  src={post.attributes.image.data.attributes.url}
                  alt=''
                  layout='fill'
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-color-5'>
                    {post.attributes?.Type}
                  </p>
                  <Link href={`blog/${post.id}`} passHref>
                    <a className='block mt-2'>
                      <p className='text-xl font-semibold text-dark-100 hover:text-color-5'>
                        {post.attributes?.Title}
                      </p>
                      <p className='mt-3 text-sm text-gray-500'>
                        {/* ====== TODO: Make this thing description */}
                        {(function () {
                          return post.attributes?.Content.slice(0, 100) + '...';
                        })()}
                      </p>
                    </a>
                  </Link>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <a href={post.author?.href}>
                      <span className=' sr-only'>
                        {post.attributes?.Author.data.attributes.firstname}
                        &nbsp;
                        {post.attributes?.Author.data.attributes.lastname}
                      </span>
                      <Image
                        className='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWNhZGVtaWNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt=''
                        height={40}
                        width={40}
                        layout='intrinsic'
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium  text-color-5'>
                      {post.attributes?.Author.data.attributes.firstname}
                      &nbsp;
                      {post.attributes?.Author.data.attributes.lastname}
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>
                        {new Date(post.attributes?.createdAt).toLocaleString(
                          'en-us',
                          {
                            dateStyle: 'medium',
                          }
                        )}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
