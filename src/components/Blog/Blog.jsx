import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog ; 
    
    return (
        <div className='my-10 border-b-2'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between mt-8 mb-4 items-center'>
                <div className='flex items-center gap-6'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='font-semibold text-[#11111199]'>
                            {posted_date}
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={()=> handleAddToBookmarks(blog)}
                        className='ml-2 text-2xl'><IoBookmarksOutline></IoBookmarksOutline></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-3'>{title}</h2>
            <p className='text-xl text-[#11111199] '>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-4'><a href="">{hash}</a></span>)
                }
            </p>
            <button 
                className='text-xl text-[#6047EC] underline font-semibold my-5'
                onClick={()=> handleMarkAsRead(reading_time)}
            >
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;